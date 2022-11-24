// Header.tsx
import React from "react";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faAdd, faList } from "@fortawesome/free-solid-svg-icons";

const Header: React.FC = () => {
  return (
    <div className="w-full  font-medium dark:text-green-300">
      <Link href="/blog/create-post">
        <a className="mr-6 transition-opacity hover:opacity-80  dark:hover:text-green-400">
          <FontAwesomeIcon className="mr-2" icon={faAdd} />
          New post
        </a>
      </Link>
      <Link href="/blog/drafts">
        <a className=" transition-opacity hover:opacity-80  dark:hover:text-green-400">
          <FontAwesomeIcon className="mr-2" icon={faList} />
          My drafts
        </a>
      </Link>
    </div>
  );
};

export default Header;
