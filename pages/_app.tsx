import "../styles/globals.css";
import type { AppProps } from "next/app";

import { SessionProvider } from "next-auth/react";

import { config as faConfig } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";

import { Session } from "next-auth";
import { ThemeContextProvider } from "../hooks/useTheme";

faConfig.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps<{ session: Session }>) {
  return (
    <ThemeContextProvider>
      <SessionProvider session={pageProps.session}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </ThemeContextProvider>
  );
}

export default MyApp;
