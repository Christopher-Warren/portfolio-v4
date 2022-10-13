import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const scrollYRef = useRef<number>(0);
  const heightRef = useRef<HTMLDivElement>(null);
  const navHeight = heightRef.current?.clientHeight;
  const handleScroll = (e: any) => {
    const currentScroll = window.scrollY;
    const previousScroll = scrollYRef.current;

    if (previousScroll + 200 < currentScroll) {
      setVisible(false);
      scrollYRef.current = currentScroll;
    }
    if (previousScroll - 200 > currentScroll) {
      setVisible(true);

      scrollYRef.current = currentScroll;
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(navHeight);

  return (
    <>
      <nav
        ref={heightRef}
        className={`w-full text-slate-900 fixed transition-transform
        ${visible ? "translate-y-0" : `-translate-y-full`}`}
      >
        <ul
          className={`flex w-max mx-auto font-light bg-neutral-900  items-middle neumorphism-shadow tracking-wide dark:text-neutral-200 mt-7 px-5 rounded-2xl text-sm leading-6`}
        >
          <li className="px-3 py-2 hover:text-green-500 transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="px-3 py-2 hover:text-green-500 transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="px-3 py-2 hover:text-green-500 transition-colors">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="px-3 py-2 hover:text-green-500 transition-colors">
            <Link href="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
