/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const withMDX = require("@next/mdx")({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

// module.exports = withMDX({
//   pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
// });

module.exports = {
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
};

