"use client";

import { getBooks } from "@/utils/books";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book } from "@/constants";

// Import components
import BookCard from "./components/BookCard";
import EmptySearchResult from "./components/EmptySearchResult";
import Pagination from "./components/Pagination";
import SearchBar from "./components/SearchBar";

export default function BookPage() {
  const books = getBooks();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(books);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const booksPerPage = 9;

  // Calculate total pages
  useEffect(() => {
    setTotalPages(Math.ceil(filteredBooks.length / booksPerPage));
  }, [filteredBooks, booksPerPage]);

  // Handle search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setCurrentPage(1); // Reset to first page

    if (term.trim() === "") {
      setFilteredBooks(books);
    } else {
      const results = books.filter((book) => {
        const searchTermLower = term.toLowerCase();
        if (book.title.toLowerCase().includes(searchTermLower)) return true;
        if (
          book.subtitle &&
          book.subtitle.toLowerCase().includes(searchTermLower)
        )
          return true;
        if (book.description.toLowerCase().includes(searchTermLower))
          return true;
        if (
          book.authors.some((author) =>
            author.toLowerCase().includes(searchTermLower)
          )
        )
          return true;
        if (
          book.categories &&
          book.categories.some((category) =>
            category.toLowerCase().includes(searchTermLower)
          )
        )
          return true;
        if (
          book.tags &&
          book.tags.some((tag) => tag.toLowerCase().includes(searchTermLower))
        )
          return true;
        if (
          book.publisher &&
          book.publisher.toLowerCase().includes(searchTermLower)
        )
          return true;

        return false;
      });

      setFilteredBooks(results);
    }
  };

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate current page books
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);

  // Display book range and total count
  const bookRangeText =
    filteredBooks.length > 0
      ? `Showing ${indexOfFirstBook + 1}-${Math.min(
          indexOfLastBook,
          filteredBooks.length
        )} of ${filteredBooks.length} books`
      : "No books found";

  // Clear search
  const handleClearSearch = () => {
    setSearchTerm("");
    setFilteredBooks(books);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Books
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our curated collection of book summaries and insights to
            help you gain knowledge more efficiently
          </p>
        </div>

        {/* Search Bar Component */}
        <SearchBar
          searchTerm={searchTerm}
          onSearch={handleSearch}
          bookRangeText={bookRangeText}
          onClearSearch={handleClearSearch}
        />

        <AnimatePresence mode="wait">
          {filteredBooks.length > 0 ? (
            <motion.div
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Books Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {currentBooks.map((book, index) => (
                  <BookCard key={index} book={book} />
                ))}
              </div>

              {/* Pagination Component */}
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
              />
            </motion.div>
          ) : (
            <EmptySearchResult
              searchTerm={searchTerm}
              onClearSearch={handleClearSearch}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
