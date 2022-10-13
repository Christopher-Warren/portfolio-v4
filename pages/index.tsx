import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Navbar } from "../components/navigation/Navbar";
import { DarkModeProvider } from "../components/providers/DarkModeProvider";

const Home: NextPage = () => {
  return (
    <DarkModeProvider>
      <Navbar />
      {/* <div>sd</div> */}
      {/* <div className="h-screen dark:bg-neutral-900 border-b-2 border-white"></div>
      <div className="h-screen dark:bg-neutral-900 border-b-2 border-white"></div>
      <div className="h-screen dark:bg-neutral-900 border-b-2 border-white"></div>
      <div className="h-screen dark:bg-neutral-900 border-b-2 border-white"></div> */}
    </DarkModeProvider>
  );
};

export default Home;
