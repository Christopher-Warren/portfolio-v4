import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../assets/navLinks";
import { MainContainer } from "../containers/MainContainer";
import InlineLink from "../links/InlineLink";

export const Footer = () => {
  return (
    <MainContainer className="p-0">
      <div className="absolute left-0 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
      <div className="flex items-center justify-between pt-10 pb-14 text-sm text-neutral-600 dark:text-neutral-400">
        <ul className="flex space-x-5">
          {navLinks.map((navRoute) => {
            return <li key={navRoute.pathname}>{navRoute.pathname}</li>;
          })}
        </ul>
        <div className="">
          <span className="block text-xs">Design heavily inspired by</span>
          <span className="block text-neutral-700 dark:text-neutral-300">
            <Link href="https://tailwindui.com/templates/spotlight">
              <a className="inline-block w-full py-1 text-center">
                <svg
                  className="inline fill-blue-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                >
                  <path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z" />
                </svg>
                TailwindUI
              </a>
            </Link>
          </span>
        </div>
        <div className="text-neutral-400 dark:text-neutral-600">
          © 2022 Chris Warren. All rights reserved.
        </div>
      </div>
    </MainContainer>
  );
};
