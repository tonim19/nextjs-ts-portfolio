import path from "path";
import fs from "fs";
import matter from "gray-matter";

export function getFiles() {
  const postsPath = path.join("posts");
  const files = fs.readdirSync(postsPath);
  return files;
}

export function getSlugs() {
  const files = getFiles();
  const slugs = files.map((filename) => filename.replace(".mdx", ""));
  return slugs;
}

export function getPost(slug: string) {
  const markdown = fs.readFileSync(path.join("posts", slug + ".mdx"), "utf-8");
  const { data, content } = matter(markdown);
  return { frontmatter: data, content };
}

export function getAllPosts() {
  const files = getFiles();

  const posts = files
    .map((filename) => {
      const slug = filename.replace(".mdx", "");
      const markdown = fs.readFileSync(path.join("posts", filename), "utf-8");
      const { data, content } = matter(markdown);
      return {
        slug,
        frontmatter: data,
        content,
      };
    })
    .sort(
      (post1, post2) =>
        // @ts-ignore
        new Date(post2.frontmatter.date) - new Date(post1.frontmatter.date)
    );

  return posts;
}
