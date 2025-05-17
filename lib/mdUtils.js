import fs from "fs";
import path from "path";
import matter from "gray-matter";

// Directory where markdown posts are stored
const postsDirectory = path.join(process.cwd(), "/contents/posts");

// Ensure posts directory exists
export function ensurePostsDirectory() {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }
}

// Get all post slugs
export function getPostSlugs() {
  ensurePostsDirectory();
  return fs
    .readdirSync(postsDirectory)
    .filter((filename) => filename.endsWith(".md"))
    .map((filename) => filename.replace(/\.md$/, ""));
}

// Get post data by slug
export function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

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
    title: data.title || slug,
    date: formattedDate || "No date",
    summary: data.summary || content.trim().substring(0, 150) + "...",
    content,
    rawFrontmatter: data,
  };
}

// Get all posts data sorted by date
export function getAllPosts() {
  ensurePostsDirectory();
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));

  // Sort posts by date (newest first)
  return posts.sort((a, b) => {
    if (a.date === "No date") return 1;
    if (b.date === "No date") return -1;
    return new Date(b.rawFrontmatter.date) - new Date(a.rawFrontmatter.date);
  });
}

// Copy a file from examples to the posts directory
export function copyExamplePost() {
  ensurePostsDirectory();
  const examplePost = path.join(process.cwd(), "/examples/example-post.md");
  const targetPost = path.join(postsDirectory, "example-post.md");

  if (fs.existsSync(examplePost) && !fs.existsSync(targetPost)) {
    fs.copyFileSync(examplePost, targetPost);
  }
}
