import Image from "next/image";
import Link from "next/link";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

import Syntax from "../syntax-component/syntax-component";

import styles from "./post-details.module.css";

interface Props {
  slug: string;
  frontmatter: {
    title: string;
    date: string;
    excerpt: string;
    cover_image: string;
  };
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const PostDetails: React.FC<Props> = ({
  frontmatter: { title, date, cover_image },
  source,
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
          <MDXRemote {...source} components={{ Syntax }} />
        </div>
      </div>
    </>
  );
};

export default PostDetails;
