import Image from "next/image";
import { useRouter } from "next/router";

import styles from "./post-card.module.css";

interface Props {
  post: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      excerpt: string;
      cover_image: string;
    };
    content: string;
  };
}

const PostCard: React.FC<Props> = ({ post }) => {
  const router = useRouter();

  return (
    <article
      className={styles.card}
      onClick={() => router.push(`/blog/${post.slug}`)}
    >
      <div className={styles.image}>
        <Image
          src={post.frontmatter.cover_image}
          alt="post"
          objectFit="cover"
          width={480}
          height={640}
        />
      </div>
      <div className={styles.description}>
        <p className={styles.date}>{post.frontmatter.date}</p>
        <h3 className={styles.title}>{post.frontmatter.title}</h3>
      </div>
    </article>
  );
};

export default PostCard;
