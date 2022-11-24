// Header.tsx
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signOut, signIn, useSession } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGit, faGithub } from "@fortawesome/free-brands-svg-icons";

const Header: React.FC = () => {
  const router = useRouter();

  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className="left">
      <Link href="/blog">
        <a className="bold" data-active={isActive("/")}>
          Feed
        </a>
      </Link>
    </div>
  );

  return (
    <div className="flex justify-between">
      {session ? (
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
      ) : (
        <button
          className="font-lg rounded bg-neutral-600 px-3 py-1.5 text-neutral-100  dark:bg-neutral-700/80"
          onClick={() => signIn("github").catch((err) => console.error(err))}
        >
          <FontAwesomeIcon className="mr-3" icon={faGithub} />
          Login
        </button>
      )}
      <div>
        <Link href="/blog/create-post">
          <button>
            <a>New post</a>
          </button>
        </Link>
        <Link href="/blog/drafts">
          <a data-active={isActive("/drafts")}>My drafts</a>
        </Link>
      </div>
    </div>
  );
};

export default Header;
