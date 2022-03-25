import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head'
import React, { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Fragment>
    <Head>
      <title>MyTop</title>
      <link key={2} rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp