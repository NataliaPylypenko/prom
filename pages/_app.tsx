import Head from "next/head";
import React from "react";
import { AppProps } from 'next/dist/next-server/lib/router/router';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
      <>
        <Head>
          <title>Main page</title>
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;700&display=swap"
                  rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
      </>
  );
}
