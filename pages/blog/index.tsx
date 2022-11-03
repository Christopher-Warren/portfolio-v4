import { MainContainer } from "../../components/containers/MainContainer";
import BlogHeader from "../../components/navigation/BlogHeader";

import { GetStaticProps } from "next/types";

import prisma from "../../lib/prisma";

export const getStaticProps: GetStaticProps = async () => {
  console.log("hello");
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
    </MainContainer>
  );
};
export default Blog;
