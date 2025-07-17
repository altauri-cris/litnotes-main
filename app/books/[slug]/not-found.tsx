import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <div className="max-w-md mx-auto">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Book Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the book you're looking for. It might have been moved or doesn't exist.
        </p>
        <div className="space-y-4">
          <Link 
            href="/books" 
            className="btn btn-primary inline-block"
          >
            Browse All Books
          </Link>
          <br />
          <Link 
            href="/" 
            className="btn btn-secondary inline-block"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  )
}