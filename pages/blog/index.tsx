import { MainContainer } from "../../components/containers/MainContainer";
import BlogHeader from "../../components/navigation/BlogHeader";

import { GetStaticProps } from "next/types";

import prisma from "../../lib/prisma";
import { PostProps } from "../../@types/Post";

import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });
  return {
    props: { feed },
    revalidate: 10,
  };
};

const Blog = (props: any) => {
  return (
    <MainContainer>
      <BlogHeader />

      {props.feed.map((post: PostProps) => {
        if (!post.published) return null;

        return (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <a>
              <div>
                <h2>author: {post.author.name}</h2>
                <p>title: {post.title} </p>
              </div>
            </a>
          </Link>
        );
      })}
    </MainContainer>
  );
};
export default Blog;
