import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManagerScript } from "@/components/googleAnalytics";
import GoogleTagManagerNoscript from "@/components/GoogleNoScript";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleTagManagerScript gtmId="GTM-KVP3JR9B" />
      </Head>
      <body>
        <GoogleTagManagerNoscript gtmId={"GTM-KVP3JR9B"} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
