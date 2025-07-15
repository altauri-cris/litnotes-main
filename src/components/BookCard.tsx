import Link from 'next/link'
import Image from 'next/image'
import { Book, createSlug } from '@/lib/books'
import StarRating from './StarRating'

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  const slug = createSlug(book.title)

  return (
    <Link href={`/books/${slug}`} className="block">
      <div className="book-card p-6 h-full flex flex-col">
        <div className="relative mb-4 flex-shrink-0">
          <Image
            src={book.thumbnail}
            alt={book.title}
            width={200}
            height={300}
            className="w-full h-64 object-cover rounded-lg"
            unoptimized
          />
        </div>
        
        <div className="flex-grow">
          <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
            {book.title}
          </h3>
          
          {book.subtitle && (
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {book.subtitle}
            </p>
          )}
          
          <p className="text-sm text-gray-700 mb-3">
            by {book.authors.join(', ')}
          </p>
          
          <div className="flex items-center mb-3">
            <StarRating rating={book.rating} />
            <span className="ml-2 text-sm text-gray-600">
              {book.rating} ({book.ratingCount.toLocaleString()} ratings)
            </span>
          </div>
          
          <p className="text-sm text-gray-600 mb-4 line-clamp-3">
            {book.description}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mt-auto">
          {book.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="badge secondary text-xs"
            >
              {tag}
            </span>
          ))}
          {book.tags.length > 3 && (
            <span className="text-xs text-gray-500">
              +{book.tags.length - 3} more
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}