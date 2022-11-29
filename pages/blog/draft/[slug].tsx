// pages/p/[id].tsx

import React from "react";
import { GetServerSideProps } from "next";
import prisma from "../../../lib/prisma";
import { ApiPostProps } from "../../../@types/Post";
import { serializeData } from "../../../utils/serializeData";

export const getServerSideProps: GetServerSideProps<any> = async ({
  params,
}) => {
  const post = await prisma.post.findUnique({
    where: {
      slug: String(params?.slug),
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });

  if (!post)
    return {
      props: {
        error: "Post not found",
      },
    };

  return {
    props: serializeData(post),
  };
};

const Post: React.FC<ApiPostProps> = (props) => {
  return <Post {...props} />;
};

export default Post;
