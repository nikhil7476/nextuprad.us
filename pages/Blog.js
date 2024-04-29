import Link from "next/link";
const blog = () => {
  return (
    <>
      <div className="main">
        <div className="sec">
          <div className="blog-cat">
            <ul>
              <li>
                <Link href="#">Website Developement</Link>
              </li>
              <li>
                <Link href="#">Software Developement</Link>
              </li>
              <li>
                <Link href="#">Mobile App Developement</Link>
              </li>
              <li>
                <Link href="#">Digital Marketing</Link>
              </li>
            </ul>
          </div>
          <div className="container">
            <div className="sec-hd">
              <h1>BLOG</h1>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="Brandin.png" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        Branding and Digital Marketing Strategies for Small
                        Businesses.
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="Local-SEO.png" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        Local SEO Demystified Winning Strategies for Small
                        Business Growth.
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="Web-Design.jpg" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        Digital Marketing and Website Development – A Dream Team
                        Of Successful Business.
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="website_structure.png" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        Step-by-step guide for building the ultimate website
                        structure
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img src="blog4.png" alt="image" />
                    </Link>
                    <h2>
                      <Link href="#">
                        5 Factors Slowing Down Your Website and Fixes
                      </Link>
                    </h2>
                    <div className="bttn">
                      <Link href="#">Learn More</Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 blog-search">
                <h2>Search Articles</h2>
                <form>
                  <input type="text" placeholder="Search..." />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default blog;
