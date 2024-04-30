import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function Layout({ children }) {
  const router = useRouter();
  const [count, setcount] = useState(0);

  useEffect(() => {}, [router.asPath]);
  return (
    <>
      <Header />
      {children}
      <Script src="/test.js" strategy="beforeInteractive" />
    </>
  );
}
