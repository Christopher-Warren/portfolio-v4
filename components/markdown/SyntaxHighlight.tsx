import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

const SyntaxHighlight = ({
  node,
  inline,
  className,
  children,
  ...props
}: any) => {
  const match = /language-(\w+)/.exec(className || "");

  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  // const codeTitle = String(children)
  //   .split(/^(.*?)\r?\n(.*)s/)[1]
  //   .split("# fn")[1]
  //   .trim();

  let codeTitle;
  let codeContent;

  if (String(children).startsWith("#")) {
    codeTitle = String(children)
      .split(/^(.*?)\r?\n(.*)s/)[1]
      .split("#")[1]
      .trim();

    codeContent = String(children).split(codeTitle)[1].trimStart();
  }

  return !inline && match ? (
    <div className="relative overflow-hidden rounded-xl bg-blue-500">
      <div className="flex h-8 justify-between rounded-t-lg bg-neutral-800">
        <span className="mx-[14px] mt-1">{codeTitle}</span>
      </div>

      <div className="absolute right-0">
        {/* Copied alert */}
        <div
          className={`absolute -top-6 left-0 right-0 rounded-lg bg-green-600 text-center transition-all duration-300 ${
            hasCopied ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          <span className="text-xs text-white">Copied</span>
          <div className="absolute -bottom-1 right-0 left-0 mx-auto h-2 w-2 rotate-45 rounded-sm bg-green-600"></div>
        </div>

        <button
          className={`m-3 flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-800  p-3 transition-opacity hover:opacity-80  ${
            hasCopied ? " " : ""
          }`}
          onClick={(e) => {
            navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
            setHasCopied(true);
          }}
        >
          <Icon
            className={`${hasCopied ? "text-green-400" : "text-neutral-300"}`}
            icon={faCopy}
          />
        </button>
      </div>
      <SyntaxHighlighter
        style={dark as any}
        language={match[1]}
        showLineNumbers
        PreTag="div"
        codeTagProps={{ className: "" }}
        customStyle={{
          margin: 0,
          borderRadius: 0,
        }}
        {...props}
      >
        {codeTitle ? codeContent : String(children)}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
export default SyntaxHighlight;
