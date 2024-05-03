import Tilt from "react-parallax-tilt";

const Cards = () => {
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
              <img src="/team1.webp" alt="" />
              <div>
                <h5>BY GAZ BATTERSBY</h5>
                <h6>GENERAL MANAGER</h6>
                <p className="mt-4">
                  We picked Nextupgrad to create our financial calculator app
                  all the way from the beginning.Right from our first talk, we
                  were super impressed with how professional, knowledgeable and
                  commited they were to givig us really great results. Now our
                  app is up and running, and the feedback from users is awesome!
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
              <img src="/team5.webp" alt="" />
              <div>
                <h5>BY GAZ BATTERSBY</h5>
                <h6>GENERAL MANAGER</h6>
                <p className="mt-4">
                  We picked Nextupgrad to create our financial calculator app
                  all the way from the beginning.Right from our first talk, we
                  were super impressed with how professional, knowledgeable and
                  commited they were to givig us really great results. Now our
                  app is up and running, and the feedback from users is awesome!
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
              <img src="/team3.webp" alt="" />
              <div>
                <h5>BY GAZ BATTERSBY</h5>
                <h6>GENERAL MANAGER</h6>
                <p className="mt-4">
                  We picked Nextupgrad to create our financial calculator app
                  all the way from the beginning.Right from our first talk, we
                  were super impressed with how professional, knowledgeable and
                  commited they were to givig us really great results. Now our
                  app is up and running, and the feedback from users is awesome!
                </p>
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </>
  );
};

export default Cards;
