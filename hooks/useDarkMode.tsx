import { useEffect, useState } from "react";

const useDarkMode = (): [boolean | null, (arg0: boolean | null) => void] => {
  const [darkModeActive, setDarkModeActive] = useState<boolean | null>(null);

  console.log(darkModeActive);

  useEffect(() => {
    if (darkModeActive === null) {
      if (
        localStorage.theme === "dark" ||
        (!("theme" in localStorage) &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        setDarkModeActive(true);
        document.documentElement.classList.add("dark");
      } else {
        setDarkModeActive(false);
        document.documentElement.classList.remove("dark");
      }
    }
    if (darkModeActive === true) document.documentElement.classList.add("dark");

    if (darkModeActive === false)
      document.documentElement.classList.remove("dark");
  }, [darkModeActive]);

  return [darkModeActive, setDarkModeActive];
};
export default useDarkMode;
