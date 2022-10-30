import { MainContainer } from "../../components/containers/MainContainer";

import { GetStaticProps } from "next/types";

import prisma from "../../lib/prisma";

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
      <h1>welcome to the blog!</h1>
    </MainContainer>
  );
};
export default Blog;
