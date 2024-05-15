import styles from ".././styles/podcast.module.css";
import { BsSoundwave } from "react-icons/bs";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import axios from "axios";
const Podcast = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://spotify23.p.rapidapi.com/browse_all/",
        {
          params: {
            type: "multi",
            offset: 0,
            limit: 10,
            numberOfTopResults: 5,
          },
          headers: {
            "Content-Type": "application/json",
            "x-rapidapi-host": "spotify23.p.rapidapi.com",
            "x-rapidapi-key":
              "f1485176ebmsh6edd694ecf2baf6p11e410jsn0332186d9743",
          },
        }
      );
      console.log("==>", response);
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className={styles.banner}>
        <div className={styles.topHeading}>
          <img src="/logo-2orange-1.png" alt="" />
          <span>PODCAST NETWORK</span>
        </div>
        <h2 className="text-center mt-4 text-white">
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
              <h1>pannel 1</h1>
            </TabPanel>
            <TabPanel>
              <h1>panel 2</h1>
            </TabPanel>
            <TabPanel>
              <h1>panel 3</h1>
            </TabPanel>
            <TabPanel>
              <h1>panel 4</h1>
            </TabPanel>
            <TabPanel>
              <h1>panel 5</h1>
            </TabPanel>
            <TabPanel>
              <h1>panel 6</h1>
            </TabPanel>
          </Tabs>
        </section>
      </div>
    </>
  );
};

export default Podcast;
