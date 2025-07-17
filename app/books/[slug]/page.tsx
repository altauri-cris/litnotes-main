import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getBookBySlug, getAllBookSlugs } from "@/utils/books";

interface BookPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllBookSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export default function BookPage({ params }: BookPageProps) {
  const book = getBookBySlug(params.slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-gray-700">
              Home
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/books" className="hover:text-gray-700">
              Books
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{book.title}</li>
        </ol>
      </nav>

      {/* Book Header */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Image
              src={book.thumbnail}
              alt={book.title}
              width={400}
              height={600}
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              unoptimized
            />
          </div>
        </div>

        <div className="lg:col-span-2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {book.title}
          </h1>

          {book.subtitle && (
            <h2 className="text-xl text-gray-600 mb-6">{book.subtitle}</h2>
          )}

          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-2">
              by{" "}
              <span className="font-semibold">{book.authors.join(", ")}</span>
            </p>
            <p className="text-gray-600">
              Published by {book.publisher} on{" "}
              {new Date(book.publishedDate).toLocaleDateString()}
            </p>
          </div>

          <div className="flex items-center mb-6">
            <span className="ml-3 text-lg font-medium text-gray-900">
              {book.rating}
            </span>
            <span className="ml-2 text-gray-600">
              ({book.ratingCount.toLocaleString()} ratings)
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              {book.categories.map((category, index) => (
                <span key={index} className="badge primary">
                  {category}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {book.tags.map((tag, index) => (
                <span key={index} className="badge secondary">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Description
            </h3>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
