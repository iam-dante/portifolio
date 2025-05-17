import fs from "fs";
import path from "path";
import Link from "next/link";
import matter from "gray-matter"; // Add this package for parsing frontmatter

// Added getStaticProps to read markdown files from /posts directory
export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), "/pages/posts");
  const filenames = fs.readdirSync(postsDirectory);

  const posts = filenames.map((filename) => {
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
    return new Date(b.date) - new Date(a.date);
  });

  return { props: { posts } };
}

export default function Blog({ posts }) {
  return (
    <div className="h-screen bg-gray-900">
      <div className="h-48 flex items-center justify-center">
        <h1 className="text-white text-4xl font-sans font-semibold">Blog</h1>
      </div>

      <div className="md:px-[30%] py-2">
        {posts.map((post) => (
          <div key={post.slug} className="h-48 font-sans space-y-4 my-4">
            <h1 className="text-xl text-white font-semibold">{post.title}</h1>
            <p className="text-white">
              {post.summary}
              <Link href={`/posts/${post.slug}`} className="text-blue-400">
                {" "}
                {"  "}Read More
              </Link>
            </p>
            <h1 className="text-xs text-gray-400 font-jet">{post.date}</h1>
          </div>
        ))}
      </div>
    </div>
  );
}
