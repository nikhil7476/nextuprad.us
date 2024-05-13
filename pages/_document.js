import { Html, Head, Main, NextScript } from "next/document";

import { GoogleTagManager } from "@next/third-parties/google";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleTagManager gtmId="GTM-KVP3JR9B" />
      </Head>
      <body>
        <Main />
        <NextScript />
        <GoogleTagManager gtmId="GTM-KVP3JR9B" />
      </body>
    </Html>
  );
}
