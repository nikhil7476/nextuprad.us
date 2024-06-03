// import React from "react";
// import { Container, Row, Col, Image } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const Project = () => {
//   const placeholderImage = "https://via.placeholder.com/300";

//   return (
//     <Container>
//       {/* First Banner */}
//       <Container className="py-5 text-center bg-light">
//         <Image src="banner-image-url.jpg" fluid />
//         <h1>Welcome to VideoBomb</h1>
//       </Container>

//       {/* Concept Content */}
//       <Row className="my-4 text-center">
//         <Col>
//           <h2>Concept Behind VideoBomb</h2>
//           <p>
//             Experience the exciting world of augmented reality through realistic
//             animated and 3D objects in the real world with VideoBomb. Combining
//             the concept of Augmented Reality & Machine learning, it enables
//             users to scan the popular tied-up products and play with their
//             latest videos and objects. The platform also allows them to share
//             their augmented reality experiences by sharing their location.
//           </p>
//         </Col>
//       </Row>

//       {/* Second Banner */}
//       <Container className="py-5 text-center bg-light">
//         <Image src="banner-image-url.jpg" fluid />
//         <h1>Problem Statement</h1>
//       </Container>

//       {/* Problem Statement Content */}
//       <Row className="my-4 text-center">
//         <Col>
//           <p>
//             The presence of multiple objects in multiple categories caused many
//             issues with keeping turnaround time in control. Integrating
//             different gestures control on a single screen was a bit complicated.
//             Minimizing external sound disturbance to deliver a lucid sound
//             effect to the added objects.
//           </p>
//         </Col>
//       </Row>

//       {/* Third Banner */}
//       <Container className="py-5 text-center bg-light">
//         <Image src="banner-image-url.jpg" fluid />
//       </Container>

//       {/* Client's Requirement Content */}
//       <Row className="my-4 text-center">
//         <Col>
//           <h2>Client’s Requirement</h2>
//           <p>
//             Desired an App with Augmented Reality functionality and the feature
//             to identify plain surfaces so that users can find suitable space to
//             put different AR objects. Functionality by which users can become
//             vendors and upload AR objects. Integration of Machine learning
//             concept for seamless integration of AR into the real world. To make
//             the AR experience more efficient for users, varied filtered VR
//             object categories were required.
//           </p>
//         </Col>
//       </Row>
//       <Container className="py-5 text-center bg-light">
//         <Image src="banner-image-url.jpg" fluid />
//       </Container>

