import Link from "next/link";
import Head from "next/head";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const projects = [
    { name: "Smart Help", type: "Ecommerce" },
    { name: "Task Manager Pro", type: "Productivity" },
    { name: "Travel Buddy", type: "Lifestyle" },
    { name: "FitTrack", type: "Lifestyle" },
    { name: "EduLearn", type: "Education" },
    { name: "GreenGrocer", type: "Ecommerce" },
    { name: "PhotoGallery", type: "Lifestyle" },
    { name: "NewsFlash", type: "Lifestyle" },
    { name: "BudgetPlanner", type: "Finance" },
    { name: "PetCare", type: "Lifestyle" },
    { name: "HomeCook", type: "Entertainment" },
    { name: "GardenGurus", type: "Lifestyle" },
    { name: "MovieFinder", type: "Entertainment" },
    { name: "MusicStream", type: "Entertainment" },
    { name: "CodeCollab", type: "Education" },
    { name: "WeatherWatch", type: "Education" },
    { name: "CryptoTracker", type: "Finance" },
    { name: "LanguageMaster", type: "Education" },
    { name: "RecipeBox", type: "Entertainment" },
    { name: "ArtGallery", type: "Entertainment" },
    { name: "DailyQuotes", type: "Lifestyle" },
  ];

  const projectTypes = [...new Set(projects.map((project) => project.type))];
  const [tabTitle, setTabTitle] = useState(projectTypes);
  const [data, setData] = useState(projects);

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
        <div className="work1 text-center">
          <h2>Work Showcase</h2>
        </div>
      </section>
      {/* <section className="my-5 container">
        <LandingPageSlider />
      </section> */}
      <section className="container my-5">
        <Tabs>
          <TabList>
            {tabTitle.map((item, index) => (
              <Tab key={index}>{item}</Tab>
            ))}
          </TabList>

          {tabTitle.map((type, index) => (
            <TabPanel key={index}>
              <Row>
                {data
                  .filter((project) => project.type === type)
                  .map((filteredProject, index1) => (
                    <Col key={index1} md={4} className="mb-4">
                      <Card>
                        <Card.Img
                          variant="top"
                          src="https://via.placeholder.com/150"
                          alt={filteredProject.name}
                        />
                        <Card.Body>
                          <Card.Title>{filteredProject.name}</Card.Title>
                        </Card.Body>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </TabPanel>
          ))}
        </Tabs>
      </section>
    </>
  );
};

export default Portfolio;
