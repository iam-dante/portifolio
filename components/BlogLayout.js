// /components/BlogLayout.js
import Link from "next/link";
import Head from "next/head";

export default function BlogLayout({ children, meta }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <Head>
        <title>{meta?.title ? `${meta.title} | Blog` : "Blog"}</title>
        <meta name="description" content={meta?.summary || "My blog"} />
      </Head>

      <nav className="bg-gray-800 shadow-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-white text-xl font-bold">
                  Your Site
                </Link>
              </div>
              <div className="ml-6 flex items-center space-x-4">
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blog
                </Link>
                {/* Add more navigation links as needed */}
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>{children}</main>

      <footer className="bg-gray-800 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
