import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FaqHiring() {
  return (
    <Accordion defaultActiveKey="0">
      <Row>
        <Col>
          <Accordion.Item className="my-4" eventKey="0">
            <Accordion.Header>
              what is the process of hiring dedicated developers from NextUpgrad
            </Accordion.Header>
            <Accordion.Body>
              Hiring dedicated developers from NextUpgrad is a straightforward
              process : Provide us with the details of your project
              requirements. Our team carefully examines your specifications to
              understand the scope of your project. We share the resumes of our
              top dedicated developers with expertise in relevant technologies.
              Our team provides guidance on the next steps to proceed with the
              hiring process. It's that simple! Get started by sharing your
              project details, and let NextUpgrad take care of the rest.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="2">
            <Accordion.Header>
              What factors should be taken into account when hiring dedicated
              developers?
            </Accordion.Header>
            <Accordion.Body>
              Identify the nature of your project, whether it is local,
              international, or a multi-store endeavor. Opt for a company that
              offers dedicated developers and is known for its service-oriented
              approach. Ensure that the developers provided by the company are
              certified, demonstrating their proficiency and credibility.
              Thoroughly assess the technical skills of the chosen developers to
              confirm alignment with your project requirements.
            </Accordion.Body>
          </Accordion.Item>
        </Col>
        <Col>
          <Accordion.Item className="my-4" eventKey="1">
            <Accordion.Header>
              How to select the ideal developers for your project?
            </Accordion.Header>
            <Accordion.Body>
              The initial crucial step involves gathering comprehensive details,
              including years of experience, previous projects, client feedback,
              and skill sets. A minimum of 5 years of experience, coupled with
              demonstrated expertise in the required technology, is essential.
              Seek developers who excel in communication and are receptive to
              feedback.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="3">
            <Accordion.Header>
              What are the expenses associated with hiring a dedicated
              developer?
            </Accordion.Header>
            <Accordion.Body>
              The cost of hiring a dedicated developer varies based on several
              factors, such as - The type of project The number of developers
              required The hiring duration Specific project requirements The
              complexity of the project. NextUpgrad offers a streamlined process
              to easily hire dedicated developers with the required technology
              expertise, ensuring your project is completed to the highest
              standards.
            </Accordion.Body>
          </Accordion.Item>
        </Col>
      </Row>
    </Accordion>
  );
}

export default FaqHiring;
