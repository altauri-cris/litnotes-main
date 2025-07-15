import Link from 'next/link'
import { getBooks } from '@/lib/books'
import BookCard from '@/components/BookCard'

export default function Home() {
  const books = getBooks()

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          LitNotes Book Collection
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover amazing books and dive deep into their key insights and ideas
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {books.map((book) => (
          <BookCard key={book._id} book={book} />
        ))}
      </div>

      {books.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No books found</p>
        </div>
      )}
    </div>
  )
}