import PostCard from "../post-card/post-card";

import styles from "./post-list.module.css";

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

const PostList: React.FC<Props> = ({ posts }) => {
  return (
    <section className={styles.posts}>
      {posts.map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
    </section>
  );
};

export default PostList;
