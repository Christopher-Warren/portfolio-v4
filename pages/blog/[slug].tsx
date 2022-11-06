import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Router from "next/router";

import { useSession } from "next-auth/react";
import prisma from "../../lib/prisma";
import { PostProps } from "../../@types/Post";
import { MainContainer } from "../../components/containers/MainContainer";

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
    props: post,
  };
};

const Post: React.FC<ApiPostProps> = (props) => {
  const { title } = props;

  return (
    <MainContainer>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
      <style jsx>{`
        .page {
          background: var(--geist-background);
          padding: 2rem;
        }

        .actions {
          margin-top: 2rem;
        }

        button {
          background: #ececec;
          border: 0;
          border-radius: 0.125rem;
          padding: 1rem 2rem;
        }

        button + button {
          margin-left: 1rem;
        }
      `}</style>
    </MainContainer>
  );
};
export default Post;
