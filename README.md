# LitNotes

A modern web application for managing and exploring book notes and summaries, built with Next.js and TypeScript.

## Features

- 📚 Browse and manage book collections
- 📝 View detailed book summaries and key ideas
- ⭐ Star rating system for books
- 📖 Chapter recaps and insights
- 🎨 Modern, responsive UI with Tailwind CSS
- 🔍 Easy navigation and book discovery

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS, SCSS
- **UI Components**: React 18
- **Build Tool**: Next.js built-in bundler

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd litnotes-main
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Build for Production

```bash
npm run build
npm run start
```

### Export Static Site

```bash
npm run export
```

This will generate a static version of the site in the `out/` directory.

## Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── books/          # Book-related pages
│   ├── globals.scss    # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   ├── BookCard.tsx    # Book display card
│   ├── ChapterRecapsSection.tsx
│   ├── KeyIdeasSection.tsx
│   └── StarRating.tsx  # Star rating component
└── lib/                # Utility functions and data
    └── books.ts        # Book data management
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Export static site

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.