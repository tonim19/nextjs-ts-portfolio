import { GetStaticProps, NextPage } from "next";
import PostCard from "../../components/post-card/post-card";
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
        <h1>Blog Page</h1>
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
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
