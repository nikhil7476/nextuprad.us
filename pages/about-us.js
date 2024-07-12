import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect, useState, useRef } from "react";
import CountUp from "react-countup";
import AdminSlider from "@/components/AdminSlider";
import { motion } from "framer-motion";
import Head from "next/head";

const About = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const countUpRef = useRef(null);
  return (
    <>
      <Head>
        <title>About US - NextUpgrad USA</title>
        <meta name="title" content="Nextupgrad" />
        <meta
          name="description"
          content="Discover Nextupgrad USA - Your Partner in Digital Excellence. We bring innovation to the forefront, offering advanced solutions to your business needs.Nextupgrad delivers innovative solutions across industries. Hire dedicated developers or leverage our expertise for web, mobile, software, & marketing success.
          "
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="Discover Nextupgrad USA - Your Partner in Digital Excellence. We bring innovation to the forefront, offering advanced solutions to your business needs.Nextupgrad delivers innovative solutions across industries. Hire dedicated developers or leverage our expertise for web, mobile, software, & marketing success."
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
          content="Discover Nextupgrad USA - Your Partner in Digital Excellence. We bring innovation to the forefront, offering advanced solutions to your business needs.Nextupgrad delivers innovative solutions across industries. Hire dedicated developers or leverage our expertise for web, mobile, software, & marketing success."
        />
        <meta
          property="twitter:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />
      </Head>
      <main className="aboutusmain">
        <AdminSlider />
        {/* <div className="aboutusbanner">
          <h3>
            Welcome to NextUpgrad, Where Businesses Forge their Digital Destiny!
          </h3>
        </div> */}
        <div className="sec-1">
          <h1>About NextUpgrad USA</h1>
          {/*<hr className="solid" />*/}

          <div className="sec-1-1">
            <div className="sec-1-1-1">
              <img src="ceo.png" alt="Deepak Tandon" />
            </div>
            <div
              data-aos="zoom-in"
              data-aos-delay="150"
              data-aos-duration="1500"
              className="sec-1-1-2"
            >
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
          <h2>Our Community</h2>
           {/*<hr className="solid" />*/}

          <div className="sec-2-1">
            <div className="sec-2-1-1">
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
              <h3>60+</h3>
              <p className="mt-3">
                Expert Developers in
                <br />
                15 Innovative.
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
              <h3>60+</h3>
              <p className="mt-3">
                Digital Marketers in <br />
                10 Different Verticals.
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
              <h3>60+</h3>
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
              <h3>10+</h3>
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
              <h3>400+</h3>
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
              <h3>75+</h3>
              <p className="mt-3">Technology Certified Resources</p>
            </div>
          </div>
        </div>

        <div className="sec-3">
          <div className="container">
            <div className="sec-3-1">
              <div className="sec-3-1-1">
                <h2>Our Integrity</h2>  {/*<hr className="solid" />*/}
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
                  <h3>Customer-Centric Philosophy</h3>
                  <p>
                    {" "}
                    We always place the customer at the core of business
                    decisions and operations that form the foundation for their
                    growth.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/philosophy.png"
                    alt="Customer-Centric Philosophy"
                  />
                </div>
                <div className="col-md-6">
                  <img
                    src="/experience.png"
                    alt="Unparalleled Customer Experience"
                  />
                </div>
                <div className="col-md-6">
                  <h3>Unparalleled Customer Experience</h3>
                  <p>
                    Proactively addressing customer needs, actively listening to
                    concerns, and providing solutions define our commitment to
                    exceptional customer experiences.
                  </p>
                </div>
                <div className="col-md-6">
                  <h3>Driving Innovation and Adaptability</h3>
                  <p>
                    Staying at the forefront of technological advancements, we
                    consistently explore new ideas and technologies to handle
                    projects with innovation and adaptability.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/innovation.png"
                    className="invoasionbox"
                    alt="Driving Innovation and Adaptability"
                  />
                </div>
                <div className="col-md-6">
                  <img src="/agile.png" alt="Executing Agile Development" />
                </div>
                <div className="col-md-6">
                  <h3>Executing Agile Development</h3>
                  <p>
                    Embracing agile methodologies enhances collaboration,
                    flexibility, and responsiveness to change in our project
                    execution.
                  </p>
                </div>
                <div className="col-md-6">
                  <h3>Unprecedented client Satisfaction</h3>
                  <p>
                    Our 24×7 real-time communication system ensures prompt
                    responses to customer inquiries through various channels,
                    reinforcing our commitment to unparalleled client
                    satisfaction.
                  </p>
                </div>
                <div className="col-md-6">
                  <img
                    src="/satisfaction.png"
                    alt="Unprecedented client Satisfaction"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-4">
          <div className="container">
            <div className="row">
              <div className="col-md-6 certi">
                <h2>Certifications</h2>
                {/*<hr className="solid" />*/}
              </div>
              <div className="col-md-6">
                <p>
                  We’ve achieved a lot because we’ve worked really hard and
                  stayed committed to being excellent. Our accomplishments show
                  how dedicated we are to doing our best.
                </p>
              </div>

              <ul>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <img src="/hubspot.png" className="hubspot" alt="hubspot" />
                  <h3>Certified Marketing Expert</h3>
                </motion.li>

                <motion.li whileHover={{ scale: 1.1 }}>
                  <img src="/adobe.png" className="adobe" alt="adobe" />
                  <h3>Adobe Certified Professional</h3>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <img
                    src="/Hubspot-Agency.png"
                    className="agency"
                    alt="HubSpot Partner"
                  />
                  <h3>Leading HubSpot Partner</h3>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <img
                    src="/pmp.png"
                    className="pmplogo"
                    alt="Project Management Professional"
                  />
                  <h3>Project Management Professional</h3>
                </motion.li>
              </ul>
            </div>
          </div>
        </div>

        <div className="sec-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  Looking for a committed partnership to boost your business?
                </h2>
                <Link href="/contact-us">Call Us Now</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default About;
