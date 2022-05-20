import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { getPost, getSlugs } from "../../utils/blogUtils";
import PostDetails from "../../components/post-details/post-details";
import { MDXRemoteSerializeResult } from "next-mdx-remote";

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
    <>
      <PostDetails {...props} />
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
