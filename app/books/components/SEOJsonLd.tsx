import React from "react";
import { Book } from "@/constants";
import { slugify } from "@/utils";

interface SEOJsonLdProps {
  book: Book;
}

const SEOJsonLd: React.FC<SEOJsonLdProps> = ({ book }) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": book.title,
    "url": `https://litnotes.ai/book/${slugify(book.title)}`,
    "description": book.description,
    "mainEntity": {
      "@type": "Book",
      "name": book.title,
      "author": {
        "@type": "Person",
        "name": book.authors[0]
      },
      "description": book.description,
      "image": book.thumbnail,
      ...(book.rating && {
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": book.rating,
          "bestRating": 5,
          "ratingCount": book.ratingCount
        }
      }),
      ...(book.publishedDate && { "datePublished": book.publishedDate }),
      "publisher": {
        "@type": "Organization",
        "name": "Litnotes",
        "url": "https://litnotes.ai",
        "logo": {
          "@type": "ImageObject",
          "url": "https://litnotes.ai/icons/logo.svg"
        }
      },
      ...(book.seo_quotes && {
        "hasPart": book.seo_quotes.map((quote) => ({
          "@type": "CreativeWork",
          "text": quote,
          "creator": {
            "@type": "Person",
            "name": book.authors[0]
          }
        }))
      })
    }
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
