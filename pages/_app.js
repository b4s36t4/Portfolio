import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import "../styles/globals.css";
import * as components from "../components/mdxComponents";
import dynamic from "next/dynamic";

const ReactTooltip = dynamic(() => import("react-tooltip"), { ssr: false });

function MyApp({ Component, pageProps }) {
  return (
    <MDXProvider components={{ Fold: components.Fold }}>
      <Component {...pageProps}>
        <main />
        <Head>
          <meta name="viewport"></meta>
        </Head>
        <ReactTooltip effect="solid" />
      </Component>
    </MDXProvider>
  );
}

export default MyApp;
