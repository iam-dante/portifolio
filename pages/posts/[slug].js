import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
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
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import "highlight.js/styles/github-dark.css";
// import React from "react";

// Add TableOfContents component
const TableOfContents = ({ headings }) => {
  return (
    <nav className="hidden lg:block sticky top-8 ml-8 min-w-[250px] max-w-[300px] self-start">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
        <h2 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">
          Table of Contents
        </h2>
        <ul className="space-y-2 text-sm">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ marginLeft: `${(heading.depth - 1) * 1}rem` }}
            >
              <a
                href={`#${heading.id}`}
                className="text-gray-700 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

// Update PostLayout
function PostLayout({ children, headings }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-sans"
          >
            ← Back to Blog
          </Link>
        </div>
        <div className="flex justify-between">
          <article className="prose prose-lg dark:prose-invert max-w-3xl">
            {children}
          </article>
          {headings.length > 0 && <TableOfContents headings={headings} />}
        </div>
      </div>
    </div>
  );
}

// Get the paths for all markdown files
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

// Parse date string safely
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

// Get the content for a specific markdown file
export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "/content/posts", `${slug}.md`);

  try {
    if (!fs.existsSync(filePath)) {
      return {
        notFound: true,
      };
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
    return {
      notFound: true,
    };
  }
}

// Component to style the markdown content
const MarkdownComponents = {
  h1: (props) => (
    <h1
      className="text-3xl font-bold text-black mt-8 mb-4 font-fira"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="text-2xl font-bold text-black mt-6 mb-3 pb-2 [&_a]:text-black [&_a]:hover:text-black "
      {...props}
    />
  ),
  h3: (props) => (
    <h3 className="text-xl font-bold text-black mt-5 mb-2" {...props} />
  ),
  h4: (props) => (
    <h4 className="text-lg font-bold text-black mt-4 mb-2" {...props} />
  ),
  p: (props) => (
    <p
      className="text-gray-800 dark:text-gray-200 mb-4 text-lg leading-relaxed font-dsans"
      {...props}
    />
  ),
  a: (props) => (
    <a
      className="[&_a]:text-blue-900 dark:text-blue-400  dark:hover:text-blue-300 underline"
      {...props}
    />
  ),
  ul: (props) => (
    <ul
      className="list-disc text-gray-800 dark:text-gray-200 mb-4 ml-6 "
      {...props}
    />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-outside text-gray-800 dark:text-gray-200 mb-4 ml-6 text-lg"
      {...props}
    />
  ),
  li: (props) => <li className="mb-1 text-lg" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 italic text-gray-700 dark:text-gray-300 my-4"
      {...props}
    />
  ),
  hr: (props) => <hr className="  dark:border-gray-700 my-6" {...props} />,
  table: (props) => (
    <div className="overflow-x-auto my-6">
      <table
        className="min-w-full divide-y divide-gray-300 dark:divide-gray-700"
        {...props}
      />
    </div>
  ),
  thead: (props) => (
    <thead className="bg-gray-100 dark:bg-gray-800" {...props} />
  ),
  tbody: (props) => (
    <tbody
      className="divide-y divide-gray-200 dark:divide-gray-700"
      {...props}
    />
  ),
  tr: (props) => (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/60" {...props} />
  ),
  th: (props) => (
    <th
      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-white"
      {...props}
    />
  ),
  td: (props) => (
    <td
      className="px-3 py-4 text-sm text-gray-800 dark:text-gray-200"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="overflow-auto rounded-lg bg-gray-900 dark:bg-black p-4 my-4"
      {...props}
    />
  ),
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <code className={`${className} block p-0 m-0`} {...props}>
        {children}
      </code>
    ) : (
      <code
        className="px-1.5 py-0.5 rounded-md bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 font-mono text-sm"
        {...props}
      >
        {children}
      </code>
    );
  },
  img: (props) => (
    <img
      className="max-w-full h-auto my-4 rounded-md"
      loading="lazy"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-bold text-gray-900 dark:text-white" {...props} />
  ),
  em: (props) => (
    <em className="italic text-gray-900 dark:text-white" {...props} />
  ),
  del: (props) => <del className="line-through text-gray-500" {...props} />,
};

export default function Post({ frontmatter, content, slug }) {
  const router = useRouter();
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const elements = document.querySelectorAll("h1, h2, h3, h4");
    const headingsList = Array.from(elements).map((heading) => ({
      id: heading.id,
      text: heading.textContent,
      depth: Number(heading.tagName.charAt(1)),
    }));
    setHeadings(headingsList);
  }, [content]);

  if (router.isFallback) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        Loading...
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
        <meta property="og:url" content={`/blog/${slug}`} />
        {frontmatter.image && (
          <meta property="og:image" content={frontmatter.image} />
        )}
      </Head>

      <PostLayout headings={headings}>
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            {frontmatter.title}
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm">
            <time dateTime={frontmatter.date} className="mr-4">
              {frontmatter.date}
            </time>

            {frontmatter.author && (
              <span className="mr-4">By {frontmatter.author}</span>
            )}

            {frontmatter.readingTime && (
              <span className="mr-4">{frontmatter.readingTime} min read</span>
            )}
          </div>

          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {frontmatter.image && (
            <div className="mt-6">
              <img
                src={frontmatter.image}
                alt={frontmatter.imageAlt || frontmatter.title}
                className="w-full h-auto rounded-xl object-cover"
                style={{ maxHeight: "400px" }}
              />
              {frontmatter.imageCaption && (
                <p className="text-sm text-center text-gray-500 mt-2">
                  {frontmatter.imageCaption}
                </p>
              )}
            </div>
          )}
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
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
            [rehypeHighlight, { ignoreMissing: true }],
          ]}
        >
          {content}
        </ReactMarkdown>

        {frontmatter.updated && (
          <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-800 text-gray-500 dark:text-gray-400 text-sm">
            Last updated on {formatDate(frontmatter.updated)}
          </div>
        )}
      </PostLayout>
    </>
  );
}
