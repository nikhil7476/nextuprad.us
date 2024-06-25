import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";
import Dropdown from "react-bootstrap/Dropdown";
import ReCAPTCHA from "react-google-recaptcha";
import { Form, Button } from "react-bootstrap";
import Cards from "@/components/Cards";
import Cards2 from "@/components/Cards2";
import HomeAccordian from "@/components/HomeAccordian";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import Head from "next/head";
import { motion, useAnimation } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import axiosInstance from "@/axios/axios";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { Toaster, toast } from "sonner";

export default function Home() {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });
  const countUpRef = useRef(null);
  const [selectedService, setSelectedService] = useState("Select Service");
  const [verticals, setverticals] = useState([]);
  const [selectedVertical, setSelectedVertical] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    form_name: "digital_solution",
  });
  const [errors, setErrors] = useState({});
  const [recaptcha, setRecaptcha] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSelect = (eventKey) => {
    setSelectedService(eventKey);
  };

  const subHeadingsContent = {
    default: [
      "Site Analysis",
      "URL Structure",
      "Website Audit",
      "Account creation",
      "Campaign setup",
      "Audit report",
      "Script writing",
      "Pre-Production",
      "Editing",
      "API Development",
      "Scalability",
      "Middleware",
      "Meta Tag",
      "Header Tag",
      "Growth analysis",
      "Sound Design",
      "CMS",
      "About",
      "DML",
      "Accessibility",
      "NoSQL Databases",
      "File Storage",
      "A/B testing",
      "Segmentation",
    ],
    seo: [
      "Site Analysis",
      "URL Structure",
      "Image Tag Optimization",
      "Title Tag",
      "Meta Tag",
      "Web Responsive Design",
      "Header Tag",
      "Content Duplicacy",
      "Sitemap XML",
      "Broken Link Checker",
      "OG Tag",
      "Meta Itemprop",
      "Canonical Issue",
      "Style Sheet Optimisation",
      "Javascript optimisation",
      "W3C Validator",
      "Robots.txt",
      "Google Analytics",
      "404 Error page",
      "Best Suitable Keywords",
      "DA/PA number",
      "Quality link building",
    ],
    smo: [
      "Website Audit",
      "Account creation",
      "Page integration",
      "Social bookmarking",
      "Business analysis",
      "Hashtags research",
      "Content creation",
      "Weekly posting",
      "Theme research",
      "Data reporting",
      "Page optimization",
      "Audience research",
      "Traffic campaign",
      "Engagement Campaign",
    ],
    smm: [
      "Campaign setup",
      "Tag setup",
      "Conversion Tracking",
      "Audience Research",
      "Locations Analysis",
      "Remarketing Ads",
      "Bi-weekly Data Calls",
      "Weekly reporting",
      "Shop setup",
      "Social Media Posting",
      "4 Posts/ Week",
      "2 Stories/Week",
      "4 Pin Creation/ Week",
    ],
    ppc: [
      "Audit report",
      "Action plan",
      "Analytics setup",
      "Merchant center setup",
      "Product feeds setup",
      "Campaign analysis",
      "Campaign optimization",
      "Locations Analysis",
      "Campaign reporting",
      "Monthly expert meeting",
      "Competitor research",
      "Sales funnel analysis",
      "Marketing roadmap",
      "Growth analysis",
    ],
    content_marketing: [
      "Content planning",
      "Content creation",
      "Buyers research",
      "Competitor research",
      "SEO friendly content",
      "Google friendly content",
      "About us",
      "policy pages",
      "Tailored content",
      "Industry research",
      "Trend analysis",
      "Identifying USP",
    ],
    email_marketing: [
      "Software setup",
      "Sign-up form setup",
      "Strategy development",
      "Automation",
      "Subscriber Management",
      "Abandoned cart email",
      "Abandoned email",
      "Cross sell email",
      "Thanks you email",
      "Campaign",
      "Creative designing",
      "Template Creation",
      "Monthly reporting",
      "Email support",
      "A/B testing",
      "Segmentation",
      "Mobile Optimization",
    ],
    video_production: [
      "Script writing",
      "Pre-Production",
      "Editing",
      "Animation",
      "Voiceover",
      "Motion Graphics",
      "Sound Design",
    ],
    website_frontend: [
      "HTML",
      "CSS",
      "Javascript",
      "Frontend Frameworks",
      "Responsive Design",
      "Web Components",
      "Package Managers",
      "Build Tools",
      "Graphic Design Tools",
      "Accessibility",
      "CMS",
      "Animation Libraries",
      "Frontend Testing",
      "Version Control/Git",
      "Task Runners",
    ],
    website_backend: [
      "Web Server",
      "Application Server",
      "APIs",
      "CMS",
      "Server-Side Frameworks",
      "Caching Mechanisms",
      "Security Services",
      "Serverless Computing",
    ],
    website_database: [
      "DBMS",
      "Database Server",
      "Data Query Language",
      "DML",
      "Data Indexing",
      "Concurrency Control",
      "Backup and Recovery",
      "Security Features",
      "Data Encryption",
      "Scalability Solutions",
      "Database Connectivity",
    ],
    ssoftware_frontend: [
      "Responsive Web Design",
      "Interactive Design",
      "Frontend Architecture",
      "Frameworks",
      "Libraries",
      "Accessibility",
      "Optimization",
      "Version Control",
      "Documentation",
    ],
    software_backend: [
      "Server-Side Programming",
      "API Development",
      "Security Measures",
      "Scalability",
      "Middleware",
      "Background Jobs and Queues",
      "Logging and Monitoring",
      "Documentation",
    ],
    software_database: [
      "NoSQL Databases",
      "Cloud Database Services",
      "In-Memory Databases",
      "Graph Databases",
      "Time-Series Databases",
      "Search Engines",
      "Key-Value Stores",
      "Column-Family Stores",
    ],
    Mobile_frontend: [
      "Mobile App Platforms",
      "UI/UX Design",
      "Responsive Design",
      "Native App Development",
      "Cross-Platform Frameworks",
      "Component Libraries",
      "Offline Functionality",
      "Animation and Transitions",
      "Testing Across Devices",
      "Performance Optimization",
      "User Feedback Mechanisms",
      "Security Considerations",
      "App Store Guidelines",
    ],
    Mobile_backend: [
      "Server-Side Programming",
      "API Development",
      "User Authentication",
      "Authorization",
      "Data Security",
      "Scalability",
      "Push Notifications",
      "File Storage",
      "Logging and Monitoring",
      "Cloud Services",
      "Documentation",
    ],
    Mobile_database: [
      "SQLite",
      "Firebase Realtime Database",
      "Firestore",
      "Realm Database",
      "Amazon DynamoDB",
      "MongoDB Realm",
      "Microsoft Azure Cosmos DB",
      "Couchbase Mobile",
    ],
    Latest_Posts: [],
    Featured_Articles: [],
  };

  const subHeadingsArrofObj = [
    {
      category: "default",
      items: [
        "Site Analysis",
        "URL Structure",
        "Website Audit",
        "Account creation",
        "Campaign setup",
        "Audit report",
        "Script writing",
        "Pre-Production",
        "Editing",
        "API Development",
        "Scalability",
        "Middleware",
        "Meta Tag",
        "Header Tag",
        "Growth analysis",
        "Sound Design",
        "CMS",
        "About us",
        "DML",
        "Accessibility",
        "NoSQL Databases",
        "File Storage",
        "A/B testing",
        "Segmentation",
      ],
    },
    {
      category: "seo",
      items: [
        "Site Analysis",
        "URL Structure",
        "Image Tag Optimization",
        "Title Tag",
        "Meta Tag",
        "Web Responsive Design",
        "Header Tag",
        "Content Duplicacy",
        "Sitemap XML",
        "Broken Link Checker",
        "OG Tag",
        "Meta Itemprop",
        "Canonical Issue",
        "Style Sheet Optimisation",
        "Javascript optimisation",
        "W3C Validator",
        "Robots.txt",
        "Google Analytics",
        "404 Error page",
        "Best Suitable Keywords",
        "DA/PA number",
        "Quality link building",
      ],
    },
    {
      category: "smo",
      items: [
        "Website Audit",
        "Account creation",
        "Page integration",
        "Social bookmarking",
        "Business analysis",
        "Hashtags research",
        "Content creation",
        "Weekly posting",
        "Theme research",
        "Data reporting",
        "Page optimization",
        "Audience research",
        "Traffic campaign",
        "Engagement Campaign",
      ],
    },
    {
      category: "smm",
      items: [
        "Campaign setup",
        "Tag setup",
        "Conversion Tracking",
        "Audience Research",
        "Locations Analysis",
        "Remarketing Ads",
        "Bi-weekly Data Calls",
        "Weekly reporting",
        "Shop setup",
        "Social Media Posting",
        "4 Posts/ Week",
        "2 Stories/Week",
        "4 Pin Creation/ Week",
      ],
    },
    {
      category: "ppc",
      items: [
        "Audit report",
        "Action plan",
        "Analytics setup",
        "Merchant center setup",
        "Product feeds setup",
        "Campaign analysis",
        "Campaign optimization",
        "Locations Analysis",
        "Campaign reporting",
        "Monthly expert meeting",
        "Competitor research",
        "Sales funnel analysis",
        "Marketing roadmap",
        "Growth analysis",
      ],
    },
    {
      category: "content_marketing",
      items: [
        "Content planning",
        "Content creation",
        "Buyers research",
        "Competitor research",
        "SEO friendly content",
        "Google friendly content",
        "About us",
        "policy pages",
        "Tailored content",
        "Industry research",
        "Trend analysis",
        "Identifying USP",
      ],
    },
    {
      category: "email_marketing",
      items: [
        "Software setup",
        "Sign-up form setup",
        "Strategy development",
        "Automation",
        "Subscriber Management",
        "Abandoned cart email",
        "Abandoned email",
        "Cross sell email",
        "Thanks you email",
        "Campaign",
        "Creative designing",
        "Template Creation",
        "Monthly reporting",
        "Email support",
        "A/B testing",
        "Segmentation",
        "Mobile Optimization",
      ],
    },
    {
      category: "video_production",
      items: [
        "Script writing",
        "Pre-Production",
        "Editing",
        "Animation",
        "Voiceover",
        "Motion Graphics",
        "Sound Design",
      ],
    },
    {
      category: "website_frontend",
      items: [
        "HTML",
        "CSS",
        "Javascript",
        "Frontend Frameworks",
        "Responsive Design",
        "Web Components",
        "Package Managers",
        "Build Tools",
        "Graphic Design Tools",
        "Accessibility",
        "CMS",
        "Animation Libraries",
        "Frontend Testing",
        "Version Control/Git",
        "Task Runners",
      ],
    },
    {
      category: "website_backend",
      items: [
        "Web Server",
        "Application Server",
        "APIs",
        "CMS",
        "Server-Side Frameworks",
        "Caching Mechanisms",
        "Security Services",
        "Serverless Computing",
      ],
    },
    {
      category: "website_database",
      items: [
        "DBMS",
        "Database Server",
        "Data Query Language",
        "DML",
        "Data Indexing",
        "Concurrency Control",
        "Backup and Recovery",
        "Security Features",
        "Data Encryption",
        "Scalability Solutions",
        "Database Connectivity",
      ],
    },
    {
      category: "software_frontend",
      items: [
        "Responsive Web Design",
        "Interactive Design",
        "Frontend Architecture",
        "Frameworks",
        "Libraries",
        "Accessibility",
        "Optimization",
        "Version Control",
        "Documentation",
      ],
    },
    {
      category: "software_backend",
      items: [
        "Server-Side Programming",
        "API Development",
        "Security Measures",
        "Scalability",
        "Middleware",
        "Background Jobs and Queues",
        "Logging and Monitoring",
        "Documentation",
      ],
    },
    {
      category: "software_database",
      items: [
        "NoSQL Databases",
        "Cloud Database Services",
        "In-Memory Databases",
        "Graph Databases",
        "Time-Series Databases",
        "Search Engines",
        "Key-Value Stores",
        "Column-Family Stores",
      ],
    },
    {
      category: "Mobile_frontend",
      items: [
        "Mobile App Platforms",
        "UI/UX Design",
        "Responsive Design",
        "Native App Development",
        "Cross-Platform Frameworks",
        "Component Libraries",
        "Offline Functionality",
        "Animation and Transitions",
        "Testing Across Devices",
        "Performance Optimization",
        "User Feedback Mechanisms",
        "Security Considerations",
        "App Store Guidelines",
      ],
    },
    {
      category: "Mobile_backend",
      items: [
        "Server-Side Programming",
        "API Development",
        "User Authentication",
        "Authorization",
        "Data Security",
        "Scalability",
        "Push Notifications",
        "File Storage",
        "Logging and Monitoring",
        "Cloud Services",
        "Documentation",
      ],
    },
    {
      category: "Mobile_database",
      items: [
        "SQLite",
        "Firebase Realtime Database",
        "Firestore",
        "Realm Database",
        "Amazon DynamoDB",
        "MongoDB Realm",
        "Microsoft Azure Cosmos DB",
        "Couchbase Mobile",
      ],
    },
    {
      category: "Latest_Posts",
      items: [],
    },
    {
      category: "Featured_Articles",
      items: [],
    },
  ];

  const [subgrid, setsubgrid] = useState([subHeadingsContent]);

  const [subgridBackup, setsubgridBackup] = useState([subHeadingsContent]);
  const [subHeadingArr, setsubHeadingArr] = useState(subHeadingsArrofObj);
  const [renderFinalGrid, setrenderFinalGrid] = useState();

  useEffect(() => {
    if (selectedService == "Digital Marketing") {
      setverticals([
        "seo",
        "smo",
        "smm",
        "ppc",
        "content_marketing",
        "email_marketing",
        "video_production",
      ]);
    }
    if (selectedService == "Website Service") {
      setverticals(["website_frontend", "website_backend", "website_database"]);
    }
    if (selectedService == "Software Service") {
      setverticals([
        "software_frontend",
        "software_backend",
        "software_database",
      ]);
    }
    if (selectedService == "Mobile App") {
      setverticals(["Mobile_frontend", "Mobile_backend", "Mobile_database"]);
    }
    if (selectedService == "Custom Service") {
      setverticals(["Latest_Posts", "Featured_Articles"]);
    }
  }, [selectedService]);

  const handleSelect2 = (eventKey, event) => {
    console.log("eventKey", eventKey);
    setSelectedVertical(eventKey);

    const arrKeys = Object.keys(subgridBackup[0]);
    console.log("arrKeys", arrKeys);

    const filterIndex = arrKeys.findIndex((item) => item == eventKey);
    setrenderFinalGrid(subHeadingArr[filterIndex]);
    console.log("filterIndex", filterIndex);
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      errors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axiosInstance.post("/postFormData", formData);
        console.log(response.data);
        if (response.status == 200 || response.status == 201) {
          toast.success("Email sent");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            form_name: "digital_solution",
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    }
  };

  return (
    <>
      <Head>
        <title>Nextupgrad</title>
        <meta name="title" content="Nextupgrad" />
        <meta
          name="description"
          content="Propel your business forward with innovative digital transformation services & solutions. Drive efficiency, agility, & growth. Get a free consultation!"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="Propel your business forward with innovative digital transformation services & solutions. Drive efficiency, agility, & growth. Get a free consultation!
          "
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
          content="Propel your business forward with innovative digital transformation services & solutions. Drive efficiency, agility, & growth. Get a free consultation!
          "
        />

        <meta
          property="twitter:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />
        <meta name="google-site-verification" content="6CF5PndgghHSqX2raeDV_1_arkxZ8exgG-D0nSD5MSA" /> 
      </Head>
      <main className="mainOverflowHide">
        <div className="banner2">
          <div className="container bannerContainer">
            <div className="newBannerMain">
              <TypeAnimation
                sequence={[
                  "Designing Websites",
                  2000,
                  "Developing Apps",
                  2000,
                  "Engineering Software",
                  2000,
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                preRenderFirstString
              />

              <p>
                Commence Your digital transformation journey with NextUpgrad’s
                Innovative Digital Solutions
              </p>
              <Link className="Personalize-button2" href="/contact-us">
                Let's Discuss
              </Link>
            </div>
          </div>
        </div>
        {/* <div className="banner">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <motion.h1
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  className="digital-heading"
                >
                  Digital Transformation Services
                </motion.h1>
                <h2 className="design-heading">
                  <p>
                    Designing <span>Websites</span>
                  </p>
                  <p>
                    Developing <span>Apps</span>
                  </p>

                  <p>
                    Engineering<span> Software</span>
                  </p>

                  <p>
                    Executing<span> Marketing Strategies</span>
                  </p>
                </h2>
              </div>
              <div className="col-md-5">
                <motion.img
                  initial={{ opacity: 0, x: 200 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                  src="/New-post-final-min.gif"
                  alt=""
                  width={431}
                  height={431}
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="achieved">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <h3>Our Achieved Milestones on Display</h3>
              </div>
              <div className="col-md-8" ref={ref}>
                <ul>
                  <li>
                    {inView && (
                      <CountUp
                        className="homeCountup"
                        start={0}
                        end={150}
                        duration={2.4}
                        ref={countUpRef}
                        redraw={true}
                        suffix="+"
                      />
                    )}

                    <span>Products Developed</span>
                  </li>
                  <li>
                    {inView && (
                      <CountUp
                        className="homeCountup"
                        start={0}
                        end={80}
                        duration={2.75}
                        ref={countUpRef}
                        redraw={true}
                        suffix="+"
                      />
                    )}

                    <span>Industries</span>
                  </li>
                  <li>
                    {inView && (
                      <CountUp
                        className="homeCountup"
                        start={0}
                        end={500}
                        duration={3}
                        ref={countUpRef}
                        redraw={true}
                        suffix="+"
                      />
                    )}

                    <span>Website Designed</span>
                  </li>
                  <li>
                    {inView && (
                      <CountUp
                        className="homeCountup"
                        start={0}
                        end={14}
                        duration={2.4}
                        ref={countUpRef}
                        redraw={true}
                        suffix="+"
                      />
                    )}

                    <span>Country Served</span>
                  </li>
                  <li>
                    {inView && (
                      <CountUp
                        className="homeCountup"
                        start={0}
                        end={200}
                        duration={2.4}
                        ref={countUpRef}
                        redraw={true}
                        suffix="+"
                      />
                    )}

                    <span>SEO Campaigns Completed</span>
                  </li>
                  <li>
                    {inView && (
                      <CountUp
                        className="homeCountup"
                        start={0}
                        end={150}
                        duration={3}
                        ref={countUpRef}
                        redraw={true}
                        suffix="+"
                      />
                    )}

                    <span>PPC Campaign Designed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="Personalize">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>
                  {" "}
                  Personalize your success journey today with our expert panel,
                  unlocking precision in digital solutions crafted just for you!
                </h2>
                <Link
                  className="Personalize-button"
                  href="https://calendly.com/ron-wilsonbdm/service"
                  target="_blank"
                  rel="nofollow"
                >
                  Schedule a Meeting
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white  exploreSection">
          <div className="container pt-5">
            <h2 id="largeHeading">
              Explore the options of <br />
              Digital Solutions
            </h2>
            <section className="w-100">
              <div className="dropDown-sec1">
                <div className="gridsDropdown">
                  <Dropdown onSelect={handleSelect}>
                    <Dropdown.Toggle
                      className="bg-white text-dark  "
                      id="dropdown-basic"
                    >
                      {selectedService}
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="bg-white">
                      <Dropdown.Item eventKey="Digital Marketing">
                        Digital Marketing
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Website Service">
                        Website Service
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Software Service">
                        Software Service
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Mobile App">
                        Mobile App
                      </Dropdown.Item>
                      <Dropdown.Item eventKey="Custom Service">
                        Custom Service
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  {selectedService != "Select Service" ? (
                    <Dropdown onSelect={handleSelect2}>
                      <Dropdown.Toggle
                        className="bg-white text-dark"
                        id="dropdown-basic"
                      >
                        {selectedVertical
                          ? selectedVertical
                          : "Select Verticals"}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        {verticals.length
                          ? verticals.map((item, index) => (
                              <Dropdown.Item key={index} eventKey={item}>
                                {item.replace("_", " ")}
                              </Dropdown.Item>
                            ))
                          : null}
                      </Dropdown.Menu>
                    </Dropdown>
                  ) : null}
                </div>
                <div className="digiSolutions">
                  <div className="grids">
                    {selectedVertical != null
                      ? renderFinalGrid.items.map((item, index) => (
                          <span key={index} className="digiItems">
                            {item}
                          </span>
                        ))
                      : subgrid[0].default.map((item, index) => (
                          <span key={index} className="digiItems">
                            {item}
                          </span>
                        ))}
                  </div>
                  {/* <Form onSubmit={(event) => handleSubmit(event)}>
                    <Form.Group controlId="formName ">
                      <Form.Label>Your name</Form.Label>
                      <Form.Control
                        type="text"
                        className="mb-4"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Your email</Form.Label>
                      <Form.Control
                        type="email"
                        className="mb-4"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        className="mb-4"
                        placeholder="Enter subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                      <Form.Label>Your message (optional)</Form.Label>
                      <Form.Control
                        as="textarea"
                        className="mb-4"
                        rows={3}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    <button className="contactFormBtn" type="submit">
                      Submit
                    </button>
                  </Form> */}
                  <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="formName">
                      <Form.Label>Your name</Form.Label>
                      <Form.Control
                        type="text"
                        className="mb-4"
                        placeholder="Enter your name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        isInvalid={!!errors.name}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.name}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formEmail">
                      <Form.Label>Your email</Form.Label>
                      <Form.Control
                        type="email"
                        className="mb-4"
                        placeholder="Enter your email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        isInvalid={!!errors.email}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        className="mb-4"
                        placeholder="Enter subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        isInvalid={!!errors.subject}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.subject}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group controlId="formMessage">
                      <Form.Label>Your message (optional)</Form.Label>
                      <Form.Control
                        as="textarea"
                        className="mb-4"
                        rows={3}
                        placeholder="Enter your message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.message}
                      </Form.Control.Feedback>
                    </Form.Group>

                    <div className="captcha">
                      <ReCAPTCHA
                        sitekey="6LcsJt0pAAAAADojY-EwlCuhurrgweKE5lZS89lU"
                        onChange={(val) => {
                          console.log("recaptcha value", val);
                          setRecaptcha(val);
                        }}
                      />
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        className="contactFormBtn w-100 mt-3"
                        type="submit"
                        disabled={!recaptcha}
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
              <div className="form-sec2"></div>
            </section>
          </div>
        </div>
        {/* 
        <motion.section
          ref={sectionRef}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { scale: 1, opacity: 1 },
            hidden: { scale: 0.8, opacity: 0 },
          }}
          transition={{ duration: 0.5 }}
        > */}
        <div className="discover">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Discover Options For Hiring Dedicated Developers.</h2>{" "}
              </div>
              <div data-aos="fade-right" className="col-md-6">
                <h3>
                  {" "}
                  <img
                    src="/download1.png"
                    alt=" Experience-Driven Resources"
                  />
                  Experience-Driven Resources
                </h3>
                <p>
                  Empower your projects with a developer-centric approach.
                  Seamlessly acquire expertise, efficiency, and precision for
                  success in every endeavor.
                </p>
              </div>
              <div data-aos="fade-left" className="col-md-6">
                <h3>
                  {" "}
                  <img src="/download.png" alt="Budget-Centric Resource" />
                  Budget-Centric Resource
                </h3>
                <p>
                  Maximize your project’s value with budget-friendly developer
                  solutions. Achieve excellence without compromising your
                  financial goals. Hire skilled developers for cost-effective
                  success
                </p>
              </div>
              <div data-aos="fade-right" className="col-md-6">
                <h3>
                  {" "}
                  <img
                    src="/download2.png"
                    alt="Expertise-Centric Resources!"
                  />
                  Expertise-Centric Resources!
                </h3>
                <p>
                  Revolutionize your projects by choosing our expertise-driven
                  approach to hiring developers. Dedicated professionals
                  committed to delivering precision and success in every
                  project.
                </p>
              </div>
              <div data-aos="fade-left" className="col-md-6">
                <h3>
                  {" "}
                  <img
                    src="/download3.png"
                    alt="Fusion of Experience, Budget, and Expertise"
                  />
                  Fusion of Experience, Budget, and Expertise
                </h3>
                <p>
                  Experience a Fusion of Expertise, Budget-Friendly Solutions,
                  and Proven Experience. Elevate Your Projects by Hiring Our
                  Skilled Developers.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </motion.section> */}

        <div className="ps-timeline-sec">
          <div className="container">
            <h2>Hiring Process for a Dedicated Developer</h2>
            <ol className="ps-timeline">
              <li className="p1">
                <div className="img-handler-top">
                  <p>Discussion & Requirement Gathering</p>
                </div>
                <div className="ps-bot">
                  <p>Discovery</p>
                </div>
                <span className="ps-sp-top">1</span>
              </li>
              <li className="p2">
                <div className="ps-top">
                  <p>Profile Spotlight</p>
                </div>
                <div className="img-handler-bot">
                  <p>
                    Spotlighting Top Resumes and Projects with In-Depth
                    Interviews
                  </p>
                </div>
                <span className="ps-sp-bot">2</span>
              </li>
              <li className="p3">
                <div className="img-handler-top">
                  <p>Shortlisting Candidates</p>
                </div>
                <div className="ps-bot">
                  <p>Candidate Selection</p>
                </div>
                <span className="ps-sp-top">3</span>
              </li>
              <li className="p4">
                <div className="ps-top">
                  <p>Planning</p>
                </div>
                <div className="img-handler-bot">
                  <p>Proposal Discussion, Timeline, and Work Segregation</p>
                </div>
                <span className="ps-sp-bot">4</span>
              </li>
              <li className="p5">
                <div className="img-handler-top">
                  <p>
                    Deal Closure, NDA Signing, and Efficient Resource Deployment
                  </p>
                </div>
                <div className="ps-bot">
                  <p>Execution</p>
                </div>
                <span className="ps-sp-top1">5</span>
              </li>
            </ol>
          </div>
        </div>
        <div className="timeline-container-mobilenew">
          <h2>Hiring Process for a Dedicated Developer</h2>
          <ul>
            <li>
              <span>01</span>
              <div>
                <h3>Discovery</h3>
                <p>Discussion & Requirement Gathering</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Profile Spotlight</h3>
                <p>
                  Spotlighting Top Resumes and Projets with-in Depth Interiews
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Candidate Selection</h3>
                <p>Shortlisting Candidates</p>
              </div>
            </li>
            <li>
              <span>04</span>
              <div>
                <h3>Planning</h3>
                <p>Proposal Discussion, Timeline, and Work Segregation</p>
              </div>
            </li>
            <li>
              <span>05</span>
              <div>
                <h3>Execution</h3>
                <p>
                  Deal Closure, NDA Signing and Effecient Resource Deployment
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="deserve">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Why We Deserve to Be Your Digital Partner.</h2>{" "}
              </div>
              <div
                data-aos="fade-down-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-4"
              >
                <h3>
                  {" "}
                  <img src="/downloadnew.png" alt="Unique pricing models" />
                  Unique pricing models
                </h3>
                <p>
                  Tailored Pricing for Every Need: Choose from Our Flexible
                  Models – Whether it’s Hourly for Short Tasks, Project-Based
                  for Defined Goals, or Subscription for Ongoing Support. Your
                  Project, Your Price!
                </p>
              </div>
              <div className="col-md-4">
                <h3>
                  {" "}
                  <img src="/downloadnew1.png" alt="Project Isolation Setup" />
                  Project Isolation Setup
                </h3>
                <p>
                  A dedicated environment tailored for your project’s specific
                  needs. Experience enhanced security, focused development, and
                  streamlined collaboration for optimal results.
                </p>
              </div>
              <div
                data-aos="fade-down-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-4"
              >
                <h3>
                  {" "}
                  <img
                    src="/downloadnew2.png"
                    alt="Complimentary Maintenance Services"
                  />
                  Complimentary Maintenance Services
                </h3>
                <p>
                  Enjoy Complimentary Maintenance Services With Your Project.
                  Our Commitment Doesn’t End at Delivery; We’re Here to Keep
                  Your Solutions Running Smoothly.
                </p>
              </div>
              <div
                data-aos="fade-up-right"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-4"
              >
                <h3>
                  {" "}
                  <img
                    src="/downloadnew3.png"
                    alt="Guaranteed Timely Delivery"
                  />
                  Guaranteed Timely Delivery
                </h3>
                <p>
                  Seal Your Project with Confidence: Our Guarantee – Timely
                  Delivery. Trust us to meet your deadlines with precision and
                  ensure your project arrives at its destination right on time.
                </p>
              </div>
              <div className="col-md-4">
                <h3>
                  {" "}
                  <img src="/downloadnew4.png" alt="Gratis Shadow Resource" />
                  Gratis Shadow Resource
                </h3>
                <p>
                  Elevate Your Team’s Potential with a Complimentary Shadow
                  Resource. Enhance Workforce Agility and Efficiency with an
                  Extra Layer of Support, All Included in Your Service Package.
                </p>
              </div>
              <div
                data-aos="fade-up-left"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-4"
              >
                <h3>
                  {" "}
                  <img src="/downloadnew5.png" alt="Free Ideation Session" />
                  Free Ideation Session
                </h3>
                <p>
                  Ignite Innovation with a Complimentary Ideation Session.
                  Kickstart Your Project with Creative Sparks and Strategic
                  Insights – Unleash the Potential of Your Ideas.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="industries">
          <div className="container">
            <div className="row">
              <div className="col-md-12 ">
                <h2>Industries We Serve</h2>{" "}
              </div>

              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-3"
              >
                <div className="indus-content">
                  <h3>
                    {" "}
                    <img src="/eccomm-1.webp" alt="Ecommerce" />
                    Ecommerce
                  </h3>
                  <p>
                    Elevate your Ecommerce game with cutting-edge digital
                    solutions tailored for industry dominance.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-3"
              >
                <div className="indus-content">
                  {" "}
                  <h3>
                    {" "}
                    <img src="/health-1.webp" alt=" Healthcare" />
                    Healthcare
                  </h3>
                  <p>
                    Revolutionizing Healthcare Through Cutting-edge Digital
                    Solutions for a Healthier Tomorrow.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-3"
              >
                <div className="indus-content">
                  {" "}
                  <h3>
                    {" "}
                    <img src="/e-learn.webp" alt="Education/ E-learning" />
                    Education/ E-learning
                  </h3>
                  <p>
                    Empowering Education Through Digital Solutions –
                    Transforming Learning Experiences for the Future.
                  </p>
                </div>{" "}
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-3"
              >
                <div className="indus-content">
                  {" "}
                  <h3>
                    {" "}
                    <img src="/sports.webp" alt=" Sports" />
                    Sports
                  </h3>
                  <p>
                    Empowering Sports Excellence through Cutting-Edge Digital
                    Solutions.
                  </p>
                </div>{" "}
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-3"
              >
                <div className="indus-content">
                  <h3>
                    {" "}
                    <img src="/media.webp" alt="Media and Entertainment" />
                    Media and Entertainment
                  </h3>
                  <p>
                    Elevate Media and Entertainment with Innovative Digital
                    Transformations
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-3"
              >
                <div className="indus-content">
                  <h3>
                    {" "}
                    <img src="/realstate.webp" alt="Real estate" />
                    Real estate
                  </h3>
                  <p>
                    {" "}
                    Elevating Real Estate Experiences with Innovative Solutions
                    and Exceptional Service.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-3"
              >
                <div className="indus-content">
                  <h3>
                    {" "}
                    <img src="/ld.webp" alt="Logistics and Distribution" />
                    Logistics and Distribution
                  </h3>
                  <p>
                    Seamless Digital Solutions for Efficient Distribution in
                    Every Industry.
                  </p>
                </div>
              </div>
              <div
                data-aos="zoom-in"
                data-aos-delay="50"
                data-aos-duration="1000"
                className="col-md-3"
              >
                <div className="indus-content">
                  {" "}
                  <h3>
                    {" "}
                    <img src="/retail.webp" alt="Retail" />
                    Retail
                  </h3>
                  <p>
                    Elevating Retail Dynamics with Innovative Digital Solutions
                    for a Seamless Customer Journey.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Testimonials</h2>
              </div>
            </div>
          </div>
        </div>
        <Carousel>
          <Carousel.Item interval={3500}>
            <Cards />
          </Carousel.Item>
          <Carousel.Item interval={3500}>
            <Cards2 />
          </Carousel.Item>
        </Carousel>

        {/* <section className="articles-list">
        <ul className="articles-list__articles stacked">
          <li className="articles-list__article">
            <article
              itemScope=""
              itemType="//schema.org/Article"
              data-theme="white"
            >
              <Link href="">
                <header>
                  <h3 className="article__title caps f-bold h4" />
                  <div className="article__meta">
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={58}
                        height={58}
                        src=""
                        className=""
                        alt=""
                        srcSet="/team1.webp"
                        sizes="(max-width: 58px) 100vw, 58px"
                      />{" "}
                    </div>
                    <div>
                      <address className="caps f-bold" rel="author">
                        By Tom Bagnall <br />{" "}
                        <span
                          style={{
                            fontFamily: '"Poppins", Sans-serif',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        >
                          Managing director
                        </span>
                      </address>
                      <time dateTime="22/10/2023" itemProp="datePublished">
                        22/10/2023{" "}
                      </time>
                    </div>
                  </div>
                </header>
                <p>
                  We needed help with our tricky online store, and that's when
                  we found NextUpgrad. What stood out was how they not only got
                  what we wanted but also shared smart ideas to make things
                  easier for our customers. They really know how to put
                  themselves in our customers' shoes, and that made a big
                  difference.
                </p>
              </Link>
            </article>
          </li>
          <li className="articles-list__article">
            <article
              itemScope=""
              itemType="//schema.org/Article"
              data-theme="lilac"
            >
              <Link href="">
                <header>
                  <h3 className="article__title caps f-bold h4" />
                  <div className="article__meta">
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={58}
                        height={58}
                        src="
                  "
                        className=""
                        alt=""
                        srcSet="/team5.webp"
                        sizes="(max-width: 58px) 100vw, 58px"
                      />{" "}
                    </div>
                    <div>
                      <address className="caps f-bold" rel="author">
                        By Gaz Battersby <br />{" "}
                        <span
                          style={{
                            fontFamily: '"Poppins", Sans-serif',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        >
                          General manager
                        </span>
                      </address>
                      <time dateTime="25/04/2023" itemProp="datePublished">
                        25/12/2023{" "}
                      </time>
                    </div>
                  </div>
                </header>
                <p>
                  We picked NextUpgrad to create our financial calculator app
                  all the way from the beginning. Right from our first talk, we
                  were super impressed with how professional, knowledgeable, and
                  committed they were to giving us really great results. Now,
                  our app is up and running, and the feedback from users is
                  awesome!
                </p>
              </Link>
            </article>
          </li>
          <li className="articles-list__article">
            <article
              itemScope=""
              itemType="//schema.org/Article"
              data-theme="purple"
            >
              <Link href="">
                <header>
                  <h3 className="article__title caps f-bold h4" />
                  <div className="article__meta">
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={58}
                        height={58}
                        src=""
                        className=""
                        alt=""
                        srcSet="/team3.webp"
                        sizes="(max-width: 58px) 100vw, 58px"
                      />{" "}
                    </div>
                    <div>
                      <address className="caps f-bold" rel="author">
                        By Michael Smith <br />{" "}
                        <span
                          style={{
                            fontFamily: '"Poppins", Sans-serif',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        >
                          Commercial Director
                        </span>
                      </address>
                      <time dateTime="29/11/2023" itemProp="datePublished">
                        29/12/2023{" "}
                      </time>
                    </div>
                  </div>
                </header>
                <p>
                  These guys are just amazing! They really helped us grow our
                  business, and now our biggest issue is having too many
                  customers – which is a great problem to have. We're exactly
                  where we wanted to be, and Nextupgrad made it happen. Thanks a
                  bunch!
                </p>
              </Link>
            </article>
          </li>
          <li className="articles-list__article">
            <article
              itemScope=""
              itemType="//schema.org/Article"
              data-theme="white"
            >
              <Link href="">
                <header>
                  <h3 className="article__title caps f-bold h4" />
                  <div className="article__meta">
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={58}
                        height={58}
                        src=""
                        className=""
                        alt=""
                        srcSet="/team6.webp"
                        sizes="(max-width: 58px) 100vw, 58px"
                      />{" "}
                    </div>
                    <div>
                      <address className="caps f-bold" rel="author">
                        By William Davis <br />{" "}
                        <span
                          style={{
                            fontFamily: '"Poppins", Sans-serif',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        >
                          Creative Director
                        </span>
                      </address>
                      <time dateTime="23/11/2023" itemProp="datePublished">
                        23/01/2024{" "}
                      </time>
                    </div>
                  </div>
                </header>
                <p>
                  Nextupgrad is like a real-life superhero for us! They're
                  honest, quick to help with anything, and totally dependable.
                  We can always trust them to do what they promise without any
                  nonsense. They've been a blessing that went beyond what we
                  hoped for.
                </p>
              </Link>
            </article>
          </li>
          <li className="articles-list__article">
            <article
              itemScope=""
              itemType="//schema.org/Article"
              data-theme="beige"
            >
              <Link href="">
                <header>
                  <h3 className="article__title caps f-bold h4" />
                  <div className="article__meta">
                    <div>
                      <img
                        loading="lazy"
                        decoding="async"
                        width={58}
                        height={58}
                        src=""
                        className=""
                        alt=""
                        srcSet="/test-5.webp"
                        sizes="(max-width: 58px) 100vw, 58px"
                      />{" "}
                    </div>
                    <div>
                      <address className="caps f-bold" rel="author">
                        By Shane Quigley <br />{" "}
                        <span
                          style={{
                            fontFamily: '"Poppins", Sans-serif',
                            fontSize: 16,
                            fontWeight: 500,
                          }}
                        >
                          Co-Founder
                        </span>
                      </address>
                      <time dateTime="27/11/2023" itemProp="datePublished">
                        27/01/2024{" "}
                      </time>
                    </div>
                  </div>
                </header>
                <p>
                  <span className="break-words">
                    <span dir="ltr">
                      Thanks to NextUpGrad's digital marketing expertise, our
                      project achieved remarkable success. Their organic
                      strategies and clear communication made a significant
                      impact, driving results beyond our expectations. Highly
                      recommend for effective and results-driven digital
                      marketing solutions!"
                    </span>
                  </span>
                </p>
              </Link>
            </article>
          </li>
        </ul>
      </section> */}

        <div className="video_testimonials ">
          <div className="container text-center">
            <h3>Video Testimonials</h3>
            <div
              className="owl-carousel owl-theme testimonials-container owl-loaded owl-drag"
              id="testimonials-container"
            >
              <div className="item-card1">
                <div className="card-body">
                  <div className="item1">
                    <i className="fa fa-star checked icon" />
                    <i className="fa fa-star checked" />
                    <i className="fa fa-star checked" />
                    <i className="fa fa-star checked" />
                    <i className="fa fa-star checked" />
                    <i className="fa fa-star checked" />
                    <h2>
                      Recommend NextUpgrad for website development and business
                      marketing
                    </h2>
                    <p>
                      I’m working with nextupgrad since april and these guys are
                      amazing team. They have been there from day 1 for me. They
                      also worked on weekends just to make sure my website and
                      products were up to the standard.
                    </p>
                    <p>Patrick </p>
                    <h4>Client For</h4>
                    <span className="ic1">
                      Website Development and Digital Marketing
                    </span>
                  </div>
                  <div className="item2">
                    <iframe
                      width={560}
                      height={315}
                      src="https://www.youtube.com/embed/eIQ9JhJF3R8?si=fT6cHoKSIJRt1fJD"
                      title="YouTube video player"
                      frameBorder={0}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials mt-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12  text-center">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
        </div>
        <section className="container pb-5  ">
          <HomeAccordian />
        </section>

        <div className="holistic">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h3>
                  Seeking a holistic or customized digital solution for your
                  business?
                </h3>
                <p>
                  Empowering business with a comprehensive and customized
                  digital solution, seamlessly connecting you with your audience
                  for optimal efficiency.
                </p>
                <div className="elementor-social-icons-wrapper elementor-grid">
                  <span className="elementor-grid-item">
                    <Link
                      className="elementor-social-icon wahtsapp"
                      href="https://api.whatsapp.com/send/?phone=%2B14087865558&text&type=phone_number&app_absent=0"
                      target="_blank"
                    >
                      <span className="elementor-screen-only">Whatsapp</span>
                      <svg
                        className="e-font-icon-svg e-fab-whatsapp"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </Link>
                  </span>
                  <span className="elementor-grid-item">
                    <Link
                      className="elementor-social-icon envelope"
                      href="mailto:sales@nextupgrad.us"
                      target="_blank"
                    >
                      <span className="elementor-screen-only">Envelope</span>
                      <svg
                        className="e-font-icon-svg e-fas-envelope"
                        viewBox="0 0 512 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
                      </svg>
                    </Link>
                  </span>
                  <span className="elementor-grid-item">
                    <Link
                      className="elementor-social-icon skype"
                      href="https://join.skype.com/wsiGi9CXzLhD"
                      target="_blank"
                    >
                      <span className="elementor-screen-only">Skype</span>
                      <svg
                        className="e-font-icon-svg e-fab-skype"
                        viewBox="0 0 448 512"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
