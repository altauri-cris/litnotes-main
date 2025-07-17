import React from "react";
import Link from "next/link";

interface FooterColumnProps {
  title: string;
  items: { title: string; link?: string }[];
}

const FooterColumn: React.FC<FooterColumnProps> = ({ title, items }) => {
  return (
    <div>
      <h3 className="font-bold text-sm md:text-[14px] text-white mb-1.5 md:mb-2">
        {title}
      </h3>
      <ul className="list-none p-0 text-sm md:text-[14px] text-white/80">
        {items.map((item, index) => (
          <li
            key={index}
            className="h-[28px] md:h-[30px] flex items-center hover:text-white transition-colors"
          >
            {item.link ? (
              <Link
                href={item.link}
                className="hover:text-white transition-colors"
              >
                {item.title}
              </Link>
            ) : (
              <span>{item.title}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterColumn;
