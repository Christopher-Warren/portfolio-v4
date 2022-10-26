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

const arr = ["", "", "", ""];

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
          time.
        </p>
        <div className="flex justify-between">
          <TextInput placeholder="E mail address" />
          <button className="ml-4 rounded bg-neutral-700 px-4 py-2 text-sm text-white">
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
          <span className="dark:text-neutral-100">Projects</span>
        </div>
        {/* project item */}
        {arr.map((_, index) => {
          return (
            <div
              key={index}
              className="my-4 flex items-center justify-between text-sm"
            >
              <div className="mr-4 h-10 w-10 rounded-full bg-neutral-700"></div>
              <div className="flex-1">
                <p className="text-base">Easydash</p>
                <span className="text-neutral-400">Fullstack</span>
              </div>
              <p className="self-end text-neutral-500">react, node</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
