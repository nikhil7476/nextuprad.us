import Header from "./Header";
import Footer from "./Footer";
import Script from "next/script";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export function Layout({ children }) {
  const router = useRouter();
  const [toggle, settoggle] = useState(false);

  useEffect(() => {
    if (router.asPath == "/") {
      settoggle(true);
    } else {
      settoggle(false);
    }
  }, [router.asPath]);
  return (
    <>
      <Header />
      {children}
      <script src="/test.js"></script>
      <Footer />
    </>
  );
}
