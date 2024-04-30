import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function HomeAccordion() {
  return (
    <Accordion defaultActiveKey="0">
      <Row>
        <Col>
          <Accordion.Item className="my-4" eventKey="0">
            <Accordion.Header>
              How many hours will a resource work on my project each day?
            </Accordion.Header>
            <Accordion.Body>
              Resource allocation is project-dependent. Typically, resources are
              assigned for 8 hours per day and 40 hours per week.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="2">
            <Accordion.Header>
              Can I monitor the ongoing progress of my project?
            </Accordion.Header>
            <Accordion.Body>
              Yes, you will have centralized access to tasks performed by
              dedicated resources, allowing you to track daily status updates.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="4">
            <Accordion.Header>
              What if the resource assigned to my project is unable to work for
              any reason?
            </Accordion.Header>
            <Accordion.Body>
              You will be provided with a shadow resource of equivalent
              experience and expertise at no additional cost.
            </Accordion.Body>
          </Accordion.Item>
        </Col>
        <Col>
          <Accordion.Item className="my-4" eventKey="1">
            <Accordion.Header>
              What pricing models are available for projects?
            </Accordion.Header>
            <Accordion.Body>
              There are four pricing models to choose from: Fixed Price, Hourly
              Price, Block of Hours, and Dedicated Resource.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="3">
            <Accordion.Header>
              What happens if a bug arises shortly after project delivery?
            </Accordion.Header>
            <Accordion.Body>
              In such cases, you are entitled to receive free maintenance
              service for one month from the mutually agreed-upon project
              delivery date.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="5">
            <Accordion.Header>
              Do you offer emergency support for critical issues outside
              business hours?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we provide emergency support for critical issues outside
              regular business hours. Feel free to contact us directly through
              Skype, WhatsApp, email, or by phone.
            </Accordion.Body>
          </Accordion.Item>
        </Col>
      </Row>
    </Accordion>
  );
}

export default HomeAccordion;
