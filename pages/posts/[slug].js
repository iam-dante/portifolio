import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";
import remarkBreaks from "remark-breaks";
import "highlight.js/styles/github.css";
import { Layout } from "../../components/Layout";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export async function getStaticPaths() {
  const filenames = fs.existsSync(POSTS_DIR) ? fs.readdirSync(POSTS_DIR) : [];

  return {
    paths: filenames
      .filter((filename) => filename.endsWith(".md"))
      .map((filename) => ({ params: { slug: filename.replace(/\.md$/, "") } })),
    fallback: false,
  };
}

function formatDate(value) {
  if (!value) return null;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return null;
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function getStaticProps({ params }) {
  const filePath = path.join(POSTS_DIR, `${params.slug}.md`);
  if (!fs.existsSync(filePath)) return { notFound: true };

  const { data, content } = matter(fs.readFileSync(filePath, "utf8"));

  return {
    props: {
      frontmatter: {
        title: data.title || params.slug,
        summary: data.blurb || data.summary || null,
        date: formatDate(data.date),
        updated: formatDate(data.updated),
        readingTime: data.readingTime ?? null,
        tags: data.tags ?? null,
      },
      content,
    },
  };
}

const markdownComponents = {
  // `node` is react-markdown's internal hast node; it must never reach the DOM.
  a: ({ node, href = "", ...props }) => (
    <a
      href={href}
      {...props}
      {...(/^https?:\/\//.test(href)
        ? { target: "_blank", rel: "noreferrer" }
        : {})}
    />
  ),
  // Not lazy-loaded: these images carry no intrinsic dimensions, so they lay
  // out at zero height and a lazy image that never intersects never loads.
  // eslint-disable-next-line @next/next/no-img-element
  img: ({ node, alt = "", ...props }) => <img alt={alt} {...props} />,
  // A wide table must scroll inside its own box, never widen the page.
  table: ({ node, ...props }) => (
    <div className="-mx-1 my-8 overflow-x-auto px-1">
      <table {...props} />
    </div>
  ),
};

export default function Post({ frontmatter, content }) {
  return (
    <Layout title={frontmatter.title} description={frontmatter.summary} wide>
      <header className="mt-10 text-center sm:mt-12">
        <h1 className="font-sans text-[24px] font-semibold leading-tight text-foreground text-balance sm:text-[32px]">
          {frontmatter.title}
        </h1>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm leading-6 text-subtle">
          {frontmatter.date ? <time>{frontmatter.date}</time> : null}
          {frontmatter.readingTime ? (
            <span>{frontmatter.readingTime} min read</span>
          ) : null}
        </div>

        {frontmatter.tags && frontmatter.tags.length > 0 ? (
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-muted px-3 py-1 text-sm font-medium text-subtle"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </header>

      <article className="prose-note mt-10">
        <ReactMarkdown
          components={markdownComponents}
          remarkPlugins={[remarkGfm, remarkEmoji, remarkBreaks]}
          rehypePlugins={[
            rehypeRaw,
            rehypeSlug,
            [rehypeAutolinkHeadings, { behavior: "wrap" }],
            [rehypeHighlight, { ignoreMissing: true }],
          ]}
        >
          {content}
        </ReactMarkdown>
      </article>

      <p className="mt-12 text-center text-[15px] font-medium leading-6">
        <Link
          href="/thoughts"
          className="text-subtle transition-colors hover:text-foreground"
        >
          ← Thoughts
        </Link>
      </p>

      {frontmatter.updated ? (
        <p className="mt-6 text-center text-sm leading-6 text-subtle">
          Last updated {frontmatter.updated}
        </p>
      ) : null}
    </Layout>
  );
}
