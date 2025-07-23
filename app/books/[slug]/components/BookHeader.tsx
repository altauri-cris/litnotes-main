import Image from "next/image";
import { Book } from "@/constants";

interface BookHeaderProps {
  book: Book;
}

export default function BookHeader({ book }: BookHeaderProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between max-w-6xl mx-auto">
      {/* Left side - Book Info */}
      <div className="flex-1 lg:max-w-2xl">
        {/* Title */}
        <h1
          className="mb-3"
          style={{
            overflow: "hidden",
            color: "var(--Neutral-Content, #201F20)",
            textOverflow: "ellipsis",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "34px",
            textTransform: "capitalize",
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            alignSelf: "stretch",
          }}
        >
          {book.title}
        </h1>

        {/* Author */}
        <p
          style={{
            color: "var(--Neutral-ContentMedium, rgba(0, 0, 0, 0.64))",
            fontFamily: "Montserrat",
            fontSize: "16px",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight: "20px",
            paddingBottom: "4px",
          }}
        >
          <span>{book.authors.join(", ")}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-3 mb-4">
          {/* Stars */}
          <div className="flex items-center">
            {(() => {
              const fullStars = Math.floor(book.rating);
              const hasHalfStar = book.rating % 1 >= 0.1;
              const stars = [];

              // Add full stars
              for (let i = 0; i < fullStars; i++) {
                stars.push(
                  <Image
                    key={`full-${i}`}
                    src="/images/star.svg"
                    alt="Full star"
                    width={20}
                    height={20}
                  />
                );
              }

              // Add half star if needed
              if (hasHalfStar && fullStars < 5) {
                stars.push(
                  <Image
                    key="half"
                    src="/images/half-star.svg"
                    alt="Half star"
                    width={20}
                    height={20}
                  />
                );
              }

              return stars;
            })()}
          </div>

          {/* Rating number */}
          <span className="text-lg font-medium text-gray-900">
            {book.rating}
          </span>

          {/* Rating count */}
          <span className="text-gray-600">
            ({book.ratingCount.toLocaleString()} Ratings)
          </span>
        </div>

        {/* Leaderboard */}
        <div className="flex flex-wrap gap-2 mb-8"></div>

        {/* Try 3 months button */}
        <div className="mb-6">
          <button className="flex items-center gap-2 bg-[#171617] text-white px-6 py-3 rounded font-medium transition-colors">
            <span>3 months Free Trial</span>
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Reading time */}
        <div className="flex items-center gap-2 text-gray-600">
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12,6 12,12 16,14" />
          </svg>
          <span className="text-sm">
            {book.chapter_recaps
              ? `${Math.ceil(book.chapter_recaps.length * 15)} min read`
              : "15 min read"}
          </span>
        </div>
      </div>

      {/* Right side - Book Image */}
      <div
        style={{
          width: "220px",
          height: "292px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Image
          src={"/images/book-bg.svg"}
          alt={"cover background"}
          width={138}
          height={208}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
          priority
        />
        <Image
          src={book.thumbnail}
          alt={book.title}
          width={138}
          height={208}
          style={{
            border: "1.252px solid rgba(0, 0, 0, 0.04)",
            objectFit: "cover",
            width: "138px",
            height: "208px",
            position: "absolute",
            zIndex: 1,
          }}
          priority
        />
      </div>
    </div>
  );
}