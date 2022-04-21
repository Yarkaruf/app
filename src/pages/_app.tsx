import React from "react";
import { AppProps } from "next/app";
import "shared/ui/core/scss/style.scss";

import { Layout } from "shared/ui/layout";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Medialand - хостинг и IT-инфраструктура для проектов любого масштаба</title>
      <meta
        name="description"
        content="Медиа Лэнд предлагает в аренду услуги хостинга и комлексные решения для IT-инфраструктуры вашего бизнеса."
      />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </>
);

export default MyApp;
