/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  async redirects() {
    return [
      { source: "/blog", destination: "/thoughts", permanent: true },
      { source: "/writing", destination: "/thoughts", permanent: true },
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1P5DtEh31sKhBpD8EK9X3qXj7qrN63v_5/view?usp=sharing",
        permanent: false,
      },
    ];
  },
};
