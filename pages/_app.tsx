import { AppProps } from 'next/app';
import '../styles/globals.css';
import Head from 'next/head'
import React, { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return <Fragment>
    <Head>
      <title>MyTop</title>
      <link key={2} rel="icon" href="/favicon.ico" />
    </Head>
    <Component {...pageProps} />
  </Fragment>
}

export default MyApp