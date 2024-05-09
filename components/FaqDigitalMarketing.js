import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FaqDigitalMarketing() {
  return (
    <Accordion defaultActiveKey="0">
      <Row>
        <Col>
          <img src="/faq.webp" alt="" />
        </Col>

        <Col>
          <Accordion.Item className="my-4" eventKey="0">
            <Accordion.Header>
              What digital marketing services does your company provide?
            </Accordion.Header>
            <Accordion.Body>
              Nextupgrad offers a comprehensive suite of digital marketing
              services, including but not limited to SEO, social media
              management, content marketing, PPC advertising, email marketing,
              and more. Our goal is to provide end-to-end solutions for your
              online presence.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="my-4" eventKey="1">
            <Accordion.Header>
              What is the cost of website development?
            </Accordion.Header>
            <Accordion.Body>
              Digital marketing enhances your online visibility, attracts
              targeted audiences, and drives engagement. It can result in
              increased brand awareness, lead generation, and ultimately,
              improved conversion rates.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="my-4" eventKey="2">
            <Accordion.Header>
              How do I determine which digital marketing services are right for
              my business?
            </Accordion.Header>
            <Accordion.Body>
              Our Nextupgrad team conducts a thorough analysis of your business
              goals, target audience, and industry dynamics to recommend a
              unique digital marketing strategy. We prioritize services that
              align with your specific objectives and budget.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="my-4" eventKey="3">
            <Accordion.Header>
              What sets your digital marketing agency apart from others?
            </Accordion.Header>
            <Accordion.Body>
              Our agency distinguishes itself through a team of experts
              well-versed in the latest trends who know how to keep your
              business updated with new technologies or future advancements. We
              focus on delivering measurable results and fostering long-term
              partnerships with our clients.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item className="my-4" eventKey="5">
            <Accordion.Header>
              What is the typical timeline for seeing results from digital
              marketing efforts?
            </Accordion.Header>
            <Accordion.Body>
              The timeline varies based on the nature of the campaign and the
              goals set. Some results, like increased website traffic, can be
              seen relatively quickly, while others, such as sustained SEO
              improvements, may take a few months.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="my-4" eventKey="6">
            <Accordion.Header>
              How involved do I need to be in the digital marketing process?
            </Accordion.Header>
            <Accordion.Body>
              We value collaboration and input from our clients. While we handle
              the day-to-day management of campaigns, your insights and feedback
              are crucial. We keep you informed through regular updates and
              consultations.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item className="my-4" eventKey="4">
            <Accordion.Header>
              How do you measure the success of digital marketing campaigns?
            </Accordion.Header>
            <Accordion.Body>
              We employ various key performance indicators (KPIs) depending on
              your campaign objectives. Metrics such as website traffic,
              conversion rates, engagement, and return on investment (ROI) are
              regularly monitored and reported.
            </Accordion.Body>
          </Accordion.Item>
        </Col>
      </Row>
    </Accordion>
  );
}

export default FaqDigitalMarketing;
