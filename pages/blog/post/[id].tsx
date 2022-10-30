import { MainContainer } from "../../../components/containers/MainContainer";
import prisma from "../../../lib/prisma";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export type PostProps = {
  id: number;
  title: string;
  author: {
    name: string;
    email: string;
  } | null;
  content: string;
  published: boolean;
};

const BlogPost: React.FC<PostProps> = (post) => {
  return <MainContainer>BlogPost</MainContainer>;
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const post = await prisma.post.findUnique({
    where: {
      id: String(params?.id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return {
    props: {
      ...post,
    },
  };
};
export default BlogPost;
