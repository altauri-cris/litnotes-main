import { getBooks } from "@/utils/books";
import BookCard from "@/components/BookCard";

export default function BooksPage() {
  const books = getBooks();

  return (
    <div className="container mx-auto px-4 py-8">
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
  );
}
