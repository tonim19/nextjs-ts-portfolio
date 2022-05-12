import { GetStaticProps, NextPage } from "next";
import PostList from "../../components/post-list/post-list";
import { getAllPosts } from "../../utils/blogUtils";

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

const BlogPage: NextPage<Props> = ({ posts }) => {
  return (
    <>
      <div className="container">
        {/* <h2>WebDev Blog</h2> */}
        <PostList posts={posts} />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: {
      posts,
    },
  };
};

export default BlogPage;
