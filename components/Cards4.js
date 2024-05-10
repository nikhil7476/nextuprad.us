import Tilt from "react-parallax-tilt";

const Cards4 = () => {
  return (
    <>
      <div className="softDevTestimonials">
        <Tilt
          style={{
            height: "320px",
            backgroundColor: "#eed0c2",
            borderRadius: "18px",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            style={{
              height: "350px",
              width: "350px",
              backgroundColor: "#eed0c2",
              borderRadius: "18px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="testimonialContainer">
              <img src="/test-4.png" alt="" />
              <div>
                <h5>BY MAVIN MCKINNY</h5>
                <h6>CREATIVE DIRECTOR</h6>
                <p className="mt-4">
                  "NextUpgrad exceeded my expectations in delivering a seamless
                  software solution for our business. The team's attention to
                  detail, expertise, and commitment to meeting our unique
                  requirements made the entire development process a pleasure.
                  Highly recommend their top-notch services!".
                </p>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div
            style={{
              height: "350px",
              width: "350px",
              backgroundColor: "#9b9b9b",
              borderRadius: "18px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="testimonialContainer">
              <img src="/test-1.png" alt="" />
              <div>
                <h5>BY MARK T.</h5>
                <h6>CTO</h6>
                <p className="mt-4">
                  "Working with NextUpgrad was a fantastic experience. Their
                  team not only delivered a high-quality software solution but
                  also showed a genuine interest in the success of our business.
                  Their proactive problem-solving and post-launch solidified our
                  trust in their expertise. We're grateful for the excellent
                  service provided."
                </p>
              </div>
            </div>
          </div>
        </Tilt>
        <Tilt>
          <div
            style={{
              height: "350px",
              width: "350px",
              backgroundColor: "#dcdcdc",
              borderRadius: "18px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }}
          >
            <div className="testimonialContainer">
              <img src="/test-2.png" alt="" />
              <div>
                <h5>BY MICHAEL THOMPSON</h5>
                <h6>APP DEVELOPER</h6>
                <p className="mt-4">
                  "Choosing NextUpgrad for our software development needs was a
                  game-changer. The team's innovative approach, timely delivery,
                  and responsive communication made the collaboration smooth and
                  effective. Our business has experienced significant growth,
                  thanks to their exceptional solutions."
                </p>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Cards4;
