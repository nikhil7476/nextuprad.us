import { Html, Head, Main, NextScript } from "next/document";
import { GoogleTagManagerScript } from "@/components/googleAnalytics";
import GoogleTagManagerNoscript from "@/components/GoogleNoScript";
import GoogleTagManager from "@/components/AnalyticsTag";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <GoogleTagManagerScript gtmId="GTM-KVP3JR9B" />
      </Head>

      <body>
        <GoogleTagManager gtmId="G-NZ5VGKXPYG" />
        <GoogleTagManagerNoscript gtmId={"GTM-KVP3JR9B"} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
