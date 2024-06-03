import WebDevSlider from "@/components/webDevSlider";
import HomeAccordian from "@/components/HomeAccordian";
import Head from "next/head";
import styles from "../styles/LandingPage.module.css";
import { Form, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import axiosInstance from "@/axios/axios";
import Image from "next/image";
import ReCAPTCHA from "react-google-recaptcha";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { toast } from "sonner";
import { IoBuild } from "react-icons/io5";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BsPersonBadge } from "react-icons/bs";
import Cards4 from "@/components/Cards4";
import LandingPageSlider from "@/components/LandingPageSlider";
import { useState } from "react";
import axios from "axios";
const LandingPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    form_name: "landing_page_form",
  });
  const [errors, setErrors] = useState({});
  const [recaptcha, setRecaptcha] = useState(null);
  const [email, setEmail] = useState();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validateForm = () => {
    const { name, email, subject, phone, message } = formData;
    const errors = {};

    if (!name.trim()) {
      errors.name = "Name is required";
    }
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format";
    }
    if (!subject.trim()) {
      errors.subject = "Subject is required";
    }
    if (!phone.trim()) {
      errors.phone = "Phone is required";
    }
    if (!message.trim()) {
      errors.message = "Message is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   if (validateForm()) {
  //     try {
  //       const response = await axiosInstance.post("/postFormData", formData);
  //       console.log(response.data);
  //       if (response.status == 200 || response.status == 201) {
  //         toast.success("Email sent");
  //         setFormData({
  //           name: "",
  //           email: "",
  //           subject: "",
  //           message: "",
  //           form_name: "landingPage",
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error submitting form:", error);

  //     }
  //   }

  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          "https://53c50cd527.nxcli.io/nextupgrad_backend/api/postFormData",
          formData
        );
        console.log(response.data);
        if (response.status == 200 || response.status == 201) {
          toast.success("Email sent");
          setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
            form_name: "landing_page_form",
          });
        }
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  /////newsletter
  const handleChange2 = (e) => {
    setEmail(e.target.value);
    setErrors(""); // Clear previous validation errors when the user types
  };

  const validateEmail2 = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    return isValid;
  };

  const handleSubmit2 = async (e) => {
    e.preventDefault();
    if (!validateEmail2(email)) {
      setErrors("Please enter a valid email address.");
      return;
    }

    try {
      const response = await fetch(
        "https://53c50cd527.nxcli.io/calculator/api/postNewsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();

      console.log(data);
      if (data.status == 200 || data.status == 201) {
        setEmail("");
        Swal.fire({
          title: "Subscribed!",
          text: "thank you for subscribing to nextupgrad!",
          icon: "success",
        });
      }
      if (data.status == 500) {
        Swal.fire({
          title: "Already Subscribed!",
          text: "this email is already subscribed!",
          icon: "error",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle error response here
    }
  };

  function scrollToLeadForm() {
    const form = document.querySelector("#leadForm");

    if (form) {
      // Get the position of the form element
      const rect = form.getBoundingClientRect();
      const formTop = rect.top + window.scrollY;

      // Scroll to the form position
      window.scrollTo({
        top: formTop,
        behavior: "smooth", // optional: for smooth scrolling
      });
    }
  }

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        ></link>
      </Head>
      <section id="leadForm" className={`${styles.section2piy} `}>
        <video
          className="w-100 bannerVideo"
          src="/bannerVid.mp4"
          autoPlay
          muted
          loop
        />

        <div className="overlayVid"></div>
        <div className="container bannerContentLanding">
          <div
            className={`row landinform justify-content-between ${styles.bannerContent}`}
          >
            <div className="col-md-7 mt-5">
              <Image
                className="landinlogo desktoplogo"
                src="/Nextupgradlogo.png"
                height={103}
                width={256}
                alt="logo"
              /> <Image
              className="landinlogomobile"
              src="/Nextupgradlogom.png"
              height={103}
              width={256}
              alt="logo"
            />
              <video
                className="w-100-mobilevideo bannerVideo"
                src="/bannerVid.mp4"
                autoPlay
                muted
                loop
              />
              <h1 className={`text-light mt-5 ${styles.mainHeading}`}>
                Consult with our Expert and Transform Your Vision into Reality
                with our Website Development Services
              </h1>
              {/* <p className="my-4 text-light">Expert Consult Online</p> */}
              {/* <div className={`${styles.innerSection} my-4`}>
                <span>Theme Development</span>
                <span>API Integration</span>
                <span>Performance Optimization</span>
                <span>Security Implementation</span>
                <span>System Design & Architecture</span>
                <span>Community & Social Engagement</span>
              </div> */}
              {/* <button className="sec-two-btn mt-5">Get Started</button> */}
            </div>
            <div className={`col-md-5 ${styles.landingPageForm}`}>
              <p className={styles.formHeading}>
                Get Free Website Audit Consultation !!
              </p>
              <Form className="hiringForm" onSubmit={handleSubmit}>
                <div className="row">
                  <Form.Group className="col-md-6" controlId="name">
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      isInvalid={!!errors.name}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.name}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="col-md-6" controlId="email">
                    <Form.Control
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

                <div className="row mt-4">
                  <Form.Group className="col-6" controlId="phone">
                    <PhoneInput
                      defaultCountry="US"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={(value) =>
                        setFormData((prevData) => ({
                          ...prevData,
                          phone: value,
                        }))
                      }
                      isInvalid={!!errors.phone}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.phone}
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="col-6" controlId="subject">
                    <Form.Control
                      type="text"
                      placeholder="Enter subject"
                      value={formData.subject}
                      onChange={handleChange}
                      isInvalid={!!errors.subject}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.subject}
                    </Form.Control.Feedback>
                  </Form.Group>
                </div>

                <Form.Group className="mt-4" controlId="message">
                  <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </Form.Group>

                <div className={styles.captcha}>
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
                    type="submit"
                    className="w-100 mt-3 contactFormBtn"
                    disabled={!recaptcha}
                  >
                    Submit
                  </button>
                </div>
                <span className={`${styles.formBottomText} text-center`}>
                  <p className="mt-3">
                    I consent to be contacted by Nextupgrad Web Solutions at any
                    email address or telephone number I provide and agree and
                    consent to the Website's{" "}
                    <strong>Terms and Conditions</strong> of Use or
                    <strong>Privacy Policy</strong>.
                  </p>
                </span>

                <span className={`${styles.formBottomText} `}>
                  <p className="text-center">
                    This site is protected by reCAPTCHA and the Google Privacy
                    Policy and Terms of Service apply
                  </p>
                </span>
              </Form>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.expertiseSecMain} container`}>
        <h3 className="text-start mt-5 text-center">Nextupgrad's Expertise</h3>
        <p className="text-center mt-2 expertiseSecMainpara">
          We're an ROI driven team, always ready for challenges, No sales
          presentations, and no gimmicks—just pure expertise. We craft impactful
          solutions to make your business stand out.
        </p>
        <p className="mt-1 text-center expertiseSecMainpara">
          We specialize in creating bespoke websites that cater to your unique
          business needs. Our team of experienced developers and designers work
          together to build visually stunning, highly functional websites that
          engage your audience and drive conversions.
        </p>
        <div className={styles.expertiseGrid}>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
            className="expertiseGridItems"
          >
            <IoBuild fontSize={85} className={`${styles.expertIcons} my-3 `} />
            <h4>Custom-Built Designs</h4>
            <p>
              Each website is tailor-made to reflect your brand's unique
              identity, ensuring a distinctive online presence.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
            className="expertiseGridItems"
          >
            <RiCustomerService2Fill
              fontSize={85}
              className={`${styles.expertIcons} my-3 `}
            />
            <h4>Comprehensive Support and Maintenance</h4>
            <p>
              We offer ongoing support and maintenance services to ensure your
              website stays up-to-date and performs optimally.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1500"
            className="expertiseGridItems"
          >
            <BsPersonBadge
              fontSize={85}
              className={`${styles.expertIcons} my-3 `}
            />
            <h4>Professional Expertise</h4>
            <p>
              Gain from our seasoned knowledge and insights at every stage,
              guaranteeing a flawless web development journey
            </p>
          </div>
        </div>
      </section>
      {/* <div className="testimonials domian mt-5 ">
        <div className="container">
          <section className="container my-4 ">
            {" "}
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center"> Domains we serve</h2>
              </div>
            </div>
            <LandingPageSlider />
          </section>{" "}
        </div>
      </div> */}
      <section className={` ${styles.clutchSection}`}>
        <p>
          Partner with the <span>award-winning</span> Web-Designing Agency
        </p>
        <ul>
          <li>
            <img src="/f1.jpg" alt="" />
          </li>
          <li>
            <img src="/pmp.png" alt="" />
          </li>
          <li>
            <img src="/f2.jpg" alt="" />
          </li>
          <li>
            <img src="/ISO.png" alt="" />
          </li>
        </ul>
      </section>
      {/*<secion className={` ${styles.certifications}`}>
        <ul>
          <li>
            <img src="/f1.jpg" alt="" />
          </li>
          <li>
            <img src="/f2.jpg" alt="" />
          </li>
          <li>
            <img src="/f5.jpg" alt="" />
          </li>
          <li>
            <img src="/f6.jpg" alt="" />
          </li>
          <li>
            <img src="/f7.jpg" alt="" />
          </li>
          <li>
            <img src="/f8.jpg" alt="" />
          </li>
        </ul>
    </secion>*/}
      <div>
        <div className={`sec-two ouroffring ${styles.landingPageMain}`}>
          <div className="container">
            {/* <h1>Our Distinctive website development services</h1> */}
            <h1 className="text-center">Our Offerings</h1>
            <div className="row">
              <div
                data-aos="fade-right"
                data-aos-delay="150"
                data-aos-duration="1500"
                className="col-md-6 img-box landinbgsection px-3"
                onClick={scrollToLeadForm}
              >
                <div className="sec-two-box">
                  <img src="custom_developement.png" alt="" />
                  <h2>Custom Website Design</h2>
                </div>
                <p>
                  Our custom web design service ensures your website reflects
                  your brand’s identity and meets your business goals. From
                  wireframing to final design, we create websites that are both
                  attractive and intuitive.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-duration="1500"
                className="col-md-6 img-box landinbgsection px-3"
                onClick={scrollToLeadForm}
              >
                <div className="sec-two-box">
                  <img src="cms.png" alt="" />
                  <h2>Content Management Systems (CMS)</h2>
                </div>
                <p>
                  We develop websites using popular CMS platforms like
                  WordPress, Drupal, and Joomla, enabling you to easily manage
                  and update your content.
                </p>
              </div>
            </div>
            <div className="row">
              <div
                data-aos="fade-right"
                data-aos-delay="150"
                data-aos-duration="1500"
                className="col-md-6 img-box landinbgsection px-3"
                onClick={scrollToLeadForm}
              >
                <div className="sec-two-box">
                  <img src="ecom.png" alt="" />
                  <h2>E-commerce Solutions</h2>
                </div>
                <p>
                  We build robust e-commerce platforms that provide seamless
                  shopping experiences. Our solutions include everything from
                  storefront design to payment gateway integration.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-duration="1500"
                className="col-md-6 img-box landinbgsection px-3"
                onClick={scrollToLeadForm}
              >
                <div className="sec-two-box">
                  <img src="full_stack.png" alt="" />
                  <h2>Full Stack</h2>
                </div>
                <p>
                  Complete web development: HTML, CSS, and JavaScript for
                  visuals, server-side scripting, database management, design,
                  implementation, and seamless integration for enhanced
                  functionality.
                </p>
              </div>
            </div>
            <div className="row last-row">
              <div
                data-aos="fade-right"
                data-aos-delay="150"
                data-aos-duration="1500"
                className="col-md-6 img-box landinbgsection px-3"
                onClick={scrollToLeadForm}
              >
                <div className="sec-two-box">
                  <img src="web-security.png" alt="" />
                  <h2>Responsive & Mobile-First Development</h2>
                </div>
                <p>
                  With the majority of users accessing websites on mobile
                  devices, our mobile-first approach ensures your site looks and
                  performs perfectly on all screen sizes.
                </p>
              </div>
              <div
                data-aos="fade-left"
                data-aos-delay="150"
                data-aos-duration="1500"
                className="col-md-6 img-box landinbgsection px-3"
                onClick={scrollToLeadForm}
              >
                <div className="sec-two-box">
                  <img src="training.png" alt="" />
                  <h2>Website Maintenance & Support</h2>
                </div>
                <p>
                  Our services don’t end with the launch. We offer ongoing
                  maintenance and support to ensure your website continues to
                  perform optimally.
                </p>
              </div>
            </div>
            <a
              href="https://calendly.com/ron-wilsonbdm/service?month=2024-05"
              target="_blank"
              className="sec-two-btn"
            >
              Expert Consult Online!
            </a>
          </div>
        </div>
        <div className="sec-three thirdboxsection">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2 className="landingnextheadnew">
                  Nextupgrad Technology Platform Ecosystem
                </h2>
                <p>
                  Unlock Business Growth with Tailored Solutions for Leading
                  Technology Platforms.
                </p>
                <p className="sec-three-btn" onClick={scrollToLeadForm}>
                  Let's Discuss!
                </p>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img src="frontend.png" alt="Avatar" />
                          <h3>Front-end</h3>
                        </div>
                        <div className="flip-card-back">
                          <h3>Front-end</h3>
                          <ul>
                            <li>Angular.js</li>
                            <li>Javascript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Vue.js</li>
                            <li>Tailwind CSS</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img src="backend.png" alt="Avatar" />
                          <h3>Back-end</h3>
                        </div>
                        <div className="flip-card-back">
                          <h3>Back-end</h3>
                          <ul>
                            <li>Node.js</li>
                            <li>Python</li>
                            <li>Express.js</li>
                            <li>Java</li>
                            <li>Spring</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img src="project-management.png" alt="Avatar" />
                          <h3>Project Management</h3>
                        </div>
                        <div className="flip-card-back">
                          <h3>Project Management</h3>
                          <ul>
                            <li>Jira</li>
                            <li>Confluence</li>
                            <li>Asana</li>
                            <li>Trello</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="clearfix" />
                <div className="row">
                  <div className="col-md-4">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img src="mobile-app.png" alt="Avatar" />
                          <h3>CMS</h3>
                        </div>
                        <div className="flip-card-back">
                          <h3>CMS</h3>
                          <ul>
                            <li>Wordpress</li>
                            <li>Joomla</li>
                            <li>Wix</li>
                            <li>Magento</li>
                            <li>Shopify</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img src="database.png" alt="Avatar" />
                          <h3>Database</h3>
                        </div>
                        <div className="flip-card-back">
                          <h3>Database</h3>
                          <ul>
                            <li>MySQL</li>
                            <li>Oracle</li>
                            <li>MongoDB</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img src="servers.png" alt="Avatar" />
                          <h3>Servers</h3>
                        </div>
                        <div className="flip-card-back">
                          <h3>Servers</h3>
                          <ul>
                            <li>Amazon web services</li>
                            <li>Google cloud</li>
                            <li>Azure</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-four sec-four-approach">
          <div className="container">
            <div className="row sec-four-one wrapper">
              <div className="col-md-6 time-sidebar">
                <h3>Our Approach</h3>
                <p>
                  Drawing on years of experience collaborating with sellers
                  worldwide, we've crafted a highly effective methodology for
                  comprehending, planning, and executing website enablement
                  processes.
                </p>
              </div>
              <div className="col-md-6 time-main">
                <div className="t-container">
                  <div className="timeline">
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="fa-regular fa-newspaper" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Gathering Requirements</span>
                        </h4>
                      </div>
                    </div>
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="fa-solid fa-pen-ruler" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">
                            Analyzing and Designing Requirements
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="fa-solid fa-timeline" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">
                            Evaluating Project Timeline
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="fa-regular fa-file-code" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">
                            Implementing Programmatically
                          </span>
                        </h4>
                      </div>
                    </div>
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="fa-solid fa-chalkboard-user" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Testing</span>
                        </h4>
                      </div>
                    </div>
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="fa-solid fa-gears" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Deployment</span>
                        </h4>
                      </div>
                    </div>
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="fa-solid fa-gift" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Production</span>
                        </h4>
                      </div>
                    </div>
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="far fa-grin" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Final Live Roll Out</span>
                        </h4>
                      </div>
                    </div>
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="fa-solid fa-group-arrows-rotate" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Marketing and Promotion</span>
                        </h4>
                      </div>
                    </div>
                    <div className="timeline-container testing">
                      <div className="timeline-icon">
                        <i className="fa-solid fa-arrow-up-right-dots" />
                      </div>
                      <div className="timeline-body">
                        <h4 className="timeline-title">
                          <span className="badge">Adaptation and Growth</span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="clearfix"></div>
            <div className="row sec-four-two">
              <h2 className="lookingbox">
                Are you looking for customized ecommerce business solutions?
              </h2>
              <a onClick={scrollToLeadForm}>Connect with an expert</a>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="sec-five whychoosenew">
          {" "}
          <div className="container">
            <div className="row">
              <div className="col-md-5 sec-five-one">
                <h2>Why Choose NextUpgrad?</h2>
                <p>
                  We prioritize our customers’ best interests, incorporating
                  cutting-edge innovations and staying abreast of the latest
                  trends. Our services offer the freedom of personalization and
                  customization. Backed by our experience in delivering
                  excellence, we have earned recognition as a premier ‘Website
                  Solution Provider’ in the industry.
                </p>
              </div>
              <div className="col-md-7 sec-five-two">
                <div className="col-md-4">
                  <div className="icn-box">
                    <img src="web1.webp" alt="" />
                    <h3>5000 +</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icn-box">
                    <img src="web2.webp" alt="" />
                    <h3>2500 +</h3>
                    <p>Website Designed</p>
                  </div>
                  <div className="icn-box">
                    <img src="web3.webp" alt="" />
                    <h3>5 +</h3>
                    <p>Countries</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icn-box">
                    <img src="web4.webp" alt="" />
                    <h3>500 +</h3>
                    <p>Professionals</p>
                  </div>
                  <div className="icn-box">
                    <img src="web5.webp" alt="" />
                    <h3>1500 +</h3>
                    <p>
                      Customized
                      <br />
                      Solutions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="testimonials mt-5 ">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2 className="text-center"> Success Stories</h2>
              </div>
            </div>
          </div>
        </div>
        <Cards4 />
        <div className="video_testimonials landivideo mt-5 pt-5 ">
          <div className="container">
            <h3 className="text-center">Video Testimonial</h3>
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
                    <h2 className="mt-3">
                      Craft Dynamic Websites and Upgrade Your Business
                    </h2>
                    <p>
                      I’m working with nextupgrad since april and these guys are
                      amazing team. They have been there from day 1 for me. They
                      also worked on weekends just to make sure my website and
                      products were up to the standard.
                    </p>
                    {/* <p> </p> */}
                    <h3>Patrick, Founder Profile Ace</h3>
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
              <div className="col-md-12">
                <h2 className="text-center">Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
        </div>
        <section className="container pb-5  ">
          <HomeAccordian />
        </section>
        <div className="sec-sev landingneesletter">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ftr-subs landinnewletter">
                <h2>
                  Subscribe to our newsletter to stay in touch with the latest.
                </h2>
                <form onSubmit={handleSubmit2}>
                  <div className="mail-inpt">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mail-sub">
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
              <div className="sec-sev-hd col-md-8 ">
                <h2>Have additional inquiries?</h2>

                <p>
                  Need more information? Chat with our friendly team for
                  assistance.
                </p>
                <div>
                  <a href="https://join.skype.com/wsiGi9CXzLhD" target="_blank">
                    <i className="bi bi-skype skicon" />
                  </a>
                  <a href="mailto:sales@nextupgrad.us">
                    <i className="bi bi-envelope-fill mlicon" />
                  </a>
                  <a href="https://api.whatsapp.com/send/?phone=%2B14087865558&text&type=phone_number&app_absent=0">
                    <i className="bi bi-whatsapp wpicon" />
                  </a>
                  <a href="mailTo:hello@nextupgrad.us">
                    <i className="bi bi-envelope-at mlicon"></i>
                  </a>
                  <a href="tel:+1(408)786-5558">
                    <i class="bi bi-telephone-fill skicon"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
