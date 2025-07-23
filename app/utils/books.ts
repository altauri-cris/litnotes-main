import { Book } from "@/constants";
import booksData from "@/data/book.json";

export function getBooks(): Book[] {
  return booksData as Book[];
}

export function getBookBySlug(slug: string): Book | undefined {
  const books = getBooks();
  return books.find((book) => slugify(book.title) === slug);
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-") // Replace multiple hyphens with single hyphen
    .trim();
}

export function getAllBookSlugs(): string[] {
  const books = getBooks();
  return books.map((book) => slugify(book.title));
}
