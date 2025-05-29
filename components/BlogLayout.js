// /components/BlogLayout.js
import Link from "next/link";
import Head from "next/head";

export default function BlogLayout({ children, meta }) {
  return (
    <div className="h-screen flex flex-col font-sans">
      <Head>
        <title>{meta?.title ? `${meta.title} | Blog` : "Brian Temu"}</title>
        <meta name="description" content={meta?.summary || "Brian Temu - blog"} />
      </Head>
      <nav className="">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-xl font-bold font-libre">
                  Brian Temu
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="grow">{children}</main>

      <footer className="">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="text-center text-gray-400">
            <p>© {new Date().getFullYear()} Brian Temu. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
