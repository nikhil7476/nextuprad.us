import Link from "next/link";
import Head from "next/head";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import { Card, Row, Col } from "react-bootstrap";

const Portfolio = () => {
  const projects = [
    {
      name: "Smart Help",
      type: "Ecommerce",
      image: "https://via.placeholder.com/150?text=Smart+Help",
    },
    {
      name: "Task Manager Pro",
      type: "Productivity",
      image: "https://via.placeholder.com/150?text=Task+Manager+Pro",
    },
    {
      name: "Travel Buddy",
      type: "Lifestyle",
      image: "https://via.placeholder.com/150?text=Travel+Buddy",
    },
    {
      name: "FitTrack",
      type: "Lifestyle",
      image: "https://via.placeholder.com/150?text=FitTrack",
    },
    {
      name: "EduLearn",
      type: "Education",
      image: "https://via.placeholder.com/150?text=EduLearn",
    },
    {
      name: "GreenGrocer",
      type: "Ecommerce",
      image: "https://via.placeholder.com/150?text=GreenGrocer",
    },
    {
      name: "PhotoGallery",
      type: "Lifestyle",
      image: "https://via.placeholder.com/150?text=PhotoGallery",
    },
    {
      name: "NewsFlash",
      type: "Lifestyle",
      image: "https://via.placeholder.com/150?text=NewsFlash",
    },
    {
      name: "BudgetPlanner",
      type: "Finance",
      image: "https://via.placeholder.com/150?text=BudgetPlanner",
    },
    {
      name: "PetCare",
      type: "Lifestyle",
      image: "https://via.placeholder.com/150?text=PetCare",
    },
    {
      name: "HomeCook",
      type: "Entertainment",
      image: "https://via.placeholder.com/150?text=HomeCook",
    },
    {
      name: "GardenGurus",
      type: "Lifestyle",
      image: "https://via.placeholder.com/150?text=GardenGurus",
    },
    {
      name: "MovieFinder",
      type: "Entertainment",
      image: "https://via.placeholder.com/150?text=MovieFinder",
    },
    {
      name: "MusicStream",
      type: "Entertainment",
      image: "https://via.placeholder.com/150?text=MusicStream",
    },
    {
      name: "CodeCollab",
      type: "Education",
      image: "https://via.placeholder.com/150?text=CodeCollab",
    },
    {
      name: "WeatherWatch",
      type: "Education",
      image: "https://via.placeholder.com/150?text=WeatherWatch",
    },
    {
      name: "CryptoTracker",
      type: "Finance",
      image: "https://via.placeholder.com/150?text=CryptoTracker",
    },
    {
      name: "LanguageMaster",
      type: "Education",
      image: "https://via.placeholder.com/150?text=LanguageMaster",
    },
    {
      name: "RecipeBox",
      type: "Entertainment",
      image: "https://via.placeholder.com/150?text=RecipeBox",
    },
    {
      name: "ArtGallery",
      type: "Entertainment",
      image: "https://via.placeholder.com/150?text=ArtGallery",
    },
    {
      name: "DailyQuotes",
      type: "Lifestyle",
      image: "https://via.placeholder.com/150?text=DailyQuotes",
    },
  ];

  const projectTypes = [...new Set(projects.map((project) => project.type))];
  const [tabTitle, setTabTitle] = useState(projectTypes);
  const [data, setData] = useState(projects);

  return (
    <>
      <Head>
        <title>NextUpgrad USA Portfolio</title>
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
          property="twitter:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />
         <meta
          property="NextUpgrad USA Portfolio"
          content="Witness successful projects, highlighting our expertise and commitment to delivering impactful solutions. Discover the possibilities with our accomplished portfolio"
        />
      </Head>
      <section id="con">
        <div className="con1">
          <span className="line" />
          <h1>Portfolio</h1>
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
      {/* <section className="container my-5">
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
                          src={filteredProject.image}
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
      </section> */}
      <section className="container pro-img">
        <div className="row">
          <div className="col-md-3 img-cont">
            <img src="inovo.png"/>
          </div>
          <div className="col-md-3 img-cont">
          <img src="sirpi.png"/>
          </div>
          <div className="col-md-3 img-cont">
            <img src="law.png"/>
          </div>
          <div className="col-md-3 img-cont">
            <img src="realestate.png"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
