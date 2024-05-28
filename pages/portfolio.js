import Link from "next/link";
import Head from "next/head";
import LandingPageSlider from "@/components/LandingPageSlider";
const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portfolio - NextUpgrad USA</title>
        <meta name="title" content="Nextupgrad" />
        <meta
          name="description"
          content="Witness successful projects, highlighting our expertise and commitment to delivering impactful solutions. Discover the possibilities with our accomplished portfolio."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="Witness successful projects, highlighting our expertise and commitment to delivering impactful solutions. Discover the possibilities with our accomplished portfolio."
        />
        <meta
          property="og:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://nextupgrad.us/" />
        <meta property="twitter:title" content="Nextupgrad" />
        <meta
          property="twitter:description"
          content="Witness successful projects, highlighting our expertise and commitment to delivering impactful solutions. Discover the possibilities with our accomplished portfolio."
        />
        <meta
          property="twitter:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />
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
          <h2>Work Showcase</h2>
        </div>
      </section>
      <section className="my-5 container">
        <LandingPageSlider />
      </section>
    </>
  );
};

export default Portfolio;
