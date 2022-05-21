import { GetStaticProps, NextPage } from "next";
import PostList from "../../components/post-list/post-list";
import Title from "../../components/title/title";
import { getAllPosts } from "../../utils/blogUtils";

import styles from "../../styles/blog-page.module.css";

interface Props {
  posts: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
      cover_image: string;
    };
    content: string;
  }[];
}

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <div className={styles.blogContainer}>
      <Title>Blog</Title>
      <PostList posts={posts} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
