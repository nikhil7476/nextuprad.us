import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FaqWebdev() {
  return (
    <Accordion defaultActiveKey="0">
      <Row>
        <Col>
          <Accordion.Item className="my-4" eventKey="0">
            <Accordion.Header>
              How long does it take to develop a website?
            </Accordion.Header>
            <Accordion.Body>
              The timeline varies based on complexity and features. We provide
              estimates after discussing your requirements.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="1">
            <Accordion.Header>
              What is the cost of website development?
            </Accordion.Header>
            <Accordion.Body>
              osts depend on factors like features, design, and functionality.
              We offer customized quotes tailored to your needs.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="my-4" eventKey="2">
            <Accordion.Header>
              Do I need technical expertise to manage my website?
            </Accordion.Header>
            <Accordion.Body>
              No, we provide user-friendly interfaces and training. However, we
              offer ongoing support if you ever need assistance.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="3">
            <Accordion.Header>
              Can I update the content on my website myself?
            </Accordion.Header>
            <Accordion.Body>
              Absolutely. We design websites with easy-to-use content management
              systems, enabling you to make updates without technical skills.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="4">
            <Accordion.Header>
              Will my website be mobile-friendly?
            </Accordion.Header>
            <Accordion.Body>
              Yes, all our websites are designed to be responsive, ensuring a
              seamless experience across various devices.
            </Accordion.Body>
          </Accordion.Item>
        </Col>

        <Col>
          <Accordion.Item className="my-4" eventKey="5">
            <Accordion.Header>
              How do you ensure the security of my website?
            </Accordion.Header>
            <Accordion.Body>
              We implement robust security measures, including SSL certificates
              and regular updates, to safeguard your website and data.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="6">
            <Accordion.Header>
              What support and maintenance services do you offer?
            </Accordion.Header>
            <Accordion.Body>
              We provide ongoing support, maintenance, and updates to ensure
              your website stays secure and up-to-date.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="my-4" eventKey="7">
            <Accordion.Header>
              What happens if I encounter issues after the website is live?
            </Accordion.Header>
            <Accordion.Body>
              We offer post-launch support to address any issues promptly and
              ensure your website continues to perform optimally.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="8">
            <Accordion.Header>
              Can you integrate third-party tools or systems into my website?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we can integrate various tools, plugins, and systems to
              enhance the functionality of your website.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="9">
            <Accordion.Header>
              Do you provide SEO services for my website?
            </Accordion.Header>
            <Accordion.Body>
              Yes, we offer SEO-friendly website development and can also
              provide ongoing SEO services to improve your website’s visibility.
            </Accordion.Body>
          </Accordion.Item>
        </Col>
      </Row>
    </Accordion>
  );
}

export default FaqWebdev;
