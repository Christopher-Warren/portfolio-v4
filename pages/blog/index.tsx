import { MainContainer } from "../../components/containers/MainContainer";
import BlogNavigation from "../../components/navigation/BlogNavigation";

import { GetStaticProps } from "next/types";

import prisma from "../../lib/prisma";
import { PostProps } from "../../@types/Post";

import Link from "next/link";
import { serializeData } from "../../utils/serializeData";
import { useSession } from "next-auth/react";
import { readingTime } from "../../utils/readingTime";

import Image from "next/image";
import { dateToString } from "../../utils/date";
import TextInput from "../../components/inputs/TextInput";

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return {
    props: { feed: serializeData(feed) },
    revalidate: 10,
  };
};

const tags = ["#react", "#nextjs"];

const Blog = (props: any) => {
  const { data: session } = useSession();

  return (
    <MainContainer>
      {session && <BlogNavigation />}

      <div className="w-fit max-w-2xl">
        <h1 className="mt-6  text-4xl font-semibold md:leading-snug">
          {`Recent Articles`}
        </h1>
        {/* <p className="mt-6 text-base leading-7 text-neutral-500 dark:text-neutral-400 ">
          {`I've worked on many projects throughout the past few years but these
            are the ones that I'm most proud of. Most of them are actively
            deployed and accompanied by public repos, so feel free to check them
            out.`}
        </p> */}

        {/* connect icons */}

        {/* <button className="mt-6 bg-gradient-to-tr text-white duration-200 from-emerald-500 via-teal-500 to-green-500 shadow-lg hover:shadow-none  shadow-teal-700 rounded-md px-4 py-2">
            Download CV
          </button> */}
      </div>
      <div className="my-3 h-px w-full bg-neutral-700" />
      <div className="mt-10 grid grid-cols-1 gap-10 gap-y-10 md:grid-cols-2">
        {props.feed.map((post: PostProps, index: number) => {
          const timeToRead = readingTime(post.content);

          return (
            <div
              className="flex flex-col  rounded-lg bg-neutral-100 dark:bg-neutral-800 sm:flex-row"
              key={post.id}
            >
              {/* Left image */}
              <Link
                className="overflow-hidden"
                href={`/blog/draft/${post.slug}`}
              >
                <a className="relative h-36 w-full overflow-hidden rounded-t-lg sm:h-full sm:w-2/5 sm:rounded-l-lg sm:rounded-tr-none">
                  <Image
                    className="overflow-hidden"
                    alt="placeholder"
                    layout="fill"
                    objectFit="cover"
                    src={"/150x250.png"}
                  />
                </a>
              </Link>

              {/* right text */}
              <div className="relative flex w-full flex-col justify-between p-4">
                <Link href={`/blog/${post.slug}`}>
                  <a>
                    <h1 className="mb-2 text-xl font-semibold">{post.title}</h1>
                  </a>
                </Link>
                <p className="mb-4 min-h-[80px] flex-1 text-sm text-neutral-500 dark:text-neutral-400">
                  {post.preview}
                </p>
                <div className="">
                  <div>
                    <p className="text-sm">{post.author.name}</p>
                    <div className=" mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {dateToString(post.createdAt)}
                      <div className="mx-2 inline text-xs">•</div> {timeToRead}{" "}
                      min read
                    </div>
                  </div>
                </div>
                {/*  */}
                {/* <div className="absolute -bottom-2 right-0 z-10 mx-3 align-middle text-xs ">
                  {tags.map((t: any) => {
                    return (
                      <span
                        className="rounded bg-neutral-700 px-1.5 py-0.5 text-neutral-300 odd:mr-3"
                        key={t}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div> */}
              </div>
            </div>
          );
        })}
      </div>
    </MainContainer>
  );
};
export default Blog;
