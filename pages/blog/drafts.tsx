// pages/drafts.tsx

import React from "react";
import { GetServerSideProps } from "next";
import { useSession, getSession } from "next-auth/react";
import { unstable_getServerSession } from "next-auth/next";

import Link from "next/link";

// import Post, { PostProps } from "../../components/Post";
import prisma from "../../lib/prisma";
import { MainContainer } from "../../components/containers/MainContainer";
import { PostProps } from "../../@types/Post";
import { serializeData } from "../../utils/serializeData";
import { AuthOptions } from "../api/auth/[...nextauth]";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  // const session = await unstable_getServerSession(req, res, AuthOptions);

  // if (!session) {
  //   return { props: { drafts: [] } };
  // }

  const drafts = await prisma.post.findMany({
    where: {
      author: { email: "chrisalmith@gmail.com" },
      published: false,
    },
    include: {
      author: {
        select: { name: true, email: true },
      },
    },
  });

  return {
    props: { drafts: serializeData(drafts) },
  };
};

type Props = {
  drafts: PostProps[];
};

const Drafts: React.FC<Props> = (props) => {
  const { data: session } = useSession();

  if (!session) {
    return (
      <MainContainer>
        <h1>My Drafts</h1>
        <div>You need to be authenticated to view this page.</div>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <div className="page">
        <h1>My Drafts</h1>
        <main>
          {props.drafts.map((post) => (
            <Link href={`/blog/draft/${post.slug}`} key={post.id}>
              <a>
                <div className="">
                  <div className="flex">
                    <div className="">{post.title}</div>
                    <div className="">{post.author?.name}</div>
                    <div className="">{post.content}</div>
                    <div className=""></div>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: var(--geist-background);
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </MainContainer>
  );
};

export default Drafts;
