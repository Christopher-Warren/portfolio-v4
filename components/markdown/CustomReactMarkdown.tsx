import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// pages/p/[id].tsx

import React, { useState } from "react";

import SyntaxHighlight from "./SyntaxHighlight";

import remarkEmoji from "remark-emoji";
import remarkGithubBlockQuote from "remark-github-beta-blockquote-admonitions";
import { dateToString } from "../../utils/date";

import Image from "next/image";
import { readingTime } from "../../utils/readingTime";

const CustomReactMarkdown = ({
  children,
  title,
  author,
  createdAt,
  preview,
}: any) => {
  const publishDate = dateToString(createdAt);

  const timeToRead = readingTime(children);

  const headingWithAnchor = ({ children, level }: any) => {
    const heading = children[0];

    // If we have a heading, make it lower case
    let anchor = typeof heading === "string" ? heading.toLowerCase() : "";

    // Clean anchor (replace special characters whitespaces).
    // Alternatively, use encodeURIComponent() if you don't care about
    // pretty anchor links
    anchor = anchor.replace(/[^a-zA-Z0-9 ]/g, "");
    anchor = anchor.replace(/ /g, "-");

    // Utility
    const container = (children: React.ReactNode): JSX.Element => (
      <div className="relative no-underline">
        <a id={anchor} href={`#${anchor}`} className="absolute -top-20" />
        <span>{children}</span>
      </div>
    );

    switch (level) {
      case 1:
        return <h1>{container(children)}</h1>;

      case 2:
        return <h2>{container(children)}</h2>;

      case 3:
        return <h3>{container(children)}</h3>;

      case 4:
        return <h4>{container(children)}</h4>;

      default:
        return <h2>{container(children)}</h2>;
    }
  };

  return (
    <div className="prose mx-auto text-neutral-900 prose-headings:font-semibold prose-h1:font-medium prose-h2:text-3xl  prose-h3:text-2xl prose-p:text-lg prose-pre:m-0 prose-pre:bg-transparent prose-pre:p-0 prose-pre:py-6 dark:prose-invert dark:text-neutral-50 lg:min-w-[800px]">
      <div className="items-top flex pb-10">
        <div className="mr-8 h-[70px] w-[70px] flex-shrink-0 overflow-hidden rounded-full bg-gradient-to-br  from-neutral-300  to-neutral-100  dark:from-neutral-700 dark:to-neutral-300/10">
          <Image
            alt="Portiat of Chris Warren"
            width={70}
            height={70}
            src={"/images/headshot2.png"}
          />
        </div>
        <div className="mt-0">
          <span className="my-0 block dark:text-white">{author.name}</span>
          <span className="my-1.5 text-sm dark:text-neutral-400">
            Fullstack developer and UX enthusiast.
          </span>
        </div>
      </div>
      <h1 className="mb-5 text-5xl">{title}</h1>
      <div className=" text-neutral-500 dark:text-neutral-400">
        <span>
          {publishDate} <span className="mx-1.5 text-xs">•</span> {timeToRead}{" "}
          min read
        </span>
      </div>
      <p className="">{preview}</p>

      <div className="relative mb-5 h-64">
        <Image
          className=""
          layout="fill"
          objectFit="cover"
          alt="placeholder"
          src={"/150x250.png"}
        />
      </div>

      <ReactMarkdown
        remarkPlugins={[
          [remarkGfm],
          [remarkEmoji],
          [
            remarkGithubBlockQuote,
            {
              classNameMaps: {
                block: (title: any) => {
                  const baseStyle =
                    "[&>p]:before:content-none not-italic border-l-4 dark:text-neutral-100 text-neutral-600";

                  if (title === "Warning") {
                    return `${baseStyle} border-yellow-700/20 dark:border-yellow-900/30 rounded-sm`;
                  }

                  if (title === "Note") {
                    return `${baseStyle} border-blue-700/20 dark:border-blue-900/30 rounded-sm`;
                  }
                },
                title: (title: any) => {
                  const baseStyle =
                    "flex items-center before:text-lg before:font-serif before:inline-flex mb-2 before:mr-5 before:items-center before:w-8 before:h-8 before:border-2 before:rounded-full before:justify-center";

                  if (title === "Warning") {
                    return `${baseStyle} before:content-['!'] before:dark:border-yellow-400 before:border-yellow-700 dark:text-yellow-400 text-yellow-700`;
                  }

                  if (title === "Note") {
                    return `${baseStyle} before:content-['i'] before:dark:border-blue-500 before:border-blue-700 dark:text-blue-500 text-blue-700`;
                  }
                },
              },
            },
          ],
        ]}
        components={{
          code(props) {
            return <SyntaxHighlight {...props} />;
          },
          h1: headingWithAnchor,
          h2: headingWithAnchor,
          h3: headingWithAnchor,
          h4: headingWithAnchor,
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
export default CustomReactMarkdown;
