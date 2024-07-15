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
              <img src="/team2.webp" alt="MICHAEL SMITH" />
              <div>
                <h5>BY MICHAEL SMITH</h5>
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
              <img src="/team4.webp" alt="TOM BAGNALL" />
              <div>
                <h5>BY TOM BAGNALL</h5>
                <h6>MANAGING DIRECTOR</h6>
                <p className="mt-4">
                  We needed help with our tricky online store, and that's when
                  we found NextUpgrad. What stood out was how they not only got
                  what we wanted but also shared smart ideas to make things
                  easier for our customers. They really know how to put
                  themselves in our customers' shoes, and that made a big
                  difference.
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
              <img src="/team3.webp" alt="GAZ BATTERSBY" />
              <div>
                <h5>BY GAZ BATTERSBY</h5>
                <h6>COMMERCIAL MANAGER</h6>
                <p className="mt-4">
                  These guys are just amazing! They really helped us grow our
                  business, and now our biggest issue is having too many
                  customers – which is a great problem to have. We're exactly
                  where we wanted to be, and Nextupgrad made it happen. Thanks a
                  bunch!
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
