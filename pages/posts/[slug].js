import { useRouter } from "next/router";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkToc from "remark-toc";
import remarkBreaks from "remark-breaks";
import rehypeSlug from "rehype-slug";

const CodeBlock = ({ children, ...props }) => {
  return (
    <div className="my-8 rounded-xl overflow-hidden shadow-sm border border-stone-200">
      <pre
        className="overflow-x-auto bg-stone-900 text-stone-100 p-5 font-jet text-sm leading-relaxed border-0 m-0"
        {...props}
      >
        {children}
      </pre>
    </div>
  );
};

function PostLayout({ children }) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="absolute top-0 left-0 right-0 flex justify-center pt-8">
        <Link
          href="/thoughts"
          className="text-sm text-stone-400 hover:text-stone-600 font-dsans"
        >
          &larr; Thoughts
        </Link>
      </nav>

      <main className="grow flex items-start justify-center px-6 py-24">
        <div className="w-full max-w-2xl">
          <article>{children}</article>
        </div>
      </main>

      <footer className="py-6">
        <p className="text-center text-xs text-stone-300 font-dsans">
          &copy; {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "/content/posts");

  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }

  const filenames = fs.readdirSync(postsDirectory);

  const paths = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => ({
      params: {
        slug: filename.replace(/\.md$/, ""),
      },
    }));

  return {
    paths,
    fallback: false,
  };
}

function formatDate(dateString) {
  if (!dateString) return "No date";

  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return "Invalid date";
    }

    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch (error) {
    console.error("Error formatting date:", error);
    return "Error parsing date";
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "/content/posts", `${slug}.md`);

  try {
    if (!fs.existsSync(filePath)) {
      return { notFound: true };
    }

    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const formattedDate = formatDate(data.date);

    return {
      props: {
        frontmatter: {
          ...data,
          title: data.title || slug,
          date: formattedDate,
        },
        content,
        slug,
      },
    };
  } catch (error) {
    console.error(`Error processing markdown file ${slug}:`, error);
    return { notFound: true };
  }
}

const MarkdownComponents = {
  h1: (props) => (
    <h1
      className="text-3xl sm:text-4xl font-bold text-stone-900 mt-12 mb-5 font-libre leading-tight"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl sm:text-3xl font-bold text-stone-900 mt-10 mb-4 font-libre leading-tight"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="text-xl sm:text-2xl font-bold text-stone-900 mt-8 mb-3 font-libre leading-snug"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="text-lg font-bold text-stone-900 mt-6 mb-2 font-libre"
      {...props}
    />
  ),
  p: (props) => (
    <p
      className="text-stone-700 mb-5 text-[17px] leading-[1.8] font-dsans"
      {...props}
    />
  ),
  a: ({ href, ...props }) => {
    const isExternal = href?.startsWith("http");
    return (
      <a
        className="text-stone-900 underline decoration-stone-300 underline-offset-2 hover:decoration-stone-600 transition-colors font-dsans"
        href={href}
        {...(isExternal && { target: "_blank", rel: "noopener noreferrer" })}
        {...props}
      />
    );
  },
  ul: (props) => (
    <ul
      className="list-disc text-stone-700 mb-6 ml-6 text-[17px] leading-[1.8] font-dsans"
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal text-stone-700 mb-6 ml-6 text-[17px] leading-[1.8] font-dsans"
      {...props}
    />
  ),
  li: (props) => (
    <li
      className="mb-2 text-stone-700 text-[17px] leading-[1.8] font-dsans pl-1"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="pl-0 my-6 text-stone-500 italic font-libre text-[17px] leading-[1.8]"
      {...props}
    />
  ),
  hr: (props) => <hr className="border-0 my-10" {...props} />,
  table: (props) => (
    <div className="overflow-x-auto my-8 rounded-lg border border-stone-200">
      <table
        className="min-w-full divide-y divide-stone-200 font-dsans"
        {...props}
      />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-stone-100 font-dsans" {...props} />
  ),
  tbody: (props) => (
    <tbody className="divide-y divide-stone-100 font-dsans" {...props} />
  ),
  tr: (props) => (
    <tr className="hover:bg-stone-50 transition-colors" {...props} />
  ),
  th: (props) => (
    <th
      className="px-4 py-3 text-left text-sm font-semibold text-stone-700 font-dsans"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-4 py-3.5 text-[15px] text-stone-600 font-dsans"
      {...props}
    />
  ),
  pre: (props) => <CodeBlock {...props} />,
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");

    if (!inline && match) {
      return (
        <code className={`${className} text-stone-100`} {...props}>
          {children}
        </code>
      );
    } else {
      return (
        <code
          className="px-1.5 py-0.5 rounded-md bg-stone-100 text-stone-700 font-jet text-[15px] border border-stone-200"
          {...props}
        >
          {children}
        </code>
      );
    }
  },
  img: (props) => (
    <img
      className="max-w-full h-auto my-8 rounded-xl shadow-sm"
      loading="lazy"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-semibold text-stone-900 font-dsans" {...props} />
  ),
  em: (props) => (
    <em className="italic text-stone-600 font-dsans" {...props} />
  ),
  del: (props) => (
    <del className="line-through text-stone-400 font-dsans" {...props} />
  ),
};

