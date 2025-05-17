import { useRouter } from "next/router";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Head from "next/head";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import "highlight.js/styles/github-dark.css"; // Choose a code highlighting theme

// Layout component for the blog post
function PostLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-blue-400 hover:text-blue-300 font-sans"
          >
            ← Back to Blog
          </Link>
        </div>
        <article className="prose prose-invert prose-lg max-w-none">
          {children}
        </article>
      </div>
    </div>
  );
}

// Get the paths for all markdown files
export async function getStaticPaths() {
  // Look for markdown files in a dedicated content directory, not in pages/posts
  const postsDirectory = path.join(process.cwd(), "/content/posts");

  // Create the directory if it doesn't exist
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

// Get the content for a specific markdown file
export async function getStaticProps({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "/content/posts", `${slug}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");

  const { data, content } = matter(fileContents);

  const formattedDate = data.date
    ? new Date(data.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : null;

  return {
    props: {
      frontmatter: {
        ...data,
        date: formattedDate || "No date",
      },
      content,
    },
  };
}

// Component to style the markdown content
const MarkdownComponents = {
  h1: (props) => (
    <h1 className="text-3xl font-bold text-white mt-8 mb-4" {...props} />
  ),
  h2: (props) => (
    <h2 className="text-2xl font-bold text-white mt-6 mb-3" {...props} />
  ),
  h3: (props) => (
    <h3 className="text-xl font-bold text-white mt-5 mb-2" {...props} />
  ),
  p: (props) => <p className="text-gray-300 mb-4" {...props} />,
  a: (props) => (
    <a className="text-blue-400 hover:text-blue-300 underline" {...props} />
  ),
  ul: (props) => (
    <ul className="list-disc list-inside text-gray-300 mb-4 ml-4" {...props} />
  ),
  ol: (props) => (
    <ol
      className="list-decimal list-inside text-gray-300 mb-4 ml-4"
      {...props}
    />
  ),
  li: (props) => <li className="mb-1" {...props} />,
  blockquote: (props) => (
    <blockquote
      className="border-l-4 border-gray-700 pl-4 italic text-gray-400 my-4"
      {...props}
    />
  ),
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || "");
    return !inline && match ? (
      <pre className="bg-gray-800 p-4 rounded-md overflow-x-auto mb-4">
        <code className={className} {...props}>
          {children}
        </code>
      </pre>
    ) : (
      <code className="bg-gray-800 px-1 py-0.5 rounded text-sm" {...props}>
        {children}
      </code>
    );
  },
  img: (props) => (
    <img className="max-w-full h-auto my-4 rounded-md" {...props} />
  ),
};

export default function Post({ frontmatter, content }) {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>{frontmatter.title}</title>
        <meta name="description" content={frontmatter.summary || "Blog post"} />
      </Head>

      <PostLayout>
        <h1 className="text-4xl font-bold text-white mb-2">
          {frontmatter.title}
        </h1>
        <p className="text-gray-400 mb-8">{frontmatter.date}</p>

        <ReactMarkdown
          components={MarkdownComponents}
          rehypePlugins={[
            rehypeRaw, // Allows HTML in markdown
            [rehypeHighlight, { ignoreMissing: true }], // Syntax highlighting
          ]}
        >
          {content}
        </ReactMarkdown>
      </PostLayout>
    </>
  );
}
