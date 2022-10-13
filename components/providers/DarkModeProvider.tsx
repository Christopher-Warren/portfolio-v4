import React from "react";

type Props = {
  children?: React.ReactNode;
};

export const DarkModeProvider: React.FC<Props> = ({ children }) => {
  if (typeof window !== "undefined") {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }
  if (!Array.isArray(children)) return <>{children}</>;

  return <>{[...children]}</>;
};
