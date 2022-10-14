import { useEffect, useState } from "react";

const useDarkMode = (): [boolean | null, (arg0: boolean | null) => void] => {
  const [darkModeActive, setDarkModeActive] = useState<boolean | null>(null);

  useEffect(() => {
    if (darkModeActive === null) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      return;
    }
    if (darkModeActive) document.documentElement.classList.add("dark");

    if (!darkModeActive) document.documentElement.classList.remove("dark");
  }, [darkModeActive]);

  return [darkModeActive, setDarkModeActive];
};
export default useDarkMode;
