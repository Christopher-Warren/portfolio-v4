// pages/p/[id].tsx

import React, { useState } from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Router from "next/router";

import { useSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import { PostProps } from "../../../@types/Post";
import { MainContainer } from "../../../components/containers/MainContainer";

import remarkGfm from "remark-gfm";
import { serializeData } from "../../../utils/serializeData";

import SyntaxHighlight from "../../../components/markdown/SyntaxHighlight";

import remarkEmoji from "remark-emoji";
import remarkGithubBlockQuote from "remark-github-beta-blockquote-admonitions";

import { markdownSample } from "../../../assets/markdownExample";
import CustomReactMarkdown from "../../../components/markdown/CustomReactMarkdown";

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

async function publishPost(id: string): Promise<void> {
  await fetch(`/api/publish/${id}`, {
    method: "PUT",
  });
  await Router.push("/");
}

const Post: React.FC<ApiPostProps> = (props) => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Authenticating ...</div>;
  }

  const userHasValidSession = Boolean(session);
  const postBelongsToUser = session?.user?.email === props.author?.email;
  let title = props.title;
  if (!props.published) {
    title = `${title} (Draft)`;
  }

  if (props.error) return <div>{props.error}</div>;

  return (
    <MainContainer>
      <div className="">
        <div className="content prose mx-auto prose-pre:bg-transparent prose-pre:p-0 dark:prose-invert lg:min-w-[800px]">
          <h2>{title}</h2>
          <p>By {props?.author?.name || "Unknown author"}</p>
          <CustomReactMarkdown>{markdownSample}</CustomReactMarkdown>
        </div>
        {!props.published && userHasValidSession && postBelongsToUser && (
          <button
            className="bg-blue-500"
            onClick={() => publishPost(String(props.id))}
          >
            Publish
          </button>
        )}
      </div>
    </MainContainer>
  );
};

export default Post;
