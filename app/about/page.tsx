import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - LitNotes | Our Mission and Vision",
  description:
    "Learn about LitNotes' mission to make knowledge accessible through concise book summaries. Discover how we help busy professionals and lifelong learners stay informed.",
  openGraph: {
    title: "About Us - LitNotes | Our Mission and Vision",
    description:
      "Learn about LitNotes' mission to make knowledge accessible through concise book summaries. Discover how we help busy professionals and lifelong learners stay informed.",
  },
  alternates: {
    canonical: "https://litnotes.ai/about",
  },
};

export default function AboutPage() {
  return (
    <div className="relative z-10 container mx-auto pb-12">
      <div className="max-w-[960px] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">About Us</h1>
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/about1.webp"
                alt="Reading and learning"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                Our Mission
              </h2>
              <p className="text-sm md:text-lg text-gray-700 mb-6">
                LitNotes uses AI technology to transform how people learn from
                books, helping users actively explore knowledge and
                significantly improve their learning efficiency.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 md:p-8">
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              LitNotes simultaneously builds an "AI+User" knowledge sharing and
              exchange platform containing 1,000,000+ books, where users can
              view, share, and discuss experiences & content from various books.
            </p>
            <p className="text-sm md:text-lg text-gray-700 mt-4">
              In terms of resources, LitNotes has carefully prepared a vast
              collection of high-quality books for users, covering bestsellers
              from various lists including Amazon bestsellers and New York Times
              Bestsellers. Meanwhile, the platform offers multiple subscription
              options such as monthly and annual plans, allowing users to access
              knowledge in a more cost-effective way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
