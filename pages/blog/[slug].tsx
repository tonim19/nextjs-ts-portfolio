import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { getPost, getSlugs } from "../../utils/blogUtils";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import Syntax from "../../components/syntax-component/syntax-component";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/post-details.module.css";

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

const PostPage: React.FC<Props> = (props) => {
  return (
    <div className="container">
      <Link href="/blog">
        <a className={styles.btnLeft}>&larr;</a>
      </Link>
      <div className={styles.card}>
        <h1 className={styles.title}>{props.frontmatter.title}</h1>
        <div className={styles.postDate}>
          Posted on {props.frontmatter.date}
        </div>
        <Image
          className={styles.coverImage}
          src={props.frontmatter.cover_image}
          alt="Cover Image"
          width={1200}
          height={800}
          objectFit="contain"
          layout="responsive"
        />
        <div className={styles.postBody}>
          <MDXRemote {...props.source} components={{ Syntax }} />
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSlugs().map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params as { slug: string };
  const { frontmatter, content } = getPost(slug);
  const mdxSource = await serialize(content);

  return {
    props: {
      slug,
      frontmatter,
      source: mdxSource,
    },
  };
};

export default PostPage;
