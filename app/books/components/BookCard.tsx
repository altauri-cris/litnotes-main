import Image from "next/image";
import Link from "next/link";
import { Book } from "@/constants";
import { slugify } from "@/utils";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${slugify(book.title)}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={`${book.thumbnail}`}
            alt={book.title}
            width={500}
            height={300}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="text-sm text-blue-600 font-medium mb-2">
            {book.categories?.join(", ")}
          </div>
          <div className="h-[4.5rem] mb-2">
            <h2 className="text-xl font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              {book.title}
            </h2>
          </div>
          <div className="h-[3rem] mb-4">
            <p className="text-gray-600 text-sm line-clamp-2">
              {book.description}
            </p>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-700 font-medium">
              {book.authors.join(", ")}
            </span>
            <span className="text-gray-500">{book.publishedDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
