import { useState } from "react";
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
  const [visible, setVisible] = useState(1);

  const showMorePosts = () => {
    setVisible((prevState) => prevState + 1);
  };

  return (
    <>
      <section className={styles.posts}>
        {posts.slice(0, visible).map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
      {visible !== posts.length ? (
        <button className="btn" onClick={showMorePosts}>
          Load more posts
        </button>
      ) : null}
    </>
  );
};

export default PostList;
