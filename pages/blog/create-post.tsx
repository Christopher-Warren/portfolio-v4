// pages/create.tsx

import React, { useState } from "react";

import Router from "next/router";
import { MainContainer } from "../../components/containers/MainContainer";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import TextInput from "../../components/inputs/TextInput";
import CustomReactMarkdown from "../../components/markdown/CustomReactMarkdown";
import { markdownSample } from "../../assets/markdownExample";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronCircleLeft,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-regular-svg-icons";

import Link from "next/link";
import { useSession } from "next-auth/react";

const Draft: React.FC = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [previewContent, setPreviewContent] = useState("");

  const [isPreviewing, setIsPreviewing] = useState(false);

  const { data: session } = useSession();

  const submitPost = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, content, preview: previewContent, published: true };
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
      const body = {
        title,
        content,
        preview: previewContent,
        published: false,
      };
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
    <MainContainer className="">
      <div className="mx-auto min-h-screen max-w-[800px]">
        <Link className="border" href={"/blog"}>
          <a>
            <button className="mt-2 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-300 text-neutral-300 transition-colors hover:border-neutral-500 hover:text-neutral-500 dark:border-neutral-700 dark:text-neutral-700 dark:hover:border-neutral-200 dark:hover:text-neutral-200">
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </a>
        </Link>

        <h1 className="my-10 text-xl">New Post</h1>
        <form className="mx-auto rounded-lg border border-neutral-300 shadow-lg dark:border-neutral-700">
          <div
            className={`rounded-t-lg border-b px-4 transition-colors ${
              isPreviewing
                ? "border-transparent"
                : "border-neutral-300 dark:border-neutral-700"
            }`}
          >
            <ul className="flex gap-3">
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPreviewing(false);
                  }}
                  className={`-mb-px py-2 px-4 ${
                    !isPreviewing &&
                    "border-b-2 border-neutral-400 bg-neutral-200/60 transition-colors dark:border-neutral-100 dark:bg-neutral-800/90"
                  }`}
                >
                  <FontAwesomeIcon icon={faEdit} />
                  <span className="ml-3">Edit</span>
                </button>
              </li>
              <li>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setIsPreviewing(true);
                  }}
                  className={`-mb-px py-2 px-4 ${
                    isPreviewing &&
                    "border-b-2 border-neutral-400 bg-neutral-200/60 transition-colors dark:border-neutral-100 dark:bg-neutral-800/90"
                  }`}
                >
                  <span> Preview</span>
                </button>
              </li>
            </ul>
          </div>
          <div
            className={`flex flex-col overflow-hidden transition-all  ${
              isPreviewing ? "h-0 p-0" : "h-auto p-4"
            }`}
          >
            <TextInput
              autoFocus
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              type="text"
              value={title}
            />
            <TextInput
              onChange={(e) => setPreviewContent(e.target.value)}
              placeholder="Preview Content"
              multiline
              rows={2}
              value={previewContent}
            />
            <TextInput
              onChange={(e) => setContent(e.target.value)}
              placeholder="Content"
              multiline
              rows={8}
              value={content}
            />
          </div>
        </form>

        <div
          className={` ${
            isPreviewing ? "mt-16 block opacity-100" : "hidden opacity-0"
          }`}
        >
          <CustomReactMarkdown
            author={session?.user}
            preview={previewContent}
            title={title}
          >
            {content}
          </CustomReactMarkdown>
        </div>
        <div className="mt-10 flex justify-end gap-6">
          <button
            className="rounded-lg border border-neutral-500 px-4 py-2 text-neutral-500 transition-opacity hover:opacity-80 dark:border-neutral-400 dark:text-neutral-400"
            onClick={submitDraft}
          >
            Save Draft
          </button>
          <button
            className="rounded-lg bg-green-700 px-4 py-2 text-white transition-opacity hover:opacity-80 "
            onClick={submitPost}
          >
            Post
          </button>
        </div>
      </div>
    </MainContainer>
  );
};

export default Draft;
