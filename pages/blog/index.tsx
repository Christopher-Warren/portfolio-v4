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

const Blog = (props: any) => {
  const { data: session } = useSession();
  // return (
  //   <div className="rounded " key={post.id}>
  //     <Link href={`/blog/${post.slug}`}>
  //       <a>
  //         {/* container */}
  //         <div className="flex flex-col  border">
  //           <div className="">
  //             <Image
  //               alt="placeholder"
  //               layout="responsive"
  //               width={400}
  //               height={200}
  //               objectFit="cover"
  //               src={"/150x250.png"}
  //             />
  //           </div>

  //           <div className="flex flex-col p-4">
  //             <h2 className="text-xl">
  //               Build a React dashboard with Tremor
  //             </h2>
  //             <p className="my-5 h-full min-h-[96px] text-neutral-400">
  //               {post.content}
  //             </p>
  //             <div className="justify-self-end text-xs">
  //               <p className="text-sm">{post.author.name}</p>
  //               <p className="text-neutral-400">
  //                 {dateToString(post.createdAt)}{" "}
  //                 <div className="mx-2 inline">•</div>{" "}
  //                 {readingTime(content)} min read
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </a>
  //     </Link>
  //   </div>
  // );

  return (
    <MainContainer>
      {session && <BlogNavigation />}

      <div className="max-w-2xl ">
        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl md:leading-snug ">
          {`Things I've built to show the world my web dev chops.`}
        </h1>
        <p className="mt-6 text-base leading-7 text-neutral-500 dark:text-neutral-400 ">
          {`I've worked on many projects throughout the past few years but these
            are the ones that I'm most proud of. Most of them are actively
            deployed and accompanied by public repos, so feel free to check them
            out.`}
        </p>

        {/* connect icons */}

        {/* <button className="mt-6 bg-gradient-to-tr text-white duration-200 from-emerald-500 via-teal-500 to-green-500 shadow-lg hover:shadow-none  shadow-teal-700 rounded-md px-4 py-2">
            Download CV
          </button> */}
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-2">
        {props.feed.map((post: PostProps) => {
          const { content } = post;

          const timeToRead = readingTime(content);

          return (
            <div
              className="overflow-hidden rounded-xl bg-neutral-800"
              key={post.id}
            >
              <div className="grid-cols-6 md:grid">
                <div className="relative col-span-2 hidden md:block">
                  <Image
                    className=""
                    alt="placeholder"
                    layout="fill"
                    objectFit="cover"
                    src={"/150x250.png"}
                  />
                </div>

                <div className="relative block h-[250px]  md:hidden">
                  <Image
                    className=""
                    alt="placeholder"
                    layout="fill"
                    objectFit="cover"
                    src={"/150x250.png"}
                  />
                </div>

                <div className="col-span-4 flex flex-col p-4">
                  <h2 className="text-xl font-medium">
                    <Link href={`/blog/${post.slug}`}>
                      <a>{post.title}</a>
                    </Link>
                  </h2>
                  <p className="my-5 h-full text-sm text-neutral-400">
                    {post.content}
                  </p>
                  <div className="justify-self-end text-xs">
                    <p className="text-sm">{post.author.name}</p>
                    <p className="text-neutral-400">
                      {dateToString(post.createdAt)}{" "}
                      <div className="mx-2 inline">•</div>{" "}
                      {readingTime(content)} min read
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </MainContainer>
  );
};
export default Blog;
