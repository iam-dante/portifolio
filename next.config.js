const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/, // Matches both .md and .mdx files
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withMDX({
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"], // Allow MD/MDX pages
});
