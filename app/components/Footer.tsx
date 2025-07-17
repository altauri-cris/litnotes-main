import React from "react";
import FooterColumn from "./FooterColumn";
import Link from "next/link";
import Image from "next/image";
import SocialLink from "./SocialLink";

interface FooterItem {
  title: string;
  link?: string;
}

interface FooterColumn {
  title: string;
  items: FooterItem[];
}

const footerData: FooterColumn[] = [
  {
    title: "RESOURCES",
    items: [
      { title: "Book", link: "/books" },
      { title: "Book Review", link: "/" },
      { title: "Quote", link: "/" },
    ],
  },
  {
    title: "COMPANY",
    items: [
      { title: "About", link: "/about" },
      {
        title: "Terms of Use",
        link: "https://static.litnotes.ai/litnotes/html/terms.html",
      },
      {
        title: "Privacy Policy",
        link: "https://static.litnotes.ai/litnotes/html/privacy.html",
      },
      { title: "Contact", link: "/contact" },
    ],
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="Montserrat w-full bg-[#3D3D3D] text-white py-8 md:py-12 px-4 md:px-6">
      <div className="max-w-[1080px] mx-auto flex flex-col">
        <div className="flex flex-col gap-6 md:gap-8">
          <div>
            <Link href={"/"}>
              <div className="flex items-center">
                <Image
                  width={40}
                  height={28}
                  alt="Logo"
                  className="h-10 mr-2"
                  src="/icons/logo_white.svg"
                  priority
                />
                <Image
                  width={80}
                  height={40}
                  alt="Logo"
                  className="h-10 mr-2"
                  src="/icons/litnotes_white.svg"
                  priority
                />
              </div>
            </Link>
            <p className="text-base md:text-[18px] text-white/50 mt-2">
              Inspiring daily wellness and mindful living.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 md:gap-[50px]">
            <p className="text-sm text-white/80 col-span-1 md:pr-12 ">
              The copyright to all contents of this site is held either by
              Litnotes, and none of the material may be used elsewhere without
              written permission. For reprint enquiries, contact us.
            </p>
            <div className="grid grid-cols-2 gap-4 col-span-1">
              {footerData.map((column, index) => (
                <FooterColumn
                  key={index}
                  title={column.title}
                  items={column.items}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0 mt-6 md:mt-0">
          <div className="flex gap-4">
            <SocialLink
              alt="Twitter"
              imageSrc="/icons/twitter_white.svg"
              linkHref="https://x.com/LitNotes_int"
            />
            <SocialLink
              alt="Facebook"
              imageSrc="/icons/facebook_white.svg"
              linkHref="https://www.facebook.com/litnotes/"
            />
            <SocialLink
              alt="Instagram"
              imageSrc="/icons/instagram_white.svg"
              linkHref="https://www.instagram.com/litnotes_official/"
            />
          </div>
          <div className="text-sm text-center md:text-left">
            Copyright © 2025 Litnotes.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
