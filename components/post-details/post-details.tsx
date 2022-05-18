import Image from "next/image";
import Link from "next/link";
import { marked } from "marked";

import styles from "./post-details.module.css";

interface Props {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    cover_image: string;
  };
  content: string;
}

const PostDetails: React.FC<Props> = ({
  frontmatter: { title, date, cover_image },
  content,
}) => {
  return (
    <>
      <Link href="/blog">
        <button className={`btn ${styles.btnLeft}`}>&larr;</button>
      </Link>
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.postDate}>Posted on {date}</div>
        <Image
          className={styles.coverImage}
          src={cover_image}
          alt="Cover Image"
          width={500}
          height={600}
          objectFit="cover"
          layout="responsive"
        />
        <div className={styles.postBody}>
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
