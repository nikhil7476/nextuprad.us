import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import AdminSlider from "@/components/AdminSlider";
import Head from "next/head";
const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const countUpRef = useRef(null);
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
      <main className="aboutusmain">
        <AdminSlider />
        {/* <div className="aboutusbanner">
          <h3>
            Welcome to NextUpgrad, Where Businesses Forge their Digital Destiny!
          </h3>
        </div> */}
        <div className="sec-1">
          <hr className="solid" />
          <h1>About NextUpgrad USA</h1>
          <div className="sec-1-1">
            <div className="sec-1-1-1">
              <img src="ceo.png" alt="ceo-pic" />
            </div>
            <div className="sec-1-1-2">
              <p>
                A decade ago, <strong>Deepak Tandon</strong>, aka Mac Robinson,
                envisioned “<strong>NextUpgrad</strong>” as a response to the
                pitfalls of customer experience in the US IT market. Starting
                his journey in 2010, he witnessed the industry’s shortcomings
                firsthand. Fueled by a commitment to elevate expectations,
                Deepak turned his dream into reality. In just 3+ years, he
                nurtured “NextUpgrad” from a team of 3 to a family of 100+,
                treating it like his own child.
              </p>
              <p>
                Today, “<strong>NextUpgrad</strong>” is more than a tech
                solution provider—it’s a guide for businesses. Beyond crafting
                digital presences, the company is a beacon for effective
                marketing strategies, ensuring clients not only thrive online
                but see a surge in sales. The story of “
                <strong>NextUpgrad</strong>” is one of resilience, growth, and a
                commitment to transforming challenges into opportunities.
              </p>
            </div>
          </div>
        </div>
        <div className="sec-2">
          <hr className="solid" />
          <h2>Our Community</h2>
          <div className="sec-2-1">
            <div className="sec-2-1-1" ref={ref}>
              {inView && (
                <CountUp
                  className="homeCountup "
                  start={0}
                  end={60}
                  duration={2.4}
                  ref={countUpRef}
                  redraw={true}
                  suffix=" +"
                />
              )}

              <p className="mt-3">
                Expert Developers in
                <br />
                15
                <br />
                Innovative.
              </p>
            </div>
            <div className="sec-2-1-2">
              {inView && (
                <CountUp
                  className="homeCountup "
                  start={0}
                  end={60}
                  duration={2.4}
                  ref={countUpRef}
                  redraw={true}
                  suffix=" +"
                />
              )}
              <p className="mt-3">
                Digital Marketers in
                <br />
                10
                <br />
                Different Verticals.
              </p>
            </div>
            <div className="sec-2-1-3">
              {inView && (
                <CountUp
                  className="homeCountup "
                  start={0}
                  end={60}
                  duration={2.4}
                  ref={countUpRef}
                  redraw={true}
                  suffix=" +"
                />
              )}
              <p className="mt-3">
                Customer Served in
                <br />
                5+
                <br />
                Countries.
              </p>
            </div>
          </div>
          <div className="sec-2-2">
            <div className="sec-2-2-1">
              {inView && (
                <CountUp
                  className="homeCountup "
                  start={0}
                  end={10}
                  duration={2.4}
                  ref={countUpRef}
                  redraw={true}
                  suffix=" +"
                />
              )}
              <p className="mt-3">Quality Assurance Resources</p>
            </div>
            <div className="sec-2-2-2">
              {inView && (
                <CountUp
                  className="homeCountup "
                  start={0}
                  end={400}
                  duration={2.4}
                  ref={countUpRef}
                  redraw={true}
                  suffix=" +"
                />
              )}
              <p className="mt-3">Client Satisfied</p>
            </div>
            <div className="sec-2-2-3">
              {inView && (
                <CountUp
                  className="homeCountup "
                  start={0}
                  end={75}
                  duration={2.4}
                  ref={countUpRef}
                  redraw={true}
                  suffix=" +"
                />
              )}
              <p className="mt-3">Technology Certified Resources</p>
            </div>
          </div>
        </div>
        <div className="sec-3">
          <div className="container">
            <div className="sec-3-1">
              <div className="sec-3-1-1">
                <hr className="solid" />
                <h2>Our Integrity</h2>
              </div>
              <div className="sec-3-1-2">
                <p>
                  NextUpgrad boasts a robust presence in the US market,
                  recognized for its unwavering integrity and exemplary work
                  ethics. As a result, it stands out as a reliable, promising,
                  and unique brand—an ideal long-term technology partner.
                </p>
              </div>
            </div>
            <div className="custmer-detail">
              <div className="row">
                <div className="col-md-6">
                  <h2>Customer-Centric Philosophy</h2>
                  <p>
                    {" "}
                    We always place the customer at the core of business
                    decisions and operations that form the foundation for their
                    growth.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src="/philosophy.png" alt="image" />
                </div>
                <div className="col-md-6">
                  <img src="/experience.png" alt="image" />
                </div>
                <div className="col-md-6">
                  <h2>Unparalleled Customer Experience</h2>
                  <p>
                    Proactively addressing customer needs, actively listening to
                    concerns, and providing solutions define our commitment to
                    exceptional customer experiences.
                  </p>
                </div>
                <div className="col-md-6">
                  <h2>Driving Innovation and Adaptability</h2>
                  <p>
                    Staying at the forefront of technological advancements, we
                    consistently explore new ideas and technologies to handle
                    projects with innovation and adaptability.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src="/innovation.png" alt="image" />
                </div>
                <div className="col-md-6">
                  <img src="/agile.png" alt="image" />
                </div>
                <div className="col-md-6">
                  <h2>Executing Agile Development</h2>
                  <p>
                    Embracing agile methodologies enhances collaboration,
                    flexibility, and responsiveness to change in our project
                    execution.
                  </p>
                </div>
                <div className="col-md-6">
                  <h2>Unprecedented client Satisfaction</h2>
                  <p>
                    Our 24×7 real-time communication system ensures prompt
                    responses to customer inquiries through various channels,
                    reinforcing our commitment to unparalleled client
                    satisfaction.
                  </p>
                </div>
                <div className="col-md-6">
                  <img src="/satisfaction.png" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-4">
          <div class="container">
            <div class="row">
              <div className="col-md-6">
                <hr className="solid" />
                <h2>Certifications</h2>
              </div>
              <div className="col-md-6">
                <p>
                  We’ve achieved a lot because we’ve worked really hard and
                  stayed committed to being excellent. Our accomplishments show
                  how dedicated we are to doing our best.
                </p>
              </div>

              <ul>
                <li>
                  <img
                    src="/hubspot.png"
                    className="hubsport"
                    alt="hubspot-logo"
                  />
                  <h2>Certified Marketing Expert</h2>
                </li>
                <li>
                  <img src="/adobe.png" className="adobe" alt="adobe-logo" />
                  <h2>Adobe Certified Professional</h2>
                </li>
                <li>
                  <img
                    src="/Hubspot-Agency.png"
                    className="agency"
                    alt="hubspot-agency-logo"
                  />
                  <h2>Leading HubSpot Partner</h2>
                </li>
                <li>
                  <img src="/pmp.png" className="pmplogo" alt="pmp-logo" />
                  <h2>Project Management Professional</h2>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sec-5">
          <div class="container">
            <div class="row">
              <div className="col-md-12">
                <h2>
                  Looking for a committed partnership to boost your business?
                </h2>
                <Link href="#">Call Us Now</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
