import { Html, Head, Main, NextScript } from "next/document";

import { GoogleTagManager } from "@next/third-parties/google";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleTagManager gtmId="G-NZ5VGKXPYG" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
