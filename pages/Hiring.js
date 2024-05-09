import Link from "next/link";
import { Form, Button } from "react-bootstrap";

import styles from "../styles/Hiring.module.css"

const hirededicateddeveloper = () => {
  return (
    <>
      <main id="sec">
        <div className="container">
          <div className="row">
        <div className="sec1 col-md-6">
          <h1>
            Hire Dedicated <br />
            Developer
          </h1>
          <p>
            With a commitment to delivering projects of exceptional standard and
            quality, NextUpgrad offers a unique opportunity to deploy dedicated
            developers. These professionals bring a wealth of experience from a
            diverse pool of technologies, ensuring the right skills and
            expertise for successful project execution.
          </p>
          <button id="btn">Place your inquiry</button>
          <div className="part">
            <div className="part1">
              <img src="professional (1).png" alt="img" />
            </div>
            <div className="part2">
              <img src="professional (1).png" alt="" />
            </div>
            <div className="part3">
              <img src="bronze.png" alt="" />
            </div>
          </div>
        </div>
        <div className="sec2 col-md-6">
          <img
            className={`${styles.bannerimg}`}
            src="hire-banner.webp"
            alt="img"
          />
        </div></div></div>
      </main>
      <section className={`${styles.section2piy} `}>
        <div className="container">
           <div className="row">
           <div className="col-md-6">
          <h1>Skills held by NextUpgrad's dedicated developers.</h1>
          <p className="my-4">
            Embark on a journey of unique solutions with a dedicated developer
            from NextUpgrad. Our certified professionals are ready to connect
            the dots and deliver top-notch quality at your service.
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
          </div> </div>
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
          <span className="line1" />
          <h1>Our Developer Expertise</h1>
        </div>
        <div className={`${styles.exp2}`}>
          <div className="exp211">
            <img src="hire1 (1).webp" alt="" />
            <p>
              Proficiency in building and styling web pages, along with
              interactivity using JavaScript and libraries like React, Angular,
              or Vue.js.
            </p>
          </div>
          <div className="exp212">
            <img src="hire2.webp" alt="" />
            <p>
              Competence in server-side language, such as Node.js, Python
              (Django/Flask), Ruby (Ruby on Rails), Java, or PHP.
            </p>
          </div>
          <div className="exp213">
            <img src="hire3.webp" alt="" />
            <p>
              Strong knowledge of version control systems, especially Git, for
              collaborative development along with BitBucket, etc
            </p>
          </div>
          <div className="exp214">
            <img src="hire4.webp" alt="" />
            <p>
              Control over fundamental design principles, collaborating with
              designers using tools such as Figma or Sketch.
            </p>
          </div>
          <div className="exp215">
            <img src="hire5.webp" alt="" />
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
          <span className="line1" />
          <h1>
            Benefits of hiring dedicated resource from NextUpgrad
          </h1>
        </div>
        <div className="expt2">
          <div className="exp21">
            <img src="ded1.webp" alt="" />
            <h1>Expertise and Experience</h1>
            <p>
              Proficiency in building and styling web pages, along with
              interactivity using JavaScript and libraries like React, Angular,
              or Vue.js.
            </p>
          </div>
          <div className="exp21">
            <img src="ded2.webp" alt="" />
            <h1>Cost-Efficiency</h1>
            <p>
              Competence in server-side language, such as Node.js, Python
              (Django/Flask), Ruby (Ruby on Rails), Java, or PHP.
            </p>
          </div>
          <div className="exp21">
            <img src="ded3.webp" alt="" />
            <h1>Flexibility and Scalability</h1>
            <p>
              Strong knowledge of version control systems, especially Git, for
              collaborative development along with BitBucket, etc
            </p>
          </div>

          <div className="exp21">
            
            <h1>Quality Assurance</h1>
            <p>
              NextUpgrad's dedicated developers are committed to delivering
              high-quality code, reducing the likelihood of errors and ensuring
              a robust final product.
            </p>
          </div>
          <div className="exp21">
           
            <h1>Trimmed Admin Costs</h1>
            <p>
              Minimize the burden of project management tasks as NextUpgrad
              takes care of administrative responsibilities, allowing you to
              focus on core business activities.
            </p>
          </div>
          <div className="exp21">
           
            <h1>Focused Attention</h1>
            <p>
              A dedicated developer provides undivided attention to your
              project, fostering a deeper understanding of your goals and
              requirements.
            </p>
          </div>
        </div> </div>
      </section>
      <section id="skill">
        <div className="container">
        <div className="row">
        <div className="skill1 col-md-8">
          <span className="line1 " />
          <h1>
            Get started now! Contact our skilled
            <br /> developers to bring your ideas to life.
          </h1>
        </div>
        <div className="skill2  col-md-4">
          <button id="btn1">Schedule a Meeting</button>
        </div>
        </div>
        </div>
      </section>
      <section id="adapt">
      <div className="container">
        <div className="ada row">
          <div className="ada1 col-md-6">
            <span className="line1" />
            <h1>Adaptable Hiring Model</h1>
          </div>
          <div className="ada2  col-md-6">
            <p>
              Ready to onboard dedicated developers? Discover our
              <br /> tailored pricing solutions
            </p>
          </div>
        </div>
        <div className="adap row">
          <div className="adap1  col-md-4">
            <h1>Pay-per-use</h1>
            <img src="img-4-removebg-preview.png" alt="" />
            <p>
              No commitment required. Simply pay for the duration you require
              our developer to manage your project.
            </p>
          </div>
          <div className="adap2   col-md-4">
            <h1>Pay-per-use</h1>
            <img src="img-3-removebg-preview.png" alt="" />
            <p>
              No commitment required. Simply pay for the duration you require
              our developer to manage your project.
            </p>
          </div>
          <div className="adap3   col-md-4">
            <h1>Pay-per-use</h1>
            <img src="img-2-removebg-preview.png" alt="" />
            <p>
              No commitment required. Simply pay for the duration you require
              our developer to manage your project.
            </p>
          </div>
        </div>
        </div>
      </section>
      <section id="last">
      <div className="container">
        <div className="last1 row">
          <div className="last1 col-md-7">
            <span className="line1" />
            <h1>
              Compelling Reasons to Engage Dedicated Developers at  NextUpgrad
            </h1>
          
            <ul className="list1">
              <li className="li1">
                <span>Certified Developers :</span>
                Our exceptionally skilled team is prepared to tackle the most intricate projects.
              </li>
              <li className="li1">
                <span>Reliable Support :</span>
                Our established communication channels guarantee constant availability for assistance at all
                times.
              </li>
              <li className="li1">
                <span>Tailored Solutions :</span>
                Let your brand’s unique personality shine through with our developers, who can bring your unconventional concepts to life.
              </li>
              <li className="li1">
                <span>Client-Centric Focus :</span>
                Placing clients at the core of our strategy, we aim to ensure every investment counts.
              </li>
              <li className="li1">
                <span>All-in-One Solution :</span>
                From ideation to project execution, we’ve got everything covered for you.
              </li>
            </ul>
          </div>
          <div className="sl1 col-md-5">  
          <div className="row"> 
          <div className="col-md-6">      
          <div className="sl11">
            <img src="teams.png" alt="" />
            <h1>10+</h1>
            <p>Teams</p>
          </div>
          <div className="sl12">
            <img src="years-of-Experience.png" alt="" />
            <h1>15+</h1>
            <p>Years in Industry</p>
          </div>
          <div className="sl13">
            <img src="satisfied-customers.png" alt="" />
            <h1>3500+</h1>
            <p>Happy Patron</p>
            </div>
            </div>
            <div className="col-md-6"> 
          <div className="sl14">
            <img src="global-partners.png" alt="" />
            <h1>50+</h1>
            <p>Company Partnerships</p>
          </div>
          <div className="sl15">
            <img src="awards-and-accolades.png" alt="" />
            <h1>500+</h1>
            <p>Community Project Contribution</p>
          </div>
          </div>
          </div>
          </div>
          
        </div>
         </div>
      </section>
    </>
  );
};

export default hirededicateddeveloper;
