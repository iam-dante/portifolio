import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import ThoughtsLayout from "../components/ThoughtsLayout";

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "/content/posts");

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

      const { data, content } = matter(fileContents);

      const formattedDate = data.date
        ? new Date(data.date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : null;

      return {
        slug,
        title: data.title || slug,
        date: formattedDate || "No date",
        summary: data.summary || content.trim().substring(0, 150) + "...",
      };
    });

  posts.sort((a, b) => {
    if (a.date === "No date") return 1;
    if (b.date === "No date") return -1;
    return new Date(b.date) - new Date(a.date);
  });

  return { props: { posts } };
}

export default function Thoughts({ posts }) {
  return (
    <ThoughtsLayout meta={{ title: "Thoughts" }}>
      <header className="text-center mb-16">
        <h1 className="text-4xl font-medium text-stone-800 font-dsans tracking-tight">
          Thoughts
        </h1>
      </header>

      <div className="space-y-12">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="block text-center no-underline group"
          >
            <article>
              <time className="text-sm text-stone-400 font-dsans">
                {post.date}
              </time>
              <h2 className="mt-2 text-xl font-medium text-stone-700 group-hover:text-stone-900 font-dsans">
                {post.title}
              </h2>
              <p className="mt-3 text-base text-stone-500 font-dsans leading-relaxed line-clamp-2">
                {post.summary}
              </p>
            </article>
          </Link>
        ))}

        {posts.length === 0 && (
          <p className="text-center text-stone-400 font-dsans text-sm">
            No thoughts yet.
          </p>
        )}
      </div>
    </ThoughtsLayout>
  );
}
