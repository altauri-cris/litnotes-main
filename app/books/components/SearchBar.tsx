import { useState } from "react";

interface SearchBarProps {
  searchTerm: string;
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  bookRangeText: string;
  onClearSearch?: () => void; // 添加清除搜索的可选函数
}

export default function SearchBar({
  searchTerm,
  onSearch,
  bookRangeText,
  onClearSearch,
}: SearchBarProps) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="max-w-3xl mx-auto mb-8 relative">
      <div
        className={`relative transition-all duration-300 ${
          isSearchFocused ? "scale-105" : ""
        }`}
      >
        <input
          type="text"
          placeholder="Search by title, author, category, tag or description..."
          value={searchTerm}
          onChange={onSearch}
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
          className="w-full px-6 py-4 rounded-full border-2 border-gray-200 focus:border-blue-500 focus:outline-none shadow-lg bg-white/90 backdrop-blur-sm text-sm md:text-lg transition-all duration-300"
        />
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center">
          {searchTerm && (
            <button
              onClick={onClearSearch}
              className="mr-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Clear search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
          <div className="text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-3 text-center">{bookRangeText}</p>
    </div>
  );
}
