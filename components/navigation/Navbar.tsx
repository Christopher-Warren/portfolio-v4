import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome";

import {
  faSun as sun,
  faMoon as moon,
} from "@fortawesome/free-regular-svg-icons";

import { faBars as mobileIcon, faX } from "@fortawesome/free-solid-svg-icons";

import useDarkMode from "../../hooks/useDarkMode";

interface NavPath {
  href: string;
  pathname: string;
}

export const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const scrollYRef = useRef<number>(0);
  const heightRef = useRef<HTMLDivElement>(null);
  const navHeight = heightRef.current?.clientHeight;

  const [darkModeActive, setDarkModeActive] = useDarkMode();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const router = useRouter();

  const navPaths = [
    {
      href: "/",
      pathname: "Home",
    },
    {
      href: "/projects",
      pathname: "Projects",
    },
    {
      href: "/articles",
      pathname: "Articles",
    },
    {
      href: "/about",
      pathname: "About",
    },
  ];

  const handleScroll = (e: any) => {
    const currentScroll = window.scrollY;
    const previousScroll = scrollYRef.current;

    if (previousScroll + 200 < currentScroll) {
      setShowMobileNav(false);
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
    <>
      <div
        className={`fixed right-0 left-0 z-40 mx-auto -mt-5 flex w-full max-w-7xl justify-between px-4 pt-12 transition-transform duration-300 
      sm:px-10 md:justify-between lg:px-36 xl:px-20
      ${visible ? "translate-y-0" : `-translate-y-full`}`}
      >
        <div className="flex items-center">
          <Link href="/">
            <a
              onClick={() => setShowMobileNav(!showMobileNav)}
              className="signature z-20 rounded-full border  border-neutral-300 bg-neutral-100/80 p-2 align-middle text-neutral-600  shadow-md backdrop-blur hover:shadow-none    dark:border-neutral-800  dark:bg-neutral-900/30 dark:text-neutral-300 dark:hover:bg-neutral-800"
            >
              CW
            </a>
          </Link>
        </div>

        {/* PC Nav */}
        <nav
          className={`dark:neumorphism-shadow neumorphism-shadow items-middle hidden rounded-full border border-neutral-200 bg-neutral-100/80 px-5 text-sm leading-6 tracking-wide shadow-md backdrop-blur dark:border-none dark:bg-neutral-800/80 dark:text-neutral-200 md:flex`}
        >
          <ul className="flex">
            {navPaths.map((route: NavPath) => {
              const isCurrentPage = router.pathname === route.href;

              return (
                <li
                  key={route.pathname}
                  className="relative flex items-center "
                >
                  <Link href={route.href}>
                    <a
                      className={`relative px-3 py-2 transition-colors hover:text-green-400 ${
                        isCurrentPage && "text-green-400"
                      } `}
                    >
                      {route.pathname}
                    </a>
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 -mb-px hidden h-px  w-full bg-gradient-to-r from-transparent via-green-500/70 to-transparent shadow
                    ${isCurrentPage && "lg:block"}`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile Nav */}
        <div className="relative flex">
          <button
            className="dark:neumorphism-shadow neumorphism-shadow z-20 mr-4 flex justify-center rounded-full border border-neutral-200 bg-neutral-100/80 shadow-md backdrop-blur hover:shadow-none   dark:border-none dark:bg-neutral-800/80  dark:text-neutral-200  dark:hover:bg-neutral-800"
            onClick={() => setDarkModeActive(!darkModeActive)}
          >
            <Icon
              className="rounded-full p-3.5 text-indigo-400 dark:text-yellow-200"
              icon={darkModeActive ? sun : moon}
            />
          </button>
          <button
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="dark:neumorphism-shadow neumorphism-shadow z-20 flex justify-center rounded-full border border-neutral-200 bg-neutral-100/80 shadow-md backdrop-blur hover:shadow-none dark:border-none   dark:bg-neutral-800/80 dark:text-neutral-200  dark:hover:bg-neutral-800  md:hidden"
          >
            <Icon
              className="p-3 text-xl text-neutral-500 dark:text-neutral-300"
              icon={mobileIcon}
            />
          </button>
        </div>
      </div>

      <div className="relative flex justify-center md:hidden">
        <div
          className={` fixed top-0 left-0 z-40 h-screen w-screen bg-neutral-900/40 backdrop-blur ${
            showMobileNav ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        />

        <div
          className={`fixed top-24 z-50 w-3/4 max-w-sm rounded-xl border border-neutral-200 bg-neutral-100 shadow-md
            transition-opacity duration-200 dark:border-none dark:bg-neutral-800 dark:bg-neutral-800/90 dark:text-neutral-200 sm:-mx-10
            ${showMobileNav ? "opacity-100" : "opacity-0"}`}
        >
          <button
            onClick={() => setShowMobileNav(false)}
            className="absolute right-0 flex h-6 w-6 items-center justify-center p-7"
          >
            <Icon icon={faX} />
          </button>
          <nav>
            <ul className="bg-10 ml-10 mt-10 mb-10 flex flex-col">
              {navPaths.map((route: NavPath) => {
                const isCurrentPage = router.pathname === route.href;
                return (
                  <li key={route.pathname} className="relative w-10/12 py-1">
                    <Link href={route.href}>
                      <a className="relative block py-2">{route.pathname}</a>
                    </Link>

                    {isCurrentPage ? (
                      <span
                        className={`absolute bottom-1.5  left-0 -mb-px h-0.5  w-10/12 bg-gradient-to-r from-green-500 via-emerald-500 to-transparent shadow`}
                      />
                    ) : (
                      <span
                        className={`absolute bottom-1.5  left-0 -mb-px h-px  w-10/12 bg-gradient-to-r from-neutral-700 to-transparent shadow`}
                      />
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
