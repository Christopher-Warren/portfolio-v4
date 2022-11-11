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

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as dark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SyntaxHighlight from "../../../components/markdown/SyntaxHighlight";

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

  # GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.

## Footnote

A note[^1]

[^1]: Big note.

## Strikethrough

~one~ or ~~two~~ tildes.

## Table

| Beep |   No.  |   Boop |
| :--- | :----: | -----: |
| beep |  1024  |    xyz |
| boop | 338845 |    tuv |
| foo  |  10106 | qrstuv |
| bar  |   45   |   lmno |

## Tasklist

* [ ] to do
* [x] done


  
Lists
  * [ ] todo 
  * [x] done
  
  ~~~js
  # fn hey man
  export default function isInViewport(el) {
    var rect = el.getBoundingClientRect();
  

    const heyDude = 123;
  
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  ~~~


  ![AltTextHere](/images/headshot.png)

  | Option | Description |
  | ------ | ----------- |
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |
  
  Right aligned columns
  

  | Feature | Support | | ---------: | :------------------- | | CommonMark | 100% | | GFM | 100% w/ remark-gfm |


  | Option | Description |
  | ------:| -----------:|
  | data   | path to data files to supply the data that will be passed into templates. |
  | engine | engine to be used for processing templates. Handlebars is the default. |
  | ext    | extension to be used for dest files. |
  `;

  return (
    <MainContainer>
      <div className="">
        <div className="prose mx-auto  prose-pre:bg-transparent prose-pre:p-0 dark:prose-invert lg:min-w-[800px]">
          <h2>{title}</h2>
          <p>By {props?.author?.name || "Unknown author"}</p>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                // const match = /language-(\w+)/.exec(className || "");

                return <SyntaxHighlight {...props} />;
              },
            }}
          >
            {sample}
          </ReactMarkdown>
        </div>

        {/* {!props.published && userHasValidSession && postBelongsToUser && (
          <button onClick={() => publishPost(String(props.id))}>Publish</button>
        )} */}
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
