import React from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/global.styles";
import theme from "styles/theme";
import Head from "next/head";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="theme-color" content="#2A88BE" />
        <link rel="shortcut icon" href="/icon-512.png" />
        <link rel="apple-touch-icon" href="/icon-512.png" />
      </Head>
      {/* <Script
        id="my-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${process.env.GTM}');`,
        }}
      ></Script> */}
      {/* <NextSeo
        title="IEDI"
        description="Conquiste seu certificado do Ensino Médio com as facilidades do EAD em no máximo 18 meses"
        canonical="https://eja.iedicursos.net.br/"
        openGraph={{
          url: "https://eja.iedicursos.net.br/",
          title: "IEDI",
          description:
            "Conquiste seu certificado do Ensino Médio com as facilidades do EAD em no máximo 18 meses",
          images: [
            {
              url: "/cover.png",
            },
          ],
          site_name: "IEDI",
          locale: "pt_BR",
        }}
        twitter={{
          handle: "@iedicursos",
          site: "@site",
          cardType: "summary_large_image",
        }}
      /> */}
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
