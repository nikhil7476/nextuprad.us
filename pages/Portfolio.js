import Link from "next/link";
import Head from "next/head";
const portfolio = () => {
  return (
    <>
      <Head>
        {/* Primary Meta Tags */}
        <title>Nextupgrad</title>
        <meta
          name="description"
          content="At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="nextupgrad.us" />
        <meta property="og:title" content="Nextupgrad web solutions" />
        <meta
          property="og:description"
          content="At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth"
        />
        <meta property="og:image" content="nextupgrad.us/logo-2orange-1.png" />

        {/* Twitter */}
        <meta
          property="twitter:card"
          content="nextupgrad.us/logo-2orange-1.png"
        />
        <meta property="twitter:url" content="nextupgrad.us" />
        <meta property="twitter:title" content="Nextupgrad web solutions" />
        <meta
          property="twitter:description"
          content="At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth"
        />
        <meta
          property="twitter:image"
          content="nextupgrad.us/logo-2orange-1.png"
        />

        {/* Viewport Meta Tag */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Favicon */}
        <link rel="icon" href="/logo-2orange-1.png" />

        <meta name="robots" content="all" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />
      </Head>
      <section id="con">
        <div className="con1">
          <span className="line" />
          <h1>PORTFOLIO</h1>
          <p>
            We prioritize your satisfaction above all else. Explore a curated
            selection of projects where we went above and beyond to <br />
            exceed our clients’ expectations. Discover why nearly 93% of our
            clients recommend us, and see how we can build a<br /> successful
            partnership with you.
          </p>
        </div>
        <div className="overlay" />
      </section>
      <section id="work">
        <div className="work1">
          <span className="line1" />
          <h1>Work Showcase</h1>
        </div>
      </section>
    </>
  );
};

export default portfolio;
