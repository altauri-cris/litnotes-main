import { Book } from "@/constants";

interface BookDescriptionProps {
  book: Book;
}
const DescriptionTitle = ({ title }: { title: string }) => (
  <h3 className="text-[18px] font-bold mb-4 text-[#201F20]">{title}</h3>
);

export default function BookDescription({ book }: BookDescriptionProps) {
  return (
    <div className="max-w-6xl mt-12 flex w-[772px] flex-col items-start gap-10">
      {/* About this book section - First part */}
      <div>
        <DescriptionTitle title="About this book" />
        <p className="mb-4 text-[rgba(0,0,0,0.64)] text-base font-normal leading-6 tracking-[-0.16px]">
          {book.description}
        </p>
      </div>

      {/* Key Ideas section - Second part */}
      {book.key_ideas && book.key_ideas.length > 0 && (
        <div>
          <DescriptionTitle title="Summary of Key Ideas" />
          <ul className="space-y-4">
            {book.key_ideas.map((idea, index) => (
              <li key={index} className="flex">
                <span className="mr-3 font-bold text-[#0066CC] text-base leading-6">
                  •
                </span>
                <p className="text-[rgba(0,0,0,0.64)] text-base font-normal leading-6 tracking-[-0.16px]">
                  {idea.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Chapter Recap - Third part */}
      <div>
        <DescriptionTitle title="Chapter Recap" />

        <div className="flex flex-wrap gap-3">
          {book?.categories?.map((category, index) => (
            <span
              key={index}
              className="rounded-full px-3 py-1 bg-[#F5F5F5] text-[rgba(0,0,0,0.64)] text-sm font-medium leading-5 inline-block"
            >
              {category}
            </span>
          ))}
        </div>
      </div>

      {/* Authors section - Fourth part */}
      {book.authors_info && book.authors_info.length > 0 && (
        <div>
          <DescriptionTitle title="About The Author" />
          <div className="space-y-6">
            {book.authors_info.map((author, index) => (
              <div key={index} className="flex flex-col">
                <h4 className="text-[#201F20] text-[18px] font-semibold leading-6 mb-2">
                  {author.name}
                </h4>
                {author.bio && (
                  <p className="text-[rgba(0,0,0,0.64)] text-base font-normal leading-6 tracking-[-0.16px]">
                    {author.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
