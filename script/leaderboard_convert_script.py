# script
#  output:{ id: {name, leaderboardType: "awards" | "charts"  }}

import json
import os

# Function to recursively traverse the tree and collect all nodes
def traverse_tree(node, parent_type, result):
    # Skip nodes without id
    if 'id' not in node:
        # But still process its children if any
        if 'children' in node:
            for child in node['children'].values():
                traverse_tree(child, parent_type, result)
        return
    
    # Add current node to result
    node_id = node['id']
    result[node_id] = {
        'name': node['name'],
        'leaderboardType': parent_type
    }
    
    # Process children recursively
    if 'children' in node:
        for child in node['children'].values():
            traverse_tree(child, parent_type, result)

# Read the leaderboard.ts file
with open('script/leaderboard.ts', 'r') as file:
    content = file.read()

# Extract the JavaScript object from the file
# This is a simple approach and might need adjustment based on the actual file format
js_object_str = content.strip()

# Find the start and end of the leaderboard object
start_index = js_object_str.find('const leaderboard = ')
if start_index != -1:
    start_index += len('const leaderboard = ')
    # Find the closing semicolon, accounting for possible comments or whitespace
    end_index = js_object_str.rfind(';')
    if end_index != -1:
        js_object_str = js_object_str[start_index:end_index].strip()
    else:
        js_object_str = js_object_str[start_index:].strip()
else:
    raise ValueError("Could not find 'const leaderboard = ' in the file")

# Convert JavaScript object to Python dictionary
# We'll use a more robust approach to parse the JavaScript object

# First, let's make some replacements to convert JS syntax to valid Python
# Replace JS object notation with Python dict notation
python_dict_str = js_object_str

# Replace JS true/false with Python True/False
python_dict_str = python_dict_str.replace('true', 'True').replace('false', 'False')

# Replace JS null with Python None
python_dict_str = python_dict_str.replace('null', 'None')

# Handle JS object property names (quoted and unquoted)
import re

# Function to add quotes to unquoted keys
def add_quotes_to_keys(match):
    key = match.group(1)
    # If the key is not already quoted
    if not (key.startswith('"') and key.endswith('"')) and not (key.startswith("'") and key.endswith("'")):
        return f'"{key}":'  # Add double quotes
    return match.group(0)  # Return as is if already quoted

# Add quotes to unquoted object keys
python_dict_str = re.sub(r'([\w]+):', add_quotes_to_keys, python_dict_str)

# Remove any function definitions or other non-JSON compatible structures
# This is a simplified approach and might not catch all cases
python_dict_str = re.sub(r'function\s*\([^)]*\)\s*{[^}]*}', '"function_removed"', python_dict_str)

# Handle any remaining JS-specific syntax
# Replace arrow functions
python_dict_str = re.sub(r'\([^)]*\)\s*=>\s*{[^}]*}', '"arrow_function_removed"', python_dict_str)

try:
    # Use eval with a restricted globals dictionary for safety
    safe_globals = {"True": True, "False": False, "None": None}
    
    # Try to evaluate the string as Python code
    try:
        leaderboard = eval(python_dict_str, safe_globals)
    except SyntaxError as e:
        print(f"Syntax error in JavaScript to Python conversion: {e}")
        print("Falling back to json.loads with additional preprocessing...")
        
        # Further clean up the string to make it valid JSON
        # Remove trailing commas in objects and arrays
        python_dict_str = re.sub(r',\s*}', '}', python_dict_str)
        python_dict_str = re.sub(r',\s*\]', ']', python_dict_str)
        
        # Try to use json.loads as a fallback
        import json
        leaderboard = json.loads(python_dict_str)
    
    # Initialize result dictionary
    result = {}
    
    # Process awards section
    if 'awards' in leaderboard:
        traverse_tree(leaderboard['awards'], 'awards', result)
    
    # Process charts section
    if 'charts' in leaderboard:
        traverse_tree(leaderboard['charts'], 'charts', result)
    
    # Convert result to TypeScript code
    ts_code = "export const leaderboardMap = " + json.dumps(result, indent=2) + ";"
    
    # Ensure the directory exists
    os.makedirs('app/data', exist_ok=True)
    
    # Write to the output file
    with open('app/data/leaderboardMap.ts', 'w') as outfile:
        outfile.write(ts_code)
    
    print("Conversion completed successfully. Output written to app/data/leaderboardMap.ts")
    
except Exception as e:
    print(f"Error during conversion: {e}")