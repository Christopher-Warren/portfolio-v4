import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

interface NavPath {
  href: string;
  pathname: string;
}

export const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const scrollYRef = useRef<number>(0);
  const heightRef = useRef<HTMLDivElement>(null);
  const navHeight = heightRef.current?.clientHeight;

  const router = useRouter();

  const navPaths = [
    {
      href: "/",
      pathname: "Home",
    },
    {
      href: "/about",
      pathname: "About",
    },
    {
      href: "/projects",
      pathname: "Projects",
    },
    {
      href: "/articles",
      pathname: "Articles",
    },
  ];

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

  return (
    <div className="flex justify-center ">
      <div
        className={`flex w-full z-50 pt-7 px-20 max-w-7xl items-center justify-between fixed transition-transform
    ${visible ? "translate-y-0" : `-translate-y-full`}`}
      >
        <div></div>
        <nav ref={heightRef}>
          <ul
            className={`flex neumorphism-shadow bg-neutral-800/80 shadow-md items-middle 00  backdrop-blur tracking-wide dark:text-neutral-200 px-5 rounded-full text-sm leading-6`}
          >
            {navPaths.map((route: NavPath) => {
              return (
                <li
                  key={route.pathname}
                  className="relative px-3 py-2  hover:text-green-400 transition-colors"
                >
                  <Link className="" href={route.href}>
                    {route.pathname}
                  </Link>
                  <span
                    className={`bg-gradient-to-r from-transparent  via-green-500/70 to-transparent shadow  w-full h-px absolute bottom-0 left-0 -mb-px
                    ${router.pathname !== route.href && "hidden"}`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
        <div></div>
      </div>
    </div>
  );
};
