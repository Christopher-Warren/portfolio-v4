// Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, signIn, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  return (
    <div className="w-full">
      <Link href="/blog/create-post">
        <a className=" text-lg font-medium text-green-400 transition-opacity hover:opacity-80">
          New post
        </a>
      </Link>
      <Link href="/blog/drafts">
        <a className="ml-6 text-lg font-medium text-green-400 transition-opacity hover:opacity-80">
          My drafts
        </a>
      </Link>
    </div>
  );
};

export default Header;
