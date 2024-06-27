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
        
        {/* <!-- Start of HubSpot Embed Code --> */}
        <script type="text/javascript" id="hs-script-loader" async defer src="https://js.hs-scripts.com/45714484.js"></script>
        {/* <!-- End of HubSpot Embed Code --> */}
      </body>
    </Html>
  );
}
