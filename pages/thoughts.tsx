import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { Layout, PageHeading } from "../components/Layout";

type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

function formatDate(value?: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    timeZone: "UTC",
    month: "short",
    year: "numeric",
  });
}

export async function getStaticProps() {
  if (!fs.existsSync(POSTS_DIR)) {
    return { props: { posts: [] } };
  }

  const posts = fs
    .readdirSync(POSTS_DIR)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => {
      const slug = filename.replace(/\.md$/, "");
      const { data, content } = matter(
        fs.readFileSync(path.join(POSTS_DIR, filename), "utf8")
      );

      return {
        slug,
        title: data.title || slug,
        summary: data.summary || `${content.trim().slice(0, 150)}...`,
        date: formatDate(data.date),
        sortKey: data.date ? new Date(data.date).getTime() : 0,
      };
    })
    .sort((a, b) => b.sortKey - a.sortKey)
    .map(({ sortKey, ...post }) => post);

  return { props: { posts } };
}

export default function Thoughts({ posts }: { posts: Post[] }) {
  return (
    <Layout title="Thoughts" description="Notes and essays by Brian Temu.">
      <PageHeading title="Thoughts" subtitle="Notes and essays" />

      {posts.length > 0 ? (
        <div>
          {posts.map((post) => (
            <article key={post.slug} className="mt-10 first:mt-8">
              <Link
                href={`/posts/${post.slug}`}
                className="font-serif text-xl font-semibold leading-8 text-foreground underline decoration-transparent underline-offset-[3px] transition-colors hover:decoration-current"
              >
                {post.title}
              </Link>
              <p className="mt-2 line-clamp-2 text-[17px] leading-7 text-muted-foreground text-pretty">
                {post.summary}
              </p>
              <p className="mt-2 text-sm leading-6 text-subtle">{post.date}</p>
            </article>
          ))}
        </div>
      ) : (
        <p className="mt-8 text-[17px] leading-7 text-muted-foreground">
          No thoughts yet.
        </p>
      )}
    </Layout>
  );
}
