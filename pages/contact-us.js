import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axiosInstance from "@/axios/axios";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";
import styles from "../styles/contactUs.module.css";
const Conatactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    form_name: "contact_form",
  });

  const [errors, setErrors] = useState({});
  const [recaptcha, setRecaptcha] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error if the field is corrected
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
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
            form_name: "contact_form",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error response here
      }
    }
  };
  return (
    <>
      <Head>
        <title>Contact US - NextUpgrad USA</title>
        <meta name="title" content="Nextupgrad" />
        <meta
          name="description"
          content="Contact us for personalized solutions. From inquiries to collaboration, we're here to support your needs. Reach out today, and let's shape your success together."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="Contact us for personalized solutions. From inquiries to collaboration, we're here to support your needs. Reach out today, and let's shape your success together."
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
          content="Contact us for personalized solutions. From inquiries to collaboration, we're here to support your needs. Reach out today, and let's shape your success together."
        />
        <meta
          property="twitter:image"
          content="https://nextupgrad.us/logo-2orange-1.png"
        />
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
                        Connect to Sales
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
                        Connect to Business
                      </Link>
                    </div>
                    <div className="col-md-6">
                      <h3>Book a call with us</h3>
                      <Link
                        href="tel:+1 (408) 786-5558"
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
                            className="e-font-icon-svg e-fab-skype"
                            viewBox="0 0 448 512"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
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
                  <img src="/contact.webp" alt="Contact Us" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contactphone">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
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
                    alt="USA"
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
                    alt="UAE"
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
                    alt="INDIA"
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
              </div>
              <div className="col-md-6 contactformmap">
              
              
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.790405992793!2d-73.99029452546645!3d40.744637235619244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a614ccab0b%3A0xf9f5eeef578aa3c4!2s244%205th%20Ave%20d261%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2sin!4v1719568200443!5m2!1sen!2sin"
                  width={"100%"}
                  height={330}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="col-md-6">
                {/* <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">                   
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">                   
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formSubject">                 
                    <Form.Control
                      type="text"
                      placeholder="Enter Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage">                   
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className="d-flex justify-content-center">
                    <button className="w-100 mt-1 contactFormBtn" type="submit">
                      Submit
                    </button>
                  </div>
                </Form> */}
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName">
                    <Form.Control
                      type="text"
                      placeholder="Enter Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Control
                      type="email"
                      placeholder="Enter Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formSubject">
                    <Form.Control
                      type="text"
                      placeholder="Enter Subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group controlId="formMessage">
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <div className={`captcha ${styles.contactPageRecaptcha}`}>
                    <ReCAPTCHA
                      sitekey="6LcsJt0pAAAAADojY-EwlCuhurrgweKE5lZS89lU"
                      onChange={(val) => {
                        console.log("recaptcha value", val);
                        setRecaptcha(val);
                      }}
                    />
                  </div>

                  <div className="d-flex justify-content-center">
                    <button className="w-100 mt-1 contactFormBtn" type="submit">
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

export default Conatactus;
