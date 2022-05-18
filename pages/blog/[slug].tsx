import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import { getPost, getSlugs } from "../../utils/blogUtils";
import PostDetails from "../../components/post-details/post-details";

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

  return {
    props: {
      slug,
      frontmatter,
      content,
    },
  };
};

export default PostPage;
