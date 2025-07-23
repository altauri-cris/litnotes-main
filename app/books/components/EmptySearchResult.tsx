import Image from "next/image";

interface EmptySearchResultProps {
  searchTerm: string;
  onClearSearch: () => void;
}

export default function EmptySearchResult({
  searchTerm,
  onClearSearch,
}: EmptySearchResultProps) {
  return (
    <div
      key="no-results"
      className="flex flex-col items-center justify-center py-8 px-4"
    >
      <div className="relative w-48 h-48 mb-6">
        <div>
          <Image
            src="/images/empty-search.svg"
            alt="No results found"
            width={256}
            height={256}
            className="opacity-80"
            onError={(e) => {
              // Fallback icon if image doesn't exist
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.style.display = "none";
              document.getElementById("fallback-icon")!.style.display = "block";
            }}
          />
        </div>
        <div
          id="fallback-icon"
          style={{ display: "none" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg
            className="w-32 h-32 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-700 mb-3">No Books Found</h3>

      <p className="text-gray-600 text-center max-w-md mb-4 text-xs md:text-sm">
        Sorry, we couldn't find any books related to "{searchTerm}".
      </p>

      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4 max-w-md">
        <div className="flex items-center justify-center mb-2">
          <div className="bg-gray-200 p-2 rounded-full">
            <svg
              className="w-4 h-4 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
          </div>
        </div>
        <h4 className="text-sm md:text-base font-semibold text-gray-800 mb-1 text-center">
          Discover More Content
        </h4>
        <p className="text-gray-600 text-center text-xs mb-3">
          Our mobile app has richer book resources and personalized
          recommendations
        </p>
        <a
          href="https://play.google.com/store/apps/details?id=ai.altauri.litnotes&pli=1"
          className="w-full py-3 px-4 bg-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-300 transition-colors duration-200 text-center block"
        >
          📱 Download App
        </a>
      </div>

      <div>
        <button
          onClick={onClearSearch}
          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 flex items-center gap-2 border border-gray-200 text-sm"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          Browse All Books
        </button>
      </div>
    </div>
  );
}
