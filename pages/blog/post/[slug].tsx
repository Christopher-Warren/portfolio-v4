// pages/p/[id].tsx

import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Router from "next/router";

import { useSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import { PostProps } from "../../../@types/Post";
import { MainContainer } from "../../../components/containers/MainContainer";

interface ApiPostProps extends PostProps {
  error: string;
}

export const getServerSideProps: GetServerSideProps<any> = async ({
  params,
}) => {
  // console.log("asd", params);
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
  console.log("asdhk");
  return {
    props: post,
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
  console.log(status);
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
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <ReactMarkdown>{props.content}</ReactMarkdown>
        {!props.published && userHasValidSession && postBelongsToUser && (
          <button onClick={() => publishPost(String(props.id))}>Publish</button>
        )}
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
