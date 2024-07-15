import Link from "next/link";
import { Form, Button } from "react-bootstrap";
import HomeAccordian from "@/components/HomeAccordian";
import styles from "../styles/Hiring.module.css";
import FaqHiring from "../components/faqHiring";
import { useState } from "react";
import axiosInstance from "@/axios/axios";
import Head from "next/head";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";
const Hirededicateddeveloper = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    form_name: "hire_dedicated_form",
  });
  const [errors, setErrors] = useState({});
  const [recaptcha, setRecaptcha] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
            form_name: "hire_dedicated_form",
          });
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle error response
      }
    }
  };
  return (
    <>
      <Head>
        <title>Hire Dedicated Developers - NextUpgrad USA</title>
        <meta name="title" content="Nextupgrad" />
        <meta
          name="description"
          content="Scale your team, fill skill gaps, and manage costs effectively. Hire dedicated developers for web, mobile, and more. Get tailored talent based on tech needs."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nextupgrad.us/" />
        <meta property="og:title" content="Nextupgrad" />
        <meta
          property="og:description"
          content="Scale your team, fill skill gaps, and manage costs effectively. Hire dedicated developers for web, mobile, and more. Get tailored talent based on tech needs."
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
      </Head>
      <main id="sec">
        <div className="container">
          <div className="row">
            <div className="sec1 col-md-6">
              <h1>
                Hire Dedicated <br />
                Developer
              </h1>
              <p>
                With a commitment to delivering projects of exceptional standard
                and quality, NextUpgrad offers a unique opportunity to deploy
                dedicated developers. These professionals bring a wealth of
                experience from a diverse pool of technologies, ensuring the
                right skills and expertise for successful project execution.
              </p>
              <Link href="/contact-us">
                <button id="btn">Place your inquiry</button>
              </Link>
              <div className="part">
                <div className="part1">
                  <img src="professional (1).png" alt="Adobe Certified" />
                </div>
                <div className="part2">
                  <img src="professional (1).png" alt="Adobe Certified" />
                </div>
                <div className="part3">
                  <img src="bronze.png" alt="Bronze Soltuion Partner" />
                </div>
              </div>
            </div>
            <div className="sec2 col-md-6">
              <img
                className={`${styles.bannerimg}`}
                src="hire-banner.webp"
                alt="Hire Dedicated
                Developer"
              />
            </div>
          </div>
        </div>
      </main>
      <section className={`${styles.section2piy} `}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2 className={`${styles.skills}`}>
                Skills held by NextUpgrad's dedicated developers.
              </h2>
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
              {/* <Form onSubmit={handleSubmit} className={`${styles.hiringForm}`}>
                <Form.Group controlId="formName">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    type="text"
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
                    rows={5}
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center">
                  <button className="w-100 mt-5 contactFormBtn" type="submit">
                    Submit
                  </button>
                </div>
              </Form> */}
              <Form onSubmit={handleSubmit} className={`${styles.hiringForm}`}>
                <Form.Group controlId="formName">
                  <Form.Label>Your name</Form.Label>
                  <Form.Control
                    type="text"
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
                    rows={5}
                    placeholder="Enter your message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  />
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
                    className="w-100 mt-5 contactFormBtn"
                    type="submit"
                    disabled={!recaptcha}
                  >
                    Submit
                  </button>
                </div>
              </Form>
            </div>{" "}
          </div>
        </div>
      </section>
      {/* <section id="sect">
        <div className="sec1">
          <span className="line" />
          <h1>
            Skills held by <br />
            NextUpgrad's
            <br /> dedicated developers.
          </h1>
          <p>
            Embark on a journey of unique solutions with a dedicated developer
            from NextUpgrad. Our certified professionals are ready to connect
            the dots and deliver top-notch quality at your service.
          </p>
          <div className="del">
            <div className="del1">
              <p>Theme Development</p>
            </div>
            <div className="del2">
              <p>API Integration</p>
            </div>
            <div className="del3">
              <p>Performance Optimization</p>
            </div>
          </div>
          <div className="del">
            <div className="del4">
              <p>Security Implementation</p>
            </div>
            <div className="del5">
              <p>System Design &amp; Architecture</p>
            </div>
            <div className="del6">
              <p>Community &amp; Social Engagement</p>
            </div>
          </div>
        </div>
        <div className="seci2">
          <form action="">
            <label htmlFor="">
              Your name <br />
              <input type="text" />
            </label>
            <label htmlFor="">
              Your email <br />
              <input type="email" />
            </label>
            <label htmlFor="">
              Subject <br />
              <input type="text" />
            </label>
            <label htmlFor="">
              Your Message (optional) <br />
              <textarea name="" id="" cols={60} rows={17} defaultValue={""} />
            </label>
            <button id="btn2">Submit</button>
          </form>
        </div>
      </section> */}
      <section id="exp" className="mx-5">
        <div className="container">
          <div className="exp1">
            <h2 className={`${styles.devex}`}>Our Developer Expertise</h2>{" "}
            {/*<span className="line1" />*/}
          </div>
          <div className={`${styles.exp2}`}>
            <div className="exp211">
              <img src="hire1 (1).webp" alt="Proficiency" />
              <p>
                Proficiency in building and styling web pages, along with
                interactivity using JavaScript and libraries like React,
                Angular, or Vue.js.
              </p>
            </div>
            <div className="exp212">
              <img src="hire2.webp" alt="Competence" />
              <p>
                Competence in server-side language, such as Node.js, Python
                (Django/Flask), Ruby (Ruby on Rails), Java, or PHP.
              </p>
            </div>
            <div className="exp213">
              <img src="hire3.webp" alt="Strong knowledge" />
              <p>
                Strong knowledge of version control systems, especially Git, for
                collaborative development along with BitBucket, etc
              </p>
            </div>
            <div className="exp214">
              <img
                src="hire4.webp"
                alt=" Control over fundamental design principles"
              />
              <p>
                Control over fundamental design principles, collaborating with
                designers using tools such as Figma or Sketch.
              </p>
            </div>
            <div className="exp215">
              <img src="hire5.webp" alt="Good communication skills" />
              <p>
                Good communication skills for the collaborating team mates with
                team members and designers and stakeholders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="expt">
        <div className="container">
          <div className="expt1 mx-5">
            <h2 className={`${styles.benhire}`}>
              Benefits of hiring dedicated resource from NextUpgrad
            </h2>
             {/*<span className="line1" />*/}
          </div>
          <div className="expt2">
            <div className="exp21">
              <img src="ded1.webp" alt="Expertise and Experience" />
              <h3 className={`${styles.h3ded}`}>Expertise and Experience</h3>
              <p>
                Proficiency in building and styling web pages, along with
                interactivity using JavaScript and libraries like React,
                Angular, or Vue.js.
              </p>
            </div>
            <div className="exp21">
              <img src="ded2.webp" alt="Cost-Efficiency" />
              <h3 className={`${styles.h3ded}`}>Cost-Efficiency</h3>
              <p>
                Competence in server-side language, such as Node.js, Python
                (Django/Flask), Ruby (Ruby on Rails), Java, or PHP.
              </p>
            </div>
            <div className="exp21">
              <img src="ded3.webp" alt="Flexibility and Scalability" />
              <h3 className={`${styles.h3ded}`}>Flexibility and Scalability</h3>
              <p>
                Strong knowledge of version control systems, especially Git, for
                collaborative development along with BitBucket, etc
              </p>
            </div>

            <div className="exp21">
              <img src="ded4.webp" alt="Quality Assurance" />
              <h3 className={`${styles.h3ded}`}>Quality Assurance</h3>
              <p>
                NextUpgrad's dedicated developers are committed to delivering
                high-quality code, reducing the likelihood of errors and
                ensuring a robust final product.
              </p>
            </div>
            <div className="exp21">
              <img src="ded5.webp" alt="Trimmed Admin Costs" />
              <h3 className={`${styles.h3ded}`}>Trimmed Admin Costs</h3>
              <p>
                Minimize the burden of project management tasks as NextUpgrad
                takes care of administrative responsibilities, allowing you to
                focus on core business activities.
              </p>
            </div>
            <div className="exp21">
              <img src="ded6.webp" alt="Focused Attention" />
              <h3 className={`${styles.h3ded}`}>Focused Attention</h3>
              <p>
                A dedicated developer provides undivided attention to your
                project, fostering a deeper understanding of your goals and
                requirements.
              </p>
            </div>
          </div>{" "}
        </div>
      </section>
      <section id="skill">
        <div className="container">
          <div className="row">
            <div className="skill1 col-md-8">
              <h2 className={`${styles.getstrt}`}>
                Get started now! Contact our skilled developers to bring your
                ideas to life.
              </h2>{" "}
               {/*<span className="line1" />*/}
            </div>
            <div className="skill2  col-md-4">
              <Link href="/contact-us">
                <button id="btn1">Schedule a Meeting</button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section id="adapt">
        <div className="container">
          <div className="ada row">
            <div className="ada1 col-md-6">
              <h2 className={`${styles.adptmd}`}>Adaptable Hiring Model</h2>
               {/*<span className="line1" />*/}
            </div>
            <div className="ada2  col-md-6">
              <p>
                Ready to onboard dedicated developers? Discover our tailored
                pricing solutions
              </p>
            </div>
          </div>
          <div className="adap row">
            <div className="adap1  col-md-4">
              <h3 className={`${styles.payuse}`}>Pay-Per-Use</h3>
              <img src="img-4-removebg-preview.png" alt="Pay-per-use" />
              <p>
                No commitment required. Simply pay for the duration you require
                our developer to manage your project.
              </p>
            </div>
            <div className="adap2   col-md-4">
              <h3 className={`${styles.payuse}`}>Block of Hours</h3>
              <img src="img-3-removebg-preview.png" alt="Pay-per-use" />
              <p>
                Built on the concept of “the more you buy, the less you pay,” 
                this package enables you to pay based on a fixed monthly allocation 
                of working hours.
              </p>
            </div>
            <div className="adap3   col-md-4">
              <h3 className={`${styles.payuse}`}>Monthly Basis</h3>
              <img src="img-2-removebg-preview.png" alt="Pay-per-use" />
              <p>
                Choose a subscription-based payment model when you need ongoing technical 
                support for your long-term projects from our developers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="last">
        <div className="container">
          <div className="last1 row">
            <div className="last1 col-md-7">
              <h2 className={`${styles.comrea}`}>
                Compelling Reasons to Engage Dedicated Developers at NextUpgrad
              </h2>{" "}
               {/*<span className="line1" />*/}
              <ul className="list1">
                <li className="li1">
                  <span>Certified Developers :</span>
                  Our exceptionally skilled team is prepared to tackle the most
                  intricate projects.
                </li>
                <li className="li1">
                  <span>Reliable Support :</span>
                  Our established communication channels guarantee constant
                  availability for assistance at all times.
                </li>
                <li className="li1">
                  <span>Tailored Solutions :</span>
                  Let your brand’s unique personality shine through with our
                  developers, who can bring your unconventional concepts to
                  life.
                </li>
                <li className="li1">
                  <span>Client-Centric Focus :</span>
                  Placing clients at the core of our strategy, we aim to ensure
                  every investment counts.
                </li>
                <li className="li1">
                  <span>All-in-One Solution :</span>
                  From ideation to project execution, we’ve got everything
                  covered for you.
                </li>
              </ul>
            </div>
            <div className="sl1 col-md-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="sl11">
                    <img src="teams.png" alt="Teams" />
                    <h3 className={`${styles.cnthea}`}>10+</h3>
                    <p>Teams</p>
                  </div>
                  <div className="sl12">
                    <img
                      src="years-of-Experience.png"
                      alt="Years in Industry"
                    />
                    <h3 className={`${styles.cnthea}`}>15+</h3>
                    <p>Years in Industry</p>
                  </div>
                  <div className="sl13">
                    <img src="satisfied-customers.png" alt="Happy Patron" />
                    <h3 className={`${styles.cnthea}`}>3500+</h3>
                    <p>Happy Patron</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="sl14">
                    <img src="global-partners.png" alt="Company Partnerships" />
                    <h3 className={`${styles.cnthea}`}>50+</h3>
                    <p>Company Partnerships</p>
                  </div>
                  <div className="sl15">
                    <img
                      src="awards-and-accolades.png"
                      alt="Community Project Contribution"
                    />
                    <h3 className={`${styles.cnthea}`}>500+</h3>
                    <p>Community Project Contribution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="testimonials mt-5 pt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h2>Frequently Asked Questions</h2>
              </div>
            </div>
          </div>
        </div>
        <section className="container pb-5  ">
          <FaqHiring />
        </section>
      </section>
    </>
  );
};

export default Hirededicateddeveloper;
