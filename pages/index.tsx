import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { MainContainer } from "../components/containers/MainContainer";
import { Hero, ImagesBreak, Info, RecentArticles } from "../components/home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Christopher Warren - Full stack developer</title>
      </Head>

      <MainContainer className="">
        <Hero />
        <ImagesBreak />

        <div className="mt-32 lg:flex gap-6 pb-32 ">
          <RecentArticles />
          <Info />
        </div>
      </MainContainer>
    </>
  );
};

export default Home;
