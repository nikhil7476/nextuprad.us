import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Header2 from "./Header2";

export function Layout({ children }) {
  const router = useRouter();

  useEffect(() => {}, [router.asPath]);
  return (
    <>
      <Header />

      <Head>
        <link rel="icon" href="/logo-2orange-1.png" />
      </Head>
      {children}
      <Script src="/test.js" strategy="beforeInteractive" />
      <Footer />
    </>
  );
}
