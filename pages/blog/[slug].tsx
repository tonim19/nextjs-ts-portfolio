import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import Image from "next/image";
import Link from "next/link";
import { getPost, getSlugs } from "../../utils/blogUtils";
import { marked } from "marked";

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

const PostPage: React.FC<Props> = ({
  frontmatter: { title, date, cover_image },
  content,
}) => {
  return (
    <>
      <Link href="/blog">
        <button className="btn">Go Back</button>
      </Link>
      <div className="card">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <Image src={cover_image} alt="Cover Image" width={300} height={200} />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
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

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
};

export default PostPage;
