// pages/p/[id].tsx

import React from "react";
import { GetServerSideProps } from "next";
import ReactMarkdown from "react-markdown";
import Router from "next/router";

import { useSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import { PostProps } from "../../../@types/Post";
import { MainContainer } from "../../../components/containers/MainContainer";

import remarkGfm from "remark-gfm";
import { serializeData } from "../../../utils/serializeData";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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

  const sample = `
  
  ## A paragraph with *emphasis* and **strong importance**.

  > A block quote with ~strikethrough~ and a URL: https://reactjs.org.


  
Lists
  * [ ] todo 
  * [x] done
  
  ~~~js
  console.log("ayy boi")
  const variable = 'string'

  const func = (args) => {
    return
  }
  ~~~

  | Option | Description |
  | ------ | ----------- |
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |
  
  Right aligned columns
  
  | Option | Description |
  | ------:| -----------:|
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |
  `;

  return (
    <MainContainer>
      <div>
        <h2>{title}</h2>
        <p>By {props?.author?.name || "Unknown author"}</p>
        <div className="mt-10">
          <ReactMarkdown
            className="prose prose-pre:rounded-lg prose-pre:p-0  dark:prose-invert"
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || "");

                return !inline && match ? (
                  <SyntaxHighlighter
                    style={dark as any}
                    language={match[1]}
                    showLineNumbers
                    PreTag="div"
                    customStyle={{ margin: 0 }}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {sample}
          </ReactMarkdown>
        </div>

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