export default function Post({ frontmatter, content, slug }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-stone-50">
        <p className="text-stone-400 font-dsans">Loading...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta
          name="description"
          content={
            frontmatter.summary ||
            frontmatter.excerpt ||
            `${frontmatter.title} - Blog post`
          }
        />
        {frontmatter.tags && (
          <meta name="keywords" content={frontmatter.tags.join(", ")} />
        )}
        {frontmatter.author && (
          <meta name="author" content={frontmatter.author} />
        )}
        <meta property="og:title" content={frontmatter.title} />
        <meta
          property="og:description"
          content={
            frontmatter.summary ||
            frontmatter.excerpt ||
            `${frontmatter.title} - Blog post`
          }
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`/thoughts/${slug}`} />
        {frontmatter.image && (
          <meta property="og:image" content={frontmatter.image} />
        )}
      </Head>

      <PostLayout>
        <header className="mb-10 text-center">
          <h1 className="text-2xl font-medium text-stone-800 font-dsans leading-tight">
            {frontmatter.title}
          </h1>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs text-stone-400 font-dsans">
            <time dateTime={frontmatter.date}>
              {frontmatter.date}
            </time>

            {frontmatter.author && (
              <span>By {frontmatter.author}</span>
            )}

            {frontmatter.readingTime && (
              <span>{frontmatter.readingTime} min read</span>
            )}
          </div>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-stone-100 text-stone-500 rounded-full px-3 py-1 text-xs font-medium font-dsans"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {frontmatter.image && (
            <div className="mt-8">
              <img
                src={frontmatter.image}
                alt={frontmatter.imageAlt || frontmatter.title}
                className="w-full h-auto rounded-xl object-cover shadow-sm"
                style={{ maxHeight: "400px" }}
              />
              {frontmatter.imageCaption && (
                <p className="text-sm text-center text-stone-400 mt-3 font-dsans">
                  {frontmatter.imageCaption}
                </p>
              )}
            </div>
          )}

          <hr className="mt-8 border-0" />
        </header>

        <ReactMarkdown
          components={MarkdownComponents}
          remarkPlugins={[
            remarkGfm,
            remarkEmoji,
            [remarkToc, { heading: "Table of Contents", tight: true }],
            remarkBreaks,
          ]}
          rehypePlugins={[
            rehypeRaw,
            rehypeSlug,
            [rehypeHighlight, { ignoreMissing: true }],
          ]}
        >
          {content}
        </ReactMarkdown>

        {frontmatter.updated && (
          <div className="mt-16 pt-6 text-stone-400 text-sm font-dsans">
            Last updated on {formatDate(frontmatter.updated)}
          </div>
        )}
      </PostLayout>
    </>
  );
}
