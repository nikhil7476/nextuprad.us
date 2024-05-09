import WebDevSlider from "@/components/webDevSlider";
import HomeAccordian from "@/components/HomeAccordian";
import Head from "next/head";
import styles from "../styles/LandingPage.module.css";
import { Form, Button } from "react-bootstrap";
const LandingPage = () => {
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
      <section className={`${styles.section2piy} `}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Skills held by NextUpgrad's dedicated developers.</h1>
              <p className="my-4">
                Embark on a journey of unique solutions with a dedicated
                developer from NextUpgrad. Our certified professionals are ready
                to connect the dots and deliver top-notch quality at your
                service.
              </p>
              <div className={`${styles.innerSection} my-4`}>
                <span>Theme Development</span>
                <span>API Integration</span>
                <span>Performance Optimization</span>
                <span>Security Implementation</span>
                <span>System Design & Architecture</span>
                <span>Community & Social Engagement</span>
              </div>
            </div>
            <div className="col-md-6">
              <Form className={`${styles.hiringForm}`}>
                <Form.Group controlId="formName">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Your email</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>

                <Form.Group controlId="formSubject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" placeholder="Enter subject" />
                </Form.Group>

                <Form.Group controlId="formMessage">
                  <Form.Label>Your message (optional)</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Enter your message"
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <button className="w-100 mt-5 contactFormBtn">Submit</button>
                </div>
              </Form>
            </div>{" "}
          </div>
        </div>
      </section>
      <div>
        <div className="sec-two">
          <div className="container">
            <h1>Our Distinctive website development services</h1>
            <div className="row">
              <div className="col-md-6 img-box">
                <div className="sec-two-box">
                  <img src="custom_developement.png" alt="" />
                  <h2>Custom Website Development</h2>
                </div>
                <p>
                  We create uniquely tailored websites, employing custom coding
                  for seamless front-end and back-end development.
                </p>
              </div>
              <div className="col-md-6 img-box">
                <div className="sec-two-box">
                  <img src="cms.png" alt="" />
                  <h2>CMS Integration</h2>
                </div>
                <p>
                  Effortlessly manage content with seamless integration of CMS
                  platforms like WordPress, Drupal, or Joomla, enhanced by
                  expert customization of themes and templates to meet your
                  specific needs.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 img-box">
                <div className="sec-two-box">
                  <img src="ecom.png" alt="" />
                  <h2>E-Commerce Development</h2>
                </div>
                <p>
                  We expertly create and integrate online stores for businesses,
                  enhancing your e-commerce experience with seamless payment
                  gateways and advanced shopping cart features.
                </p>
              </div>
              <div className="col-md-6 img-box">
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
              <div className="col-md-6 img-box">
                <div className="sec-two-box">
                  <img src="web-security.png" alt="" />
                  <h2>Web Security</h2>
                </div>
                <p>
                  Implementing robust security measures, including SSL
                  certificate installation, to safeguard against common web
                  threats and ensure secure data transmission.
                </p>
              </div>
              <div className="col-md-6 img-box">
                <div className="sec-two-box">
                  <img src="training.png" alt="" />
                  <h2>Training and Documentation</h2>
                </div>
                <p>
                  Empowering you through training on website usage and
                  maintenance, coupled with comprehensive documentation of
                  architecture and functionalities.
                </p>
              </div>
            </div>
            <a href="#" className="sec-two-btn">
              Consult Expert Now!
            </a>
          </div>
        </div>
        <div className="sec-three">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Nextupgrad-Backend Technology Platform Ecosystem</h2>
                <p>
                  Unlock Business Growth with Tailored Solutions for Leading
                  Technology Platforms.
                </p>
                <a href="#" className="sec-three-btn">
                  Let's Discuss!
                </a>
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
        <div className="sec-four">
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
              <h2>
                Are you looking for customized ecommerce business solutions?
              </h2>
              <a href="#">Connect with an expert</a>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="sec-five">
          {" "}
          <div class="container">
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
        <div className="testimonials mt-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
        </div>
        <section className="container pb-5  ">
          <HomeAccordian />
        </section>
        <div className="sec-sev">
          <div className="container">
            <div className="sec-sev-hd">
              <h2>Have additional inquiries?</h2>
            </div>
            <p>
              Need more information? Chat with our friendly team for assistance.
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;