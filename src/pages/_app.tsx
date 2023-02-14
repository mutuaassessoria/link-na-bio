import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global.styles";
import theme from "styles/theme";
import Head from "next/head";
import { NextSeo } from "next-seo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#2A88BE" />
        <link rel="shortcut icon" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
      </Head>
      <NextSeo
        title="Mútua Assessoria"
        description="Nosso propósito é transformar sua empresa em um negócio de sucesso."
        canonical="https://bio.mutuaassessoria.com"
        openGraph={{
          url: "https://bio.mutuaassessoria.com",
          title: "Mútua Assessoria",
          description:
            "Nosso propósito é transformar sua empresa em um negócio de sucesso.",
          images: [
            {
              url: "/cover.png",
            },
          ],
          site_name: "Mútua Assessoria",
          locale: "pt_BR",
        }}
        twitter={{
          handle: "@mutua.assessoria",
          site: "@site",
          cardType: "summary_large_image",
        }}
      />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
