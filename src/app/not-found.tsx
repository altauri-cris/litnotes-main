import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for. Please check the URL or navigate back to our homepage.
        </p>
        <div className="space-y-4">
          <Link 
            href="/" 
            className="btn btn-primary inline-block"
          >
            Go Home
          </Link>
          <br />
          <Link 
            href="/books" 
            className="btn btn-secondary inline-block"
          >
            Browse Books
          </Link>
        </div>
      </div>
    </div>
  )
}