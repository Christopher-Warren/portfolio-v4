import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark as dark } from "react-syntax-highlighter/dist/cjs/styles/prism";

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
      }, 1300);

      console.log(timeout);

      return () => clearTimeout(timeout);
    }
  }, [hasCopied]);

  return !inline && match ? (
    <div className="relative border">
      <div className="flex h-8 justify-between">
        <span>filename</span>

        <span
          className={`rounded-lg bg-green-600 transition-all duration-300 ${
            hasCopied ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
        >
          copied?
        </span>
      </div>

      <div className="absolute right-0">
        <button
          className="bg-blue-600 p-3"
          onClick={(e) => {
            navigator.clipboard.writeText(String(children).replace(/\n$/, ""));
            setHasCopied(true);
          }}
        >
          copy
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
        }}
        {...props}
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    </div>
  ) : (
    <code className={className} {...props}>
      {children}
    </code>
  );
};
export default SyntaxHighlight;
