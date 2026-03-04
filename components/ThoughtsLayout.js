import Link from "next/link";
import Head from "next/head";

export default function ThoughtsLayout({ children, meta }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Head>
        <title>{meta?.title ? `${meta.title} | Thoughts` : "Brian Temu"}</title>
        <meta name="description" content={meta?.summary || "Brian Temu - Thoughts"} />
      </Head>

      <nav className="absolute top-0 left-0 right-0 flex justify-center pt-8">
        <Link
          href="/"
          className="text-sm text-stone-400 hover:text-stone-600 font-dsans"
        >
          Brian Temu
        </Link>
      </nav>

      <main className="grow flex justify-center px-6 pt-32 pb-16">
        <div className="w-full max-w-2xl">{children}</div>
      </main>

      <footer className="py-6">
        <p className="text-center text-xs text-stone-300 font-dsans">
          &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
