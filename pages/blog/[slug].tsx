import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Router from "next/router";

import { useSession } from "next-auth/react";
import prisma from "../../lib/prisma";
import { PostProps } from "../../@types/Post";
import { MainContainer } from "../../components/containers/MainContainer";
import { serializeData } from "../../utils/serializeData";
import CustomReactMarkdown from "../../components/markdown/CustomReactMarkdown";

interface ApiPostProps extends PostProps {
  error: string;
}

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
  const { title, createdAt } = props;

  const publishDate = new Date(createdAt).toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  console.log(publishDate);
  return (
    <MainContainer>
      <div className="mx-auto min-h-screen max-w-[800px]">
        <div className="inline-block">
          <p className="inline-block">
            By {props?.author?.name || "Unknown author"}
          </p>
          <p className="inline-block">{publishDate}</p>
        </div>

        <CustomReactMarkdown title={title}>{props.content}</CustomReactMarkdown>
      </div>
    </MainContainer>
  );
};
export default Post;
