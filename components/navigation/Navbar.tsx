import Link from "next/link";
import { useRouter } from "next/router";

import { useEffect, useRef, useState } from "react";

import {
  FontAwesomeIcon,
  FontAwesomeIcon as Icon,
} from "@fortawesome/react-fontawesome";

import {
  faSun as sun,
  faMoon as moon,
} from "@fortawesome/free-regular-svg-icons";

import {
  faBars as mobileIcon,
  faBolt,
  faHamburger,
  faX,
} from "@fortawesome/free-solid-svg-icons";

import useTheme from "../../hooks/useTheme";
import { navLinks } from "../../assets/navLinks";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { signIn, signOut, useSession } from "next-auth/react";

interface NavPath {
  href: string;
  pathname: string;
}

export const Navbar = () => {
  const [visible, setVisible] = useState(true);

  const scrollYRef = useRef<number>(0);
  const heightRef = useRef<HTMLDivElement>(null);
  const navHeight = heightRef.current?.clientHeight;

  const [theme, setTheme] = useTheme();

  const [showMobileNav, setShowMobileNav] = useState(false);

  const router = useRouter();

  const { data: session } = useSession();

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

  useEffect(() => {
    // Disable scrolling when modal is shown
    showMobileNav
      ? document
          .querySelector("body")
          ?.classList.add(...["overflow-hidden", "sm:overflow-auto"])
      : document
          .querySelector("body")
          ?.classList.remove(...["overflow-hidden", "sm:overflow-auto"]);
  }, [showMobileNav]);

  // @TODO: fix small mobile navbar bug that occurs when closing/opening modal

  return (
    <div
      className={`fixed left-0 right-0 z-30 mx-auto w-full border-b bg-white/80 shadow  dark:border-neutral-800 dark:bg-neutral-900/80 ${
        !showMobileNav && "backdrop-blur"
      }`}
    >
      <div className="left-0 right-0 mx-auto flex h-14 max-w-7xl items-center justify-between px-4 lg:mx-16 xl:mx-auto">
        {/* Logo */}
        <div className=""></div>
        {/* Links */}
        <nav className="ml-10 hidden sm:block">
          <ul className="flex">
            {navLinks.map((route: NavPath) => {
              const isCurrentPage = router.pathname === route.href;

              return (
                <li key={route.pathname} className="relative flex items-center">
                  <Link href={route.href}>
                    <a
                      className={`pointer-events-auto relative px-3 py-2 transition-colors hover:text-green-500 dark:hover:text-green-400 ${
                        isCurrentPage && "text-green-500 dark:text-green-400"
                      } `}
                    >
                      {route.pathname}
                    </a>
                  </Link>
                  <span
                    className={`absolute bottom-0 left-0 -mb-[9px] hidden h-px w-full  bg-gradient-to-r from-transparent via-green-500/70 to-transparent shadow
                    ${isCurrentPage && "lg:block"}`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Buttons */}

        <div className="hidden items-center text-neutral-500  dark:text-neutral-300  sm:flex">
          <button
            aria-label="Toggle dark mode"
            className="mr-1 flex items-center justify-center p-1 text-xl  transition-colors hover:text-yellow-500  hover:dark:text-indigo-500"
            onClick={() => {
              setTheme((prev: any) => {
                if (prev === "light") return "dark";
                if (prev === "dark") return "light";
              });
            }}
          >
            <Icon className="" icon={theme === "dark" ? moon : sun} />
          </button>
          <div className="mx-2 h-6 w-px bg-neutral-300 dark:bg-neutral-700"></div>

          <div className="hover:text-neutral-900 dark:hover:text-neutral-100">
            {session ? (
              <button
                className="font-lg px-2 py-1 transition-colors "
                onClick={() => signOut()}
              >
                <a>Log out</a>
              </button>
            ) : (
              <button
                className="font-lg px-2 py-1 transition-colors "
                onClick={() =>
                  signIn("github").catch((err) => console.error(err))
                }
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        <div className="flex sm:hidden">
          <button
            aria-label="Toggle dark mode"
            className="mr-2 flex items-center justify-center p-1 text-xl text-neutral-500 transition-colors hover:text-yellow-500 dark:text-neutral-300 hover:dark:text-indigo-500"
            onClick={() =>
              setTheme((prev: any) => {
                if (prev === "light") return "dark";
                if (prev === "dark") return "light";
              })
            }
          >
            <Icon className="" icon={theme === "dark" ? moon : sun} />
          </button>
          <button
            aria-label="Toggle dark mode"
            className="mr-1 flex items-center justify-center  p-1 text-xl text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
            onClick={() => setShowMobileNav(true)}
          >
            <Icon className="p-2 text-2xl" icon={mobileIcon} />
          </button>
        </div>
      </div>

      {/* Modal */}
      <div className="relative flex justify-end sm:hidden">
        <div
          className={` fixed top-0 z-40 h-screen w-screen bg-neutral-200/40  backdrop-blur transition-all  dark:bg-neutral-900/50 ${
            showMobileNav ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          {/* <a className="signature absolute bg-gradient-to-br from-emerald-600 to-green-600  bg-clip-text p-2 text-xl text-transparent dark:from-emerald-400 dark:to-green-400 ">
            CW
          </a> */}
        </div>

        <div
          className={`fixed top-0 z-50 h-screen w-3/4 border border-neutral-200 bg-white shadow-md
            duration-300 dark:border-none dark:bg-neutral-800 dark:text-neutral-200 sm:-mx-10
            ${showMobileNav ? "right-0" : "-right-full transition-all"}`}
        >
          <button
            onClick={() => setShowMobileNav(false)}
            aria-label="Close navigation menu"
            className="absolute right-2 flex  items-center justify-center p-5 text-xl"
          >
            <Icon icon={faX} />
          </button>
          <nav>
            <ul className="ml-10 mt-10 mb-10 flex flex-col text-xl ">
              {navLinks.map((route: NavPath) => {
                const isCurrentPage = router.pathname === route.href;
                return (
                  <li key={route.pathname} className="relative w-10/12 py-1">
                    <Link href={route.href}>
                      <a
                        className={`relative block py-2 ${
                          isCurrentPage && "font-semibold text-green-500"
                        }`}
                        onClick={() => setShowMobileNav(false)}
                      >
                        {route.pathname}
                      </a>
                    </Link>

                    {/* {isCurrentPage ? (
                      <span
                        className={`absolute bottom-1.5  left-0 -mb-px h-0.5  w-10/12 bg-gradient-to-r from-green-500 via-emerald-500 to-transparent shadow`}
                      />
                    ) : (
                      <span
                        className={`absolute bottom-1.5  left-0 -mb-px h-px  w-10/12 bg-gradient-to-r from-neutral-700 to-transparent shadow`}
                      />
                    )} */}
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
