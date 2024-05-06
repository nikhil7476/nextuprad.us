import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import { Form, Button } from "react-bootstrap";
const conatactus = () => {
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
      <main className="maincontact">
        <div className="contactbox">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="contactdetails">
                  <h1>Contact Us</h1>
                  <div className="row">
                    <div className="col-md-6">
                      <h3>Sales & Support Team</h3>
                      <p>sales@nextupgrad.us</p>{" "}
                    </div>

                    <div className="col-md-6">
                      <Link
                        className="elementor-buttoncontact"
                        href="mailto:sales@nextupgrad.us"
                      >
                        Connect
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <h3>Business & Queries</h3>
                      <p>hello@nextupgrad.us</p>{" "}
                    </div>
                    <div className="col-md-6">
                      <Link
                        className="elementor-buttoncontact"
                        href="mailto:hello@nextupgrad.us"
                      >
                        Connect
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <h3>Book a call with us</h3>
                      <Link
                        href="https://calendly.com/ron-wilsonbdm/service"
                        target="_blank"
                        rel="nofollow"
                        className="svgbutton"
                      >
                        <svg
                          aria-hidden="true"
                          className="e-font-icon-svg e-fas-phone-alt"
                          viewBox="0 0 512 512"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                        </svg>{" "}
                        <div>Click Here</div>
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <h3>Book a call with us</h3>
                      <Link
                        href="https://calendly.com/ron-wilsonbdm/service"
                        target="_blank"
                        rel="nofollow"
                        className="svgbutton"
                      >
                        <div>
                          <svg
                            aria-hidden="true"
                            className="e-font-icon-svg e-fas-phone-alt "
                            viewBox="0 0 512 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path>
                          </svg>
                          <div className="">Click Here</div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="contactimg">
                  <img src="/contact.webp" alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactphone">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h2>Call Us At</h2>
                <Link href="tel:+1%20(408)%20400-3232">+1 (408) 400-3232</Link>
                <Link href="tel:+1%20(408)%20786-5558">+1 (408) 786-5558</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="contactvisit">
          <div className="container">
            <div className="row">
              <h2>Visit Us At</h2>
              <div className="col-md-4">
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 1 }}
                  className="image-container"
                >
                  <motion.img
                    src="/usa1.webp"
                    alt="image"
                    initial={{ opacity: 0, scale: 0.5, x: "50%", y: "-50%" }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
                <h3>USA</h3>
                <h4>New York</h4>
                <p>244 Fifth Avenue, Suite D261 New York, N.Y. 10001</p>
              </div>
              <div className="col-md-4">
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 1 }}
                  className="image-container"
                >
                  <motion.img
                    src="/abudabhi3.webp"
                    alt="image"
                    initial={{ opacity: 0, scale: 0.5, x: "50%", y: "-50%" }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                <h3>UAE</h3>
                <h4>Abu Dhabi</h4>
                <p>
                  05-2nd Floor, Hamdan Bin Mohammed St- Zone 1- E3-02, Abu Dhabi
                </p>
              </div>
              <div className="col-md-4">
                <motion.div
                  whileHover={{ scale: 1.1, zIndex: 1 }}
                  className="image-container"
                >
                  <motion.img
                    src="/lko2.webp"
                    alt="image"
                    initial={{ opacity: 0, scale: 0.5, x: "50%", y: "-50%" }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>

                <h3>INDIA</h3>
                <h4>Lucknow, UP</h4>
                <p>5/99 Vikas Khand Gomti Nagar, Lucknow,India</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contactform">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h2>Well then!</h2>
                <p>
                  Ready to take your project to the next level?
                  <br />
                  Provide the necessary details in the form, and our dedicated
                  team will reach out promptly.
                  <br />
                  Let’s transform your ideas into reality by addressing all
                  yourqueries.
                  <br />
                  We look forward to connecting with you!
                </p>
                <Form>
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
                    <button className="w-100 mt-5 contactFormBtn">
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default conatactus;
