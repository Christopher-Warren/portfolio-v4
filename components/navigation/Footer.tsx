import Link from "next/link";
import { navLinks } from "../../assets/navLinks";
import { MainContainer } from "../containers/MainContainer";

export const Footer = () => {
  return (
    <MainContainer containerClassName=" shadow-none" className="p-0 pt-20">
      <div className="absolute left-0 h-px w-full bg-neutral-200 dark:bg-neutral-800" />
      <div className="block items-center justify-between pt-10 pb-14 text-sm text-neutral-600 dark:text-neutral-400 md:flex">
        <ul className="flex justify-evenly space-x-5  md:justify-start">
          {navLinks.map((navRoute) => {
            return (
              <li className="hover:text-green-400" key={navRoute.pathname}>
                <Link href={navRoute.href}>
                  <a> {navRoute.pathname}</a>
                </Link>
              </li>
            );
          })}
        </ul>

        <p className="mt-4 text-center text-neutral-400 dark:text-neutral-600  md:mt-0 md:text-left">
          © 2022 Chris Warren. All rights reserved.
        </p>

        <div className=""></div>
      </div>
    </MainContainer>
  );
};
