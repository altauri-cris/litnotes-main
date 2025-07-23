import { notFound } from "next/navigation";
import Link from "next/link";
import { getBookBySlug, getAllBookSlugs } from "@/utils/books";
import BookHeader from "./components/BookHeader";
import BookDescription from "./components/BookDescription";

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

export default async function BookPage({ params }: BookPageProps) {
  const { slug } = await params;
  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }

  return (
    <div className="container py-8">
      <BookHeader book={book} />
      <BookDescription book={book} />
    </div>
  );
}
