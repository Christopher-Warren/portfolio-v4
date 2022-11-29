import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
  a11yDark as dark,
  prism as light,
} from "react-syntax-highlighter/dist/cjs/styles/prism";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

import {
  faChevronLeft,
  faChevronRight,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import useDarkMode from "../../hooks/useTheme";

const SyntaxHighlight = ({
  node,
  inline,
  className,
  children,
  ...props
}: any) => {
  const match = /language-(\w+)/.exec(className || "");

  const [hasCopied, setHasCopied] = useState(false);

  const [theme] = useDarkMode();

  console.log(inline);

  useEffect(() => {
    if (hasCopied) {
      const timeout = setTimeout(() => {
        setHasCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  let codeTitle;
  let codeContent;

  if (String(children).startsWith("#")) {
    codeTitle = String(children)
      .split(/^(.*?)\r?\n(.*)s/)[1]
      .split("#")[1]
      .trim();

    codeContent = String(children).split(codeTitle)[1].trimStart();
  }

  if (inline) {
    return (
      <code
        className={`${className} rounded bg-[#e7e4e2] px-2 py-0.5 font-normal text-black before:hidden after:hidden dark:bg-neutral-800 dark:text-white`}
        {...props}
      >
        {children}
      </code>
    );
  }

  if (!match) {
    return (
      <code className={`${className}`} {...props}>
        {children}
      </code>
    );
  }

  const singleLine = children[0].split("\n").length - 1 === 1;

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-xl">
        {!singleLine && codeTitle && (
          <div className="flex h-10 items-center justify-between rounded-t-lg bg-[#e7e4e2] text-black dark:bg-neutral-800 dark:text-white">
            <span className="mx-[14px] mt-1">{codeTitle}</span>
          </div>
        )}

        <div className="absolute right-0 px-2">
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
            className={` flex  items-center justify-center rounded-lg border bg-neutral-100 p-3 text-black transition-opacity hover:opacity-80 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white  
          ${hasCopied ? " " : ""}
          ${singleLine ? "m-2 h-8 w-8 " : "m-3 h-10 w-10"}
         
          `}
            onClick={(e) => {
              navigator.clipboard.writeText(
                String(children).replace(/\n$/, "")
              );
              setHasCopied(true);
            }}
          >
            <Icon
              className={`${
                hasCopied
                  ? "text-green-600"
                  : "text-neutral-600 dark:text-neutral-200"
              }`}
              icon={faCopy}
            />
          </button>
        </div>
        <SyntaxHighlighter
          style={theme === "dark" ? dark : light}
          language={match[1]}
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
    </div>
  );
};
export default SyntaxHighlight;
