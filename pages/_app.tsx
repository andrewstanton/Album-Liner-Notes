import type { AppProps } from "next/app";

// Used Just For Google Font Import
import "./_app.css";

const MyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  return <Component {...pageProps} />;
};
export default MyApp;
