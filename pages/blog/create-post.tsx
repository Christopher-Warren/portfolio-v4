// pages/create.tsx

import React, { useState } from "react";

import Router from "next/router";
import { MainContainer } from "../../components/containers/MainContainer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TextInput from "../../components/inputs/TextInput";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submitPost = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, published: true };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/blog/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  const submitDraft = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, published: true };
      await fetch("/api/post", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      await Router.push("/blog/drafts");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainContainer>
      <div className="mx-auto max-w-2xl">
        <form className="flex flex-col">
          <div className="">{"<"}</div>
          <h1>New Draft</h1>
          <TextInput
            className="text-lg"
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            type="text"
            value={title}
          />
          <textarea
            cols={50}
            className="mt-5 rounded border px-2 py-2 shadow outline-none ring-green-500/50 ring-offset-1 ring-offset-neutral-900 focus:border-green-500 focus:ring dark:border-neutral-700 dark:bg-neutral-800 dark:focus:border-green-500 "
            onChange={(e) => setContent(e.target.value)}
            placeholder="Content"
            rows={8}
            value={content}
          />
          <div>
            <button onClick={submitPost}>Post</button>
            <button onClick={submitDraft}>Save Draft</button>
          </div>
        </form>

        {/* <div>
          <h1>Preview</h1>
          <ReactMarkdown
            className="prose dark:prose-invert"
            remarkPlugins={[remarkGfm]}
          >
            {content}
          </ReactMarkdown>
        </div> */}
      </div>
    </MainContainer>
  );
};

export default Draft;
