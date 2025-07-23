import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - LitNotes | Get in Touch with Our Team",
  description:
    "Have questions or feedback? Contact the LitNotes team. We're here to help and typically respond within 24-48 hours during business days.",
  openGraph: {
    title: "Contact Us - LitNotes | Get in Touch with Our Team",
    description:
      "Have questions or feedback? Contact the LitNotes team. We're here to help and typically respond within 24-48 hours during business days.",
  },
  alternates: {
    canonical: "https://litnotes.ai/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="relative z-10 container mx-auto pb-12">
      <div className="max-w-[960px] mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-semibold">Contact Us</h1>
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/contact2.webp"
                alt="Customer support"
                width={400}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </div>

            <div className="w-full md:w-1/2 text-left">
              <h2 className="text-2xl md:text-3xl font-medium mb-4 text-gray-800">
                Let's Connect
              </h2>
              <p className="text-sm md:text-lg text-gray-700 mb-6 text-justify">
                We'd love to hear from you! Whether you have questions,
                feedback, or just want to say hello, feel free to reach out to
                us.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 md:p-8 text-center">
            <p className="text-sm md:text-lg text-gray-700 mb-4">
              For any inquiries, please email us at:
            </p>
            <a
              href="mailto:team@altauri.ai"
              className="inline-block text-xl md:text-2xl text-blue-600 hover:text-blue-700 transition-colors font-medium bg-white px-5 py-2.5 rounded-lg shadow-sm hover:shadow-md hover:scale-105 transform duration-200"
              aria-label="Send email to team@altauri.ai"
            >
              ✉️ team@altauri.ai
            </a>

            <p className="mt-6 text-base text-gray-600">
              Our team typically responds within 24-48 hours during business
              days.
              <br />
              We look forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
