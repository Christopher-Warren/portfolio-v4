import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// pages/p/[id].tsx

import React, { useState } from "react";

import SyntaxHighlight from "./SyntaxHighlight";

import remarkEmoji from "remark-emoji";
import remarkGithubBlockQuote from "remark-github-beta-blockquote-admonitions";
import { dateToString } from "../../utils/date";

const CustomReactMarkdown = ({
  children,
  title,
  author,
  createdAt,
  preview,
}: any) => {
  const publishDate = dateToString(createdAt);

  return (
    // Padding bottom fixes a strange glitch
    <div className="content prose mx-auto pb-1 prose-pre:bg-transparent prose-pre:p-0 dark:prose-invert lg:min-w-[800px]">
      <div className="inline-block">
        <p className="inline-block">By {author?.name || "Unknown author"}</p>
        <p className="inline-block">{publishDate}</p>
        <h1>{title}</h1>
        <p className="inline-block">{preview}</p>
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
                    return `${baseStyle} before:content-['!'] before:dark:border-yellow-600 before:border-yellow-700 dark:text-yellow-600 text-yellow-700`;
                  }

                  if (title === "Note") {
                    return `${baseStyle} before:content-['i'] before:dark:border-blue-600 before:border-blue-700 dark:text-blue-600 text-blue-700`;
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
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};
export default CustomReactMarkdown;
