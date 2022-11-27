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
import { markdownSample } from "../../assets/markdownExample";

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
  const { title, createdAt, author, preview } = props;

  return (
    <MainContainer>
      <div className="mx-auto min-h-screen max-w-[800px]">
        <CustomReactMarkdown
          author={author}
          createdAt={createdAt}
          preview={preview}
          title={title}
        >
          {markdownSample}
        </CustomReactMarkdown>
      </div>
    </MainContainer>
  );
};
export default Post;
