import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faSun as sun,
  faMoon as moon,
} from "@fortawesome/free-regular-svg-icons";

import { faBars as mobileIcon } from "@fortawesome/free-solid-svg-icons";

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
    <div
      className={`flex fixed z-10 pt-12 -mt-5 w-full max-w-7xl mx-auto right-0 left-0 justify-between transition-transform duration-300 ${
        visible ? "translate-y-0" : `-translate-y-full`
      }`}
    >
      <Link href="/">
        <button className="signature text-xl dark:text-neutral-300">CW</button>
      </Link>
      {/* PC Nav */}
      <nav
        className={`hidden md:flex border border-neutral-200 dark:border-none dark:neumorphism-shadow neumorphism-shadow dark:bg-neutral-800/80 bg-neutral-50/80 shadow-md items-middle backdrop-blur tracking-wide dark:text-neutral-200 px-5 rounded-full text-sm leading-6`}
      >
        <ul className="flex">
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

      {/* Mobile Nav */}
      <div className="flex ">
        <div className="md:hidden relative">
          <button
            onClick={() => setShowMobileNav(!showMobileNav)}
            className="flex justify-center rounded-full z-20 border border-neutral-200 dark:neumorphism-shadow neumorphism-shadow dark:hover:bg-neutral-800 hover:shadow-none dark:bg-neutral-800/80   dark:border-none shadow-md  backdrop-blur  dark:text-neutral-200"
          >
            <FontAwesomeIcon
              className="dark:text-neutral-300  p-3 text-xl"
              icon={mobileIcon}
            />
          </button>
          <nav
            className={`absolute transition-transform origin-right rounded-l-xl bg-neutral-800 mt-5 ${
              showMobileNav ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
            }`}
          >
            <ul className="">
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
        </div>
        <button
          className="flex justify-center rounded-full z-20 border border-neutral-200 dark:neumorphism-shadow neumorphism-shadow dark:hover:bg-neutral-800 hover:shadow-none dark:bg-neutral-800/80   dark:border-none shadow-md  backdrop-blur  dark:text-neutral-200"
          onClick={() => setDarkModeActive(!darkModeActive)}
        >
          <FontAwesomeIcon
            className="dark:text-yellow-200 text-indigo-400  p-3.5 rounded-full"
            icon={darkModeActive ? sun : moon}
          />
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center">
      <div
        className={`flex w-full z-50 pt-12 -mt-5  md:px-20  max-w-7xl md:justify-between justify-end items-start fixed transition-transform border
    ${visible ? "translate-y-0" : `-translate-y-full`}`}
      >
        <Link href="/">
          <button className="signature text-xl text-neutral-300 absolute left-0 px-5 self-center">
            CW
          </button>
        </Link>

        {/* PC Nav */}
        <nav className="hidden md:block" ref={heightRef}>
          <ul
            className={`flex border border-neutral-200 dark:border-none dark:neumorphism-shadow neumorphism-shadow dark:bg-neutral-800/80 bg-neutral-50/80 shadow-md items-middle backdrop-blur tracking-wide dark:text-neutral-200 px-5 rounded-full text-sm leading-6`}
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

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkModeActive(!darkModeActive)}>
          <FontAwesomeIcon
            className="dark:text-yellow-200 text-indigo-400 bg-neutral-800/80 p-3 rounded-full"
            icon={darkModeActive ? sun : moon}
          />
        </button>

        {/* Mobile Nav Toggle */}
        <button
          onClick={() => setShowMobileNav(!showMobileNav)}
          className="flex md:hidden justify-center rounded-full z-20 border border-neutral-200 dark:neumorphism-shadow neumorphism-shadow dark:hover:bg-neutral-800 hover:shadow-none dark:bg-neutral-800/80   dark:border-none shadow-md  backdrop-blur  dark:text-neutral-200"
        >
          <FontAwesomeIcon
            className="dark:text-green-400 text-indigo-400 p-3 text-xl"
            icon={mobileIcon}
          />
        </button>

        {/* Mobile Nav */}
        <div className="md:hidden self-end mx-5">
          <nav className="relative" ref={heightRef}>
            <ul
              className={` absolute transition-transform right-0 dark:neumorphism-shadow dark:bg-neutral-800/80 mt-6
              ${showMobileNav ? "translate-x-0" : "translate-x-full"}`}
            >
              {navPaths.map((route: NavPath) => {
                return (
                  <li
                    key={route.pathname}
                    className="relative px-3 py-2  hover:text-green-400 transition-colors w-fit"
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
        </div>
      </div>
    </div>
  );
};
