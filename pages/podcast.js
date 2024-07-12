import styles from ".././styles/podcast.module.css";
import { BsSoundwave } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
import Badge from "react-bootstrap/Badge";
import { IoMdPlay } from "react-icons/io";
import Head from "next/head";
const Podcast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://spotify81.p.rapidapi.com/tracks?ids=4WNcduiCmDNfmTEz7JvmLv",
  //       {
  //         params: {
  //           type: "multi",
  //           offset: 0,
  //           limit: 10,
  //           numberOfTopResults: 5,
  //         },
  //         headers: {
  //           "Content-Type": "application/json",
  //           "x-rapidapi-host": "spotify81.p.rapidapi.com",
  //           "x-rapidapi-key":
  //             "f1485176ebmsh6edd694ecf2baf6p11e410jsn0332186d9743",
  //         },
  //       }
  //     );
  //     console.log("==>", response);
  //     setData(response.data);
  //   } catch (err) {
  //     setError(err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const tr = [
    {
      id: "1",
      name: "Track 1",
      artist: "Artist 1",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "2",
      name: "Track 2",
      artist: "Artist 2",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "3",
      name: "Track 3",
      artist: "Artist 3",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "4",
      name: "Track 4",
      artist: "Artist 4",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "5",
      name: "Track 5",
      artist: "Artist 5",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "6",
      name: "Track 6",
      artist: "Artist 6",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "7",
      name: "Track 7",
      artist: "Artist 7",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "8",
      name: "Track 8",
      artist: "Artist 8",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "9",
      name: "Track 9",
      artist: "Artist 9",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "10",
      name: "Track 10",
      artist: "Artist 10",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "11",
      name: "Track 11",
      artist: "Artist 11",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "12",
      name: "Track 12",
      artist: "Artist 12",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "13",
      name: "Track 13",
      artist: "Artist 13",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "14",
      name: "Track 14",
      artist: "Artist 14",
      cover: "https://via.placeholder.com/150",
    },
    {
      id: "15",
      name: "Track 15",
      artist: "Artist 15",
      cover: "https://via.placeholder.com/150",
    },
  ];

  const [tracks, settracks] = useState(tr);

  return (
    <>
      <Head>
        <title>Nextupgrad</title>
        <meta name="title" content="Nextupgrad" />
        <meta name="googlebot" content="noindex" />
        <meta
          name="description"
          content="At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth"
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
          content="At NextUpgrad, our mission is to empower businesses and individuals by delivering cutting-edge software, website , and mobile app development solutions, coupled with innovative digital marketing strategies. We are committed to leveraging technology to enhance our clients' online presence, streamline their operations, and drive sustainable growth"
        />
        <meta
          property="twitter:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />
      </Head>
      <section className={styles.banner}>
        <div className={styles.topHeading}>
          <img src="/logo-2orange-1.png" alt="" />
          <span>PODCAST NETWORK</span>
        </div>
        <h2 className="text-center mt-5 text-white">
          {" "}
          <BsSoundwave className="" /> Listen.Learn.Grow <BsSoundwave />
        </h2>
      </section>
      <div style={{ backgroundColor: "#253342" }} className=" main">
        <section className="container">
          <Tabs className={styles.PodcastSidebarAndPage}>
            <TabList className="podcastSidebar">
              <Tab>All</Tab>
              <Tab>Leadership</Tab>
              <Tab>Marketing</Tab>
              <Tab>Sales</Tab>
              <Tab>Startups</Tab>
              <Tab>Customer Success</Tab>
            </TabList>

            <TabPanel>
              <div className={`${styles.topBanner} text-white`}>
                <Badge className={styles.pill}>Featured Episode</Badge>

                <div className={styles.innerDiv}>
                  <span className="pt-3">
                    <h2>The Ops Authority</h2>
                    <h4>
                      How Kara Barnes Designed Work She Loves After the DOO
                      Certification
                    </h4>
                    <p>
                      Certified DOO, Kara Barnes is interviewed to deep dive
                      deep into how the DOO Certification was the driving force
                      in her journey to designing a career she truly loves. She
                      gives a glimpse into her company, Backstage Ops, and her
                      approach to business operations. She dives into her
                      business shift from working on a retainer basis to running
                      an agency. Throughout our conversation, Kara continually
                      reflects on the profound influence that the Director of
                      Operations Certification has had on her career.
                    </p>
                  </span>
                  <img src="/abudabhi3.webp" alt="" />
                </div>
                <button className={`pt-1 px-4 pb-3 ${styles.listenNowBtn} `}>
                  <IoMdPlay />
                  Listen now
                </button>
              </div>
              <div className={styles.podcasts}>
                {tracks.map((item, index) => (
                  <div>
                    <img
                      src={
                        index % 2 == 0
                          ? "https://www.hubspot.com/hubfs/PodcastCovers23%20(28).png"
                          : "https://www.hubspot.com/hubfs/41-1.png"
                      }
                      alt=""
                    />
                    <h5 className="text-white text-bold mt-2 text-sm">
                      {item.name}
                    </h5>
                    <p className="text-white text-bold mt-2 text-sm">
                      {item.artist}
                    </p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${styles.topBanner} text-white`}>
                <Badge className={styles.pill}>Featured Episode</Badge>

                <div className={styles.innerDiv}>
                  <span className="pt-3">
                    <h2>The Ops Authority</h2>
                    <h4>
                      How Kara Barnes Designed Work She Loves After the DOO
                      Certification
                    </h4>
                    <p>
                      Certified DOO, Kara Barnes is interviewed to deep dive
                      deep into how the DOO Certification was the driving force
                      in her journey to designing a career she truly loves. She
                      gives a glimpse into her company, Backstage Ops, and her
                      approach to business operations. She dives into her
                      business shift from working on a retainer basis to running
                      an agency. Throughout our conversation, Kara continually
                      reflects on the profound influence that the Director of
                      Operations Certification has had on her career.
                    </p>
                  </span>
                  <img src="/abudabhi3.webp" alt="" />
                </div>
                <button className={`pt-1 px-4 pb-3 ${styles.listenNowBtn} `}>
                  <IoMdPlay />
                  Listen now
                </button>
              </div>
              <div className={styles.podcasts}>
                {tracks.map((item, index) => (
                  <div>
                    <img
                      src={
                        index % 2 == 0
                          ? "https://www.hubspot.com/hubfs/PodcastCovers23%20(28).png"
                          : "https://www.hubspot.com/hubfs/41-1.png"
                      }
                      alt=""
                    />
                    <h5 className="text-white text-bold mt-2 text-sm">
                      {item.name}
                    </h5>
                    <p className="text-white text-bold mt-2 text-sm">
                      {item.artist}
                    </p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${styles.topBanner} text-white`}>
                <Badge className={styles.pill}>Featured Episode</Badge>

                <div className={styles.innerDiv}>
                  <span className="pt-3">
                    <h2>The Ops Authority</h2>
                    <h4>
                      How Kara Barnes Designed Work She Loves After the DOO
                      Certification
                    </h4>
                    <p>
                      Certified DOO, Kara Barnes is interviewed to deep dive
                      deep into how the DOO Certification was the driving force
                      in her journey to designing a career she truly loves. She
                      gives a glimpse into her company, Backstage Ops, and her
                      approach to business operations. She dives into her
                      business shift from working on a retainer basis to running
                      an agency. Throughout our conversation, Kara continually
                      reflects on the profound influence that the Director of
                      Operations Certification has had on her career.
                    </p>
                  </span>
                  <img src="/abudabhi3.webp" alt="" />
                </div>
                <button className={`pt-1 px-4 pb-3 ${styles.listenNowBtn} `}>
                  <IoMdPlay />
                  Listen now
                </button>
              </div>
              <div className={styles.podcasts}>
                {tracks.map((item, index) => (
                  <div>
                    <img
                      src={
                        index % 2 == 0
                          ? "https://www.hubspot.com/hubfs/PodcastCovers23%20(28).png"
                          : "https://www.hubspot.com/hubfs/41-1.png"
                      }
                      alt=""
                    />
                    <h5 className="text-white text-bold mt-2 text-sm">
                      {item.name}
                    </h5>
                    <p className="text-white text-bold mt-2 text-sm">
                      {item.artist}
                    </p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${styles.topBanner} text-white`}>
                <Badge className={styles.pill}>Featured Episode</Badge>

                <div className={styles.innerDiv}>
                  <span className="pt-3">
                    <h2>The Ops Authority</h2>
                    <h4>
                      How Kara Barnes Designed Work She Loves After the DOO
                      Certification
                    </h4>
                    <p>
                      Certified DOO, Kara Barnes is interviewed to deep dive
                      deep into how the DOO Certification was the driving force
                      in her journey to designing a career she truly loves. She
                      gives a glimpse into her company, Backstage Ops, and her
                      approach to business operations. She dives into her
                      business shift from working on a retainer basis to running
                      an agency. Throughout our conversation, Kara continually
                      reflects on the profound influence that the Director of
                      Operations Certification has had on her career.
                    </p>
                  </span>
                  <img src="/abudabhi3.webp" alt="" />
                </div>
                <button className={`pt-1 px-4 pb-3 ${styles.listenNowBtn} `}>
                  <IoMdPlay />
                  Listen now
                </button>
              </div>
              <div className={styles.podcasts}>
                {tracks.map((item, index) => (
                  <div>
                    <img
                      src={
                        index % 2 == 0
                          ? "https://www.hubspot.com/hubfs/PodcastCovers23%20(28).png"
                          : "https://www.hubspot.com/hubfs/41-1.png"
                      }
                      alt=""
                    />
                    <h5 className="text-white text-bold mt-2 text-sm">
                      {item.name}
                    </h5>
                    <p className="text-white text-bold mt-2 text-sm">
                      {item.artist}
                    </p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${styles.topBanner} text-white`}>
                <Badge className={styles.pill}>Featured Episode</Badge>

                <div className={styles.innerDiv}>
                  <span className="pt-3">
                    <h2>The Ops Authority</h2>
                    <h4>
                      How Kara Barnes Designed Work She Loves After the DOO
                      Certification
                    </h4>
                    <p>
                      Certified DOO, Kara Barnes is interviewed to deep dive
                      deep into how the DOO Certification was the driving force
                      in her journey to designing a career she truly loves. She
                      gives a glimpse into her company, Backstage Ops, and her
                      approach to business operations. She dives into her
                      business shift from working on a retainer basis to running
                      an agency. Throughout our conversation, Kara continually
                      reflects on the profound influence that the Director of
                      Operations Certification has had on her career.
                    </p>
                  </span>
                  <img src="/abudabhi3.webp" alt="" />
                </div>
                <button className={`pt-1 px-4 pb-3 ${styles.listenNowBtn} `}>
                  <IoMdPlay />
                  Listen now
                </button>
              </div>
              <div className={styles.podcasts}>
                {tracks.map((item, index) => (
                  <div>
                    <img
                      src={
                        index % 2 == 0
                          ? "https://www.hubspot.com/hubfs/PodcastCovers23%20(28).png"
                          : "https://www.hubspot.com/hubfs/41-1.png"
                      }
                      alt=""
                    />
                    <h5 className="text-white text-bold mt-2 text-sm">
                      {item.name}
                    </h5>
                    <p className="text-white text-bold mt-2 text-sm">
                      {item.artist}
                    </p>
                  </div>
                ))}
              </div>
            </TabPanel>
            <TabPanel>
              <div className={`${styles.topBanner} text-white`}>
                <Badge className={styles.pill}>Featured Episode</Badge>

                <div className={styles.innerDiv}>
                  <span className="pt-3">
                    <h2>The Ops Authority</h2>
                    <h4>
                      How Kara Barnes Designed Work She Loves After the DOO
                      Certification
                    </h4>
                    <p>
                      Certified DOO, Kara Barnes is interviewed to deep dive
                      deep into how the DOO Certification was the driving force
                      in her journey to designing a career she truly loves. She
                      gives a glimpse into her company, Backstage Ops, and her
                      approach to business operations. She dives into her
                      business shift from working on a retainer basis to running
                      an agency. Throughout our conversation, Kara continually
                      reflects on the profound influence that the Director of
                      Operations Certification has had on her career.
                    </p>
                  </span>
                  <img src="/abudabhi3.webp" alt="" />
                </div>
                <button className={`pt-1 px-4 pb-3 ${styles.listenNowBtn} `}>
                  <IoMdPlay />
                  Listen now
                </button>
              </div>
              <div className={styles.podcasts}>
                {tracks.map((item, index) => (
                  <div>
                    <img
                      src={
                        index % 2 == 0
                          ? "https://www.hubspot.com/hubfs/PodcastCovers23%20(28).png"
                          : "https://www.hubspot.com/hubfs/41-1.png"
                      }
                      alt=""
                    />
                    <h5 className="text-white text-bold mt-2 text-sm">
                      {item.name}
                    </h5>
                    <p className="text-white text-bold mt-2 text-sm">
                      {item.artist}
                    </p>
                  </div>
                ))}
              </div>
            </TabPanel>
          </Tabs>
        </section>
      </div>
    </>
  );
};

export default Podcast;
