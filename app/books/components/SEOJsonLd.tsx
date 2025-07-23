import React from "react";
import { Book } from "@/constants";
import { slugify } from "@/utils";

interface SEOJsonLdProps {
  book: Book;
}

const SEOJsonLd: React.FC<SEOJsonLdProps> = ({ book }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Book",
    headline: book.title,
    description: book.description,
    author: {
      "@type": "Person",
      name: book.authors[0],
    },
    ...(book.publishedDate && { datePublished: book.publishedDate }),
    image: {
      "@type": "ImageObject",
      url: book.thumbnail,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      url: `https://litnotes.ai/book/${slugify(book.title)}`,
    },
    publisher: {
      "@type": "Organization",
      name: "Litnotes",
      url: "https://litnotes.ai",
      logo: {
        "@type": "ImageObject",
        url: "https://litnotes.ai/icons/logo.svg",
      },
      brand: "Litnotes",
    },
    ...(book.seo_quotes && {
      hasPart: book.seo_quotes.map((quote) => ({
        "@type": "CreativeWork",
        text: quote,
        creator: {
          "@type": "Person",
          name: book.authors[0],
        },
      })),
    }),
    ...(book.rating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: book.rating,
        ratingCount: book.ratingCount,
        bestRating: 5,
        worstRating: 1,
      },
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </>
  );
};

export default SEOJsonLd;