//       <Row className="my-4 text-center">
//         <Col>
//           <h2>Value Delivered</h2>
//           <p>
//             Allowing objects to be uploaded in USDZ file format instead of SCN
//             overcame space management issues. Maintained a local Database (Core
//             DB) to allow the user to use an object multiple times without having
//             downloaded it or hit API again. Used MVVM (Model–View–ViewModel)
//             software architecture pattern to increase code usability. Integrated
//             varied gesture controllers to identify a particular gesture to
//             increase functionality.
//           </p>
//         </Col>
//       </Row>
//       {/* Image Gallery */}
//       <Row className="my-4">
//         <Col xs={12} md={6}>
//           <Image className="w-100" src={placeholderImage} fluid />
//         </Col>
//         <Col xs={12} md={6}>
//           <Image className="w-100" src={placeholderImage} fluid />
//         </Col>
//       </Row>
//       <Row className="my-4">
//         <Col xs={12} md={6}>
//           <Image className="w-100" src={placeholderImage} fluid />
//         </Col>
//         <Col xs={12} md={6}>
//           <Image className="w-100" src={placeholderImage} fluid />
//         </Col>
//       </Row>
//       <Row className="my-4">
//         <Col xs={12} md={6}>
//           <Image className="w-100" src={placeholderImage} fluid />
//         </Col>
//         <Col xs={12} md={6}>
//           <Image className="w-100" src={placeholderImage} fluid />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Project;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Project = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: "ease-in-out", // Easing function
      once: true, // Whether animation should happen only once
    });
  }, []);

  const placeholderImage = "https://via.placeholder.com/300";

  return (
    <Container>
      {/* First Banner */}
      <Container
        className="py-5 text-center position-relative "
        data-aos="fade-up"
      >
        <Image
          src="https://cdn.mobcoder.com/dist/images/portfolio-detail/case-detail-videobomb.png"
          fluid
        />

        <h1 className="mt-4">Welcome to VideoBomb</h1>
      </Container>

      {/* Concept Content */}
      <Row className="my-4 text-center" data-aos="fade-up">
        <Col>
          <h2>Concept Behind VideoBomb</h2>
          <p>
            Experience the exciting world of augmented reality through realistic
            animated and 3D objects in the real world with VideoBomb. Combining
            the concept of Augmented Reality & Machine learning, it enables
            users to scan the popular tied-up products and play with their
            latest videos and objects. The platform also allows them to share
            their augmented reality experiences by sharing their location.
          </p>
        </Col>
      </Row>

      {/* Second Banner */}
      <Container className="py-5 text-center " data-aos="fade-up">
        <Image
          src="https://cdn.mobcoder.com/dist/images/portfolio-detail/carbuddy-web-banner.png"
          fluid
        />
        <h1 className="mt-4">Problem Statement</h1>
      </Container>

      {/* Problem Statement Content */}
      <Row className="my-4 text-center" data-aos="fade-up">
        <Col>
          <p>
            The presence of multiple objects in multiple categories caused many
            issues with keeping turnaround time in control. Integrating
            different gestures control on a single screen was a bit complicated.
            Minimizing external sound disturbance to deliver a lucid sound
            effect to the added objects.
          </p>
        </Col>
      </Row>

      {/* Third Banner */}
      <Container className="py-5 text-center " data-aos="fade-up">
        <Image
          src="https://cdn.mobcoder.com/dist/images/portfolio-detail/videobomb-problem.png"
          fluid
        />
      </Container>

      {/* Client's Requirement Content */}
      <Row className="my-4 text-center" data-aos="fade-up">
        <Col>
          <h2>Client’s Requirement</h2>
          <p>
            Desired an App with Augmented Reality functionality and the feature
            to identify plain surfaces so that users can find suitable space to
            put different AR objects. Functionality by which users can become
            vendors and upload AR objects. Integration of Machine learning
            concept for seamless integration of AR into the real world. To make
            the AR experience more efficient for users, varied filtered VR
            object categories were required.
          </p>
        </Col>
      </Row>

      <Container className="py-5 text-center " data-aos="fade-up">
        <Image
          src="https://cdn.mobcoder.com/dist/images/portfolio-detail/videobomb-client-req.png"
          fluid
        />
      </Container>

      <Row className="my-4 text-center" data-aos="fade-up">
        <Col>
          <h2>Value Delivered</h2>
          <p>
            Allowing objects to be uploaded in USDZ file format instead of SCN
            overcame space management issues. Maintained a local Database (Core
            DB) to allow the user to use an object multiple times without having
            downloaded it or hit API again. Used MVVM (Model–View–ViewModel)
            software architecture pattern to increase code usability. Integrated
            varied gesture controllers to identify a particular gesture to
            increase functionality.
          </p>
        </Col>
      </Row>

      {/* Image Gallery */}
      <Row className="my-4" data-aos="fade-up">
        <Col xs={12} md={6}>
          <Image
            className="w-100"
            src={
              "https://cdn.mobcoder.com/dist/images/portfolio-detail/videobomb-logo-b.svg"
            }
            fluid
          />
        </Col>
        <Col xs={12} md={6}>
          <Image
            className="w-100"
            src={
              "https://cdn.mobcoder.com/dist/images/portfolio-detail/videobomb-app1.png"
            }
            fluid
          />
        </Col>
      </Row>
      <Row className="my-4" data-aos="fade-up">
        <Col xs={12} md={6}>
          <Image
            className="w-100"
            src={
              "https://cdn.mobcoder.com/dist/images/portfolio-detail/videobomb-app2.png"
            }
            fluid
          />
        </Col>
        <Col xs={12} md={6}>
          <Image
            className="w-100"
            src={
              "https://cdn.mobcoder.com/dist/images/portfolio-detail/videobomb-logo-b.svg"
            }
            fluid
          />
        </Col>
      </Row>
      <Row className="my-4" data-aos="fade-up">
        <Col xs={12} md={6}>
          <Image
            className="w-100"
            src={
              "https://cdn.mobcoder.com/dist/images/portfolio-detail/videobomb-app3.svg"
            }
            fluid
          />
        </Col>
        <Col xs={12} md={6}>
          <Image
            className="w-100"
            src={
              "https://cdn.mobcoder.com/dist/images/portfolio-detail/videobomb-app3.svg"
            }
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Project;
