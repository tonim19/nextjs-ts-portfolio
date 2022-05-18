import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkEmoji from "remark-emoji";

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
        <a className={styles.btnLeft}>&larr;</a>
      </Link>
      <div className={styles.card}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.postDate}>Posted on {date}</div>
        <Image
          className={styles.coverImage}
          src={cover_image}
          alt="Cover Image"
          width={1200}
          height={800}
          objectFit="contain"
          layout="responsive"
        />
        <div className={styles.postBody}>
          <ReactMarkdown remarkPlugins={[remarkGfm, remarkEmoji]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </>
  );
};

export default PostDetails;
