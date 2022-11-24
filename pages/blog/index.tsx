import { MainContainer } from "../../components/containers/MainContainer";
import BlogNavigation from "../../components/navigation/BlogNavigation";

import { GetStaticProps } from "next/types";

import prisma from "../../lib/prisma";
import { PostProps } from "../../@types/Post";

import Link from "next/link";
import { serializeData } from "../../utils/serializeData";
import { useSession } from "next-auth/react";

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

      {props.feed.map((post: PostProps) => {
        return (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <a>
              <div>
                <h2>author: {post.author.name}</h2>
                <p>title: {post.title} </p>
              </div>
            </a>
          </Link>
        );
      })}
    </MainContainer>
  );
};
export default Blog;
