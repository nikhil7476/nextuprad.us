import Link from "next/link";
import Head from "next/head";
const Blog = () => {
  return (
    <>
      <div className="blogMain">
        <div className="sec">
          <div className="blog-cat">
            <div className="container">
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
          </div>
          <div className="container">
            <div className="sec-hd g-5">
              <h1>BLOG</h1>
            </div>
            <div className="row">
              <div className="col-md-8">
                <div className="blog">
                  <div className="blog-img">
                    <Link href="#">
                      <img
                        src="Brandin.png"
                        alt="Branding and Digital Marketing Strategies for Small
                        Businesses."
                      />
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
                      <img
                        src="Local-SEO.png"
                        alt="Local SEO Demystified Winning Strategies for Small
                        Business Growth."
                      />
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
                      <img
                        src="Web-Design.jpg"
                        alt="Digital Marketing and Website Development A Dream Team
                        Of Successful Business."
                      />
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
                      <img
                        src="website_structure.png"
                        alt="Step-by-step guide for building the ultimate website
                        structure"
                      />
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
                      <img
                        src="blog4.png"
                        alt=" 5 Factors Slowing Down Your Website and Fixes"
                      />
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

export default Blog;
