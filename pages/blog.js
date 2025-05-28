import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import BlogLayout from "../components/BlogLayout";

export async function getStaticProps() {
  // Use a content directory instead of pages directory for markdown files
  const postsDirectory = path.join(process.cwd(), "/content/posts");

  // Create the directory if it doesn't exist
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }

  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      // Use gray-matter to parse the post metadata section
      const { data, content } = matter(fileContents);

      // Format date if it exists
      const formattedDate = data.date
        ? new Date(data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : null;

      return {
        slug,
        title: data.title || slug, // Use title from frontmatter or fallback to slug
        date: formattedDate || "No date",
        summary: data.summary || content.trim().substring(0, 150) + "...", // Use summary or first 150 chars
      };
    });

  // Sort posts by date (newest first)
  posts.sort((a, b) => {
    if (a.date === "No date") return 1;
    if (b.date === "No date") return -1;
    return new Date(b.date) - new Date(a.date);
  });

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <BlogLayout meta={{ title: "Blog" }}>
      <div className="">
        <div className="h-48 flex items-center justify-center font-libre">
          <h1 className="text-black text-4xl font-sans font-semibold">Blog</h1>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 font-libre">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="border-b border-gray-800 py-8 font-sans"
            >
              <h2 className="text-2xl text-white font-semibold mb-3">
                <Link
                  href={`/posts/${post.slug}`}
                  className="hover:text-gray-400 transition-colors text-black font-libre"
                >
                  {post.title}
                </Link>
              </h2>
              <p className="text-gray-900 mb-4 font-libre">{post.summary}</p>
              <div className="flex items-center justify-between font-libre">
                <span className="text-sm text-gray-400 font-libre">
                  {post.date}
                </span>
                <Link
                  href={`/posts/${post.slug}`}
                  className="text-blue-700 hover:text-blue-300 text-sm font-medium"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}

          {posts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No blog posts found.</p>
            </div>
          )}
        </div>
      </div>
    </BlogLayout>
  );
}
