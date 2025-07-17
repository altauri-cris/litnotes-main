import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import SocialLink from "./components/SocialLink";
import Link from "next/link";
import { GA_TRACKING_ID } from "./utils/gtag";
import { GoogleAnalytics } from "@next/third-parties/google";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "LitNotes - Book Collection",
  description: "Discover and explore amazing books",
  alternates: {
    canonical: "https://litnotes.ai/",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <head>
        <meta
          name="google-site-verification"
          content="5BE-8aPkaqIpc1mAf4S0PcDAjO36p_mt58CyubU71nU"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans antialiased">
        <header className="fixed left-0 z-500 w-full top-0 bg-gray-100 shadow-sm">
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <div className="max-w-[1080px] mx-auto h-16 box-border flex items-center justify-between">
            <Link href={"/"}>
              <div className="flex items-center">
                <Image
                  width={40}
                  height={28}
                  alt="Logo"
                  className="h-10 mr-2"
                  src="/icons/logo.svg"
                  priority
                />
                <Image
                  width={80}
                  height={40}
                  alt="Logo"
                  className="h-10"
                  src="/icons/litnotes.svg"
                  priority
                />
              </div>
            </Link>
            <div className="flex items-center gap-3 md:gap-6">
              <div className="hidden md:flex items-center gap-5">
                <SocialLink
                  alt="Twitter"
                  imageSrc="/icons/twitter.svg"
                  linkHref="https://x.com/LitNotes_int"
                />
                <SocialLink
                  alt="Facebook"
                  imageSrc="/icons/facebook.svg"
                  linkHref="https://www.facebook.com/litnotes/"
                />
                <SocialLink
                  alt="Instagram"
                  imageSrc="/icons/instagram.svg"
                  linkHref="https://www.instagram.com/litnotes_official/"
                />
              </div>
              <div className="Montserrat flex items-center gap-3">
                <Link
                  href="https://discord.gg/YpZSZmYvEs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2 py-1.5 rounded text-sm font-medium tracking-wide cursor-pointer flex items-center transition-all duration-200 hover:bg-[#4752C4] "
                >
                  <Image
                    width={20}
                    height={20}
                    alt="Discord"
                    className="mr-2 ml-2"
                    src="/icons/discord_black.svg"
                    priority
                  />
                  DISCORD
                </Link>
              </div>
            </div>
          </div>
        </header>
        <main className="w-full mt-16 flex-1 min-h-[calc(100vh-16rem)]">
          <div className="max-w-[1080px] mx-auto">
            {children}
            <GoogleAnalytics gaId={GA_TRACKING_ID} />
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
