import Link from "next/link";
import Head from "next/head";
const blog = () => {
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
      <div className="blogMain">
        <div className="sec">
          <div className="blog-cat">
            <ul>
              <li>
                <Link href="#">Website Developement</Link>
              </li>
              <li>
                <Link href="#">Software Developement</Link>
              </li>
              <li>
                <Link href="#">Mobile App Developement</Link>
              </li>
              <li>
                <Link href="#">Digital Marketing</Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="sec-hd">
              <h1>BLOG</h1>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="Brandin.png" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        Branding and Digital Marketing Strategies for Small
                        Businesses.
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="Local-SEO.png" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        Local SEO Demystified Winning Strategies for Small
                        Business Growth.
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="Web-Design.jpg" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        Digital Marketing and Website Development – A Dream Team
                        Of Successful Business.
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="website_structure.png" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        Step-by-step guide for building the ultimate website
                        structure
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="blog4.png" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        5 Factors Slowing Down Your Website and Fixes
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 blog-search">
                <h2>Search Articles</h2>
                <form>
                  <input type="text" placeholder="Search..." />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
