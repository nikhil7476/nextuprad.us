import WebDevSlider from "@/components/webDevSlider";
import HomeAccordian from "@/components/HomeAccordian";
import Head from "next/head";
import FaqWebdev from "@/components/faqWebDev";
import Link from "next/link";
const Webdesign = () => {
  return (
    <>
      <Head>
        <title>Website Design and Development Services with NextUpgrad USA</title>
        <meta name="title" content="Nextupgrad" />
        <meta
          name="description"
          content="Ready to convert visitors into customers? Hire the leading website design and development company to create a static website for complex web applications."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="Ready to convert visitors into customers? Hire the leading website design and development company to create a static website for complex web applications."
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
          content="Scale your team, fill skill gaps, and manage costs effectively. Hire dedicated developers for web, mobile, and more. Get tailored talent based on tech needs."
        />
        <meta
          property="twitter:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />
         <meta
          property="Website Design and Development Services with NextUpgrad USA"
          content="Ready to convert visitors into customers? Hire the market's leading website design and development company to create a static website for complex web applications"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"></link>
      </Head>
      <WebDevSlider />
      <div>
        <div className="sec-two">
          <div className="container ">
            <h1 className="text-center">
              Website Design and Development Service
            </h1>
            <div className="row">
              <div className="col-md-6 img-box">
                <div className="sec-two-box">
                  <img
                    src="custom_developement.png"
                    alt="Custom Website Development"
                  />
                  <h2>Custom Website Development</h2>
                </div>
                <p>
                  We create uniquely tailored websites, employing custom coding
                  for seamless front-end and back-end development.
                </p>
              </div>
              <div className="col-md-6 img-box">
                <div className="sec-two-box">
                  <img src="cms.png" alt="CMS Integration" />
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
                  <img src="ecom.png" alt="E-Commerce Development" />
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
                  <img src="full_stack.png" alt="Full Stack" />
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
                  <img src="web-security.png" alt="Web Security" />
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
                  <img src="training.png" alt="Training and Documentation" />
                  <h2>Training and Documentation</h2>
                </div>
                <p>
                  Empowering you through training on website usage and
                  maintenance, coupled with comprehensive documentation of
                  architecture and functionalities.
                </p>
              </div>
            </div>
            <Link href="/contact-us" className="sec-two-btn">
              Consult Expert Now!
            </Link>
          </div>
        </div>
        <div className="sec-three">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Nextupgrad Technology Platform Ecosystem</h2>
                <p>
                  Unlock Business Growth with Tailored Solutions for Leading
                  Technology Platforms.
                </p>
                <Link href="/contact-us" className="sec-three-btn">
                  Let's Discuss!
                </Link>
              </div>
              <div className="col-md-6">
                <div className="row">
                  <div className="col-md-4">
                    <div className="flip-card">
                      <div className="flip-card-inner">
                        <div className="flip-card-front">
                          <img src="frontend.png" alt="Front-end" />
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
                          <img src="backend.png" alt="Back-end" />
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
                          <img
                            src="project-management.png"
                            alt="Project Management"
                          />
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
                          <img src="mobile-app.png" alt="CMS" />
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
                          <img src="database.png" alt="Database" />
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
                          <img src="servers.png" alt="Servers" />
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
                <h2>Our Approach</h2>
                <p>
                Based on our  extensive experience over the years working with various 
                clients across the globe, we have developed a highly effective and 
                sophisticated methodology for understanding, planning and implementing 
                a comprehensive website activation process. Through this collaboration, 
                we have gained valuable insights and refined strategies that have enabled 
                us to ensure a seamless and successful 
                implementation tailored to the unique needs and goals of each client.
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
              <a href="#">Connect with an expert</a>
            </div>
          </div>
        </div>
        <div className="clearfix" />
        <div className="sec-five">
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
                    <img src="web1.webp" alt="Happy Clients" />
                    <h3>5000 +</h3>
                    <p>Happy Clients</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icn-box">
                    <img src="web2.webp" alt="Website Designed" />
                    <h3>2500 +</h3>
                    <p>Website Designed</p>
                  </div>
                  <div className="icn-box">
                    <img src="web3.webp" alt="Countries" />
                    <h3>5 +</h3>
                    <p>Countries</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="icn-box">
                    <img src="web4.webp" alt="Professionals" />
                    <h3>500 +</h3>
                    <p>Professionals</p>
                  </div>
                  <div className="icn-box">
                    <img src="web5.webp" alt="Customized Solutions" />
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
                <h2 className="text-center">Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
        </div>
        <section className="container pb-5  ">
          <FaqWebdev />
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

export default Webdesign;
