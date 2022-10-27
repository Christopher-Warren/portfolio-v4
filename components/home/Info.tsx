import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import { faLaptopCode as projectIcon } from "@fortawesome/free-solid-svg-icons";

import TextInput from "../inputs/TextInput";
import Image from "next/image";

const arr = [
  {
    company: "Parkridge Valley",
    title: "Mental Health Technician II",
    date: "2017 - Current",
    status: "Part time",
    logo: "/images/logos/parkridge_valley_logo.png",
  },
  {
    company: "Tennessee Wolfpack",
    title: "Web Content Designer",
    date: "2021 - 2022",
    status: "Contract",
    logo: "/images/logos/tn_wolfpack_logo.png",
  },
];

export const Info = () => {
  return (
    <div className="w-full lg:pl-32">
      {/* Subscribtion  */}
      <div className="mb-10 w-full rounded-lg border border-neutral-200  p-5 dark:border-neutral-700">
        <div className="mb-4 flex items-center">
          <FontAwesomeIcon
            className="mr-4 text-xl  text-neutral-400 "
            icon={faEnvelope}
            mask={["far", "circle"]}
          />
          <span className="text-neutral-600 dark:text-neutral-100">
            Stay up to date
          </span>
        </div>
        <p className="mb-6 text-sm text-neutral-500 dark:text-neutral-400 ">
          Get notified when I publish something new, and unsubscribe at any
          time. <span className="text-xs">🚧 Coming soon</span>
        </p>
        <div className="flex justify-between">
          <TextInput disabled placeholder="E mail address" />
          <button
            disabled
            className="ml-4 rounded bg-neutral-700 px-4 py-2 text-sm text-white"
          >
            Join
          </button>
        </div>
      </div>

      {/* Projects/work */}
      <div className="w-full rounded-lg border border-neutral-200 p-5 dark:border-neutral-700">
        <div className="mb-7 flex items-center">
          <FontAwesomeIcon
            className="mr-4 text-xl  text-neutral-400 "
            icon={projectIcon}
          />
          <span className="dark:text-neutral-100">Work</span>
        </div>
        {/* project item */}
        {arr.map(({ company, title, date, status, logo }, index) => {
          return (
            <div
              key={index}
              className="my-4 flex items-center justify-between text-sm"
            >
              <div className="border-1 relative mr-4 h-10 w-10 overflow-hidden rounded-full border border-neutral-700">
                <Image
                  layout="fill"
                  className={` ${index === 2 && "scale-[2]"}`}
                  objectFit="cover"
                  src={logo}
                  alt={logo}
                />
              </div>
              <div className="flex-1">
                <p className="text-base">{company}</p>
                <span className="text-neutral-400">{title}</span>
              </div>
              <div className="self-end text-right ">
                <p className="leading-6">{status}</p>
                <span className="text-neutral-400">{date}</span>
              </div>
            </div>
          );
        })}

        <a
          href="/documents/Christopher_Warren_Resume_10_22-1.pdf"
          target="_blank"
          className="mt-3 block w-full rounded-lg bg-gradient-to-br from-green-400 to-teal-400 py-1.5 text-center font-semibold text-neutral-50 shadow-md transition-shadow duration-300 hover:shadow-none"
        >
          Download CV
        </a>
      </div>
    </div>
  );
};
