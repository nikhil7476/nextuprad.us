import Tilt from "react-parallax-tilt";

const Cards2 = () => {
  return (
    <>
      <div className="d-flex justify-content-center gap-5 my-5 ">
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
              <img src="/team6.webp" alt="WILLIAM DAVIS" />
              <div>
                <h5>BY WILLIAM DAVIS</h5>
                <h6>CREATIVE DIRECTOR</h6>
                <p className="mt-4">
                  Nextupgrad is like a real-life superhero for us! They're
                  honest, quick to help with anything, and totally dependable.
                  We can always trust them to do what they promise without any
                  nonsense. They've been a blessing that went beyond what we
                  hoped for.
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
              <img src="/team1.webp" alt="SHANE QUIGLEY" />
              <div>
                <h5>BY SHANE QUIGLEY</h5>
                <h6>MANAGING DIRECTOR</h6>
                <p className="mt-4">
                  Thanks to NextUpGrad's digital marketing expertise, our
                  project achieved remarkable success. Their organic strategies
                  and clear communication made a significant impact, driving
                  results beyond our expectations. Highly recommend for
                  effective and results-driven digital marketing solutions!"
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
              <img src="/team5.webp" alt="LANCE BURTON" />
              <div>
                <h5>BY LANCE BURTON</h5>
                <h6>COMMERCIAL MANAGER</h6>
                <p className="mt-4">
                  These guys are just amazing! They really helped us grow our
                  business.We can always trust them to do what they promise
                  without any nonsense. They've been a blessing that went beyond
                  what we hoped for.
                </p>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Cards2;
