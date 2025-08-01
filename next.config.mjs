import mdx from "@next/mdx";

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {}
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true
  },
  pageExtensions: ["ts", "tsx", "md", "mdx"],
  trailingSlash: false,
  compress: true,
};

export default withMDX(nextConfig);