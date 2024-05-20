const LandingPagee = () => {
  return (
    <>
      <>
        <header className="musthead sticky-top">
          <div className="container pt-2 pb-2">
            <div className="row main-ost">
              <div className="col-md-2 row-img">
                <a>
                  {" "}
                  <img src="/landpress-logo.svg" alt="not found" />
                </a>
              </div>
              <div className="col-md-6 row-img olm">
                <nav className="navbar navbar-expand-lg bg-body-light">
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav me-auto ">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Pricing</a>
                      </li>
                      <li>
                        <a href="#">Insights</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
              <div className="col-md-4 gap-2 just-main">
                <div className="imy">
                  <button className="btn-three">
                    <p className="book-intro">Book intro all</p>
                  </button>
                </div>
                <div className="imy">
                  <button className="btn-three-talk">
                    <p className="book-intro">Ready to talk?</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
        <section className="bann">
          <div className="container banner-sli pt-5 pb-5">
            <div className="row">
              <div className="col-6 mark-bus">
                <span>Market reasearh and analysis </span>
                <div className="reasearch">
                  <h1>Empowering Your Business Potential</h1>
                  <h6>
                    Unlock your business's potential with our tailored
                    <br /> services. Let's achieve success together.
                  </h6>
                </div>
                <div>
                  <button className="btn-three-more">
                    <div className="arrow-m d-flex">
                      <p className="book-intro">Learn more</p>
                      <i className="fa fa-long-arrow-right" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="col-6 consultation">
                <h3>Book free consultation </h3>
                <p>
                  Fill out the form below, we'll arrange a<br /> consultation at
                  a time most suitatble for you
                </p>
                <form action="">
                  <div className="input-fill">
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your name"
                          aria-label="Your name"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Company name"
                          aria-label="Company name"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone num"
                          aria-label="Phone num"
                        />
                      </div>
                      <div className="col">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Email address"
                          aria-label="Email address"
                        />
                      </div>
                    </div>
                    <textarea
                      name=""
                      id=""
                      cols={10}
                      rows={5}
                      placeholder="Anything else you would like us to know"
                      defaultValue={"                            "}
                    />
                    <input type="checkbox" name="" id="" className="poim" />I
                    understand and agree to privacy policy.
                    <button className="subreq" type="submit">
                      Submit Request
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="aft-ban">
          <div className="container">
            <div className="row">
              <div className="col-4 p-flex j-flex">
                <h1>Big or small? We have a plan</h1>
              </div>
              <div className="col-6 p-flex j-flex">
                <p>
                  Our comprehensive solutions empower you to unleash the
                  <br /> full potential of your business, providing the tools,
                  strategies,
                  <br /> and guidance needed to drive sustainable growth.
                </p>
              </div>
              <div className="col-2 p-flex j-flex">
                <div>
                  <button className="btn-three-talk">
                    <div className="arrow-m d-flex">
                      <p className="book-intro">About us</p>
                      <i className="fa fa-long-arrow-right omt" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="row missird">
              <div className="col-3 missard">
                <h5>Mission</h5>
                <h4>Empowering businesses</h4>
                <p>Empowering businesses to reach their full potential.</p>
              </div>
              <div className="col-3 missardl">
                <h5>Vision</h5>
                <h4>Creating a future of innovation</h4>
                <p>Fueling innovation to shape tomorrow's landscape.</p>
              </div>
              <div className="col-3 missardm">
                <h5>Goals</h5>
                <h4>Strategic partnerships</h4>
                <p>Forging partnerships for mutual growth and success.</p>
              </div>
              <div className="col-3 missard">
                <h5>Values</h5>
                <h4>Integrity, innovation, collaboration</h4>
                <p>Guided by integrity, and driven by innovation.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="tab-acc">
          <div className="container">
            <div className="row">
              <div className="col opti">
                <nav
                  id="navbar-example2"
                  className="navbar navbar-light px-3 main-ton sticky-top must-main"
                >
                  <ul className="nav nav-pills">
                    <li className="nav-item">
                      <a className="nav-link" href="#scrollspyHeading1">
                        Content Marketing
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#scrollspyHeading2">
                        Campaign Optimizations
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#scrollspyHeading3">
                        Market Reasearch
                      </a>
                    </li>
                  </ul>
                </nav>
                <div
                  data-bs-spy="scroll"
                  data-bs-target="#navbar-example2"
                  data-bs-offset={0}
                  className="scrollspy-example"
                  tabIndex={0}
                >
                  <div className="container sliding" id="scrollspyHeading1">
                    <div className="row">
                      <div className="col-6 store">
                        <div className="story-part">
                          <span>Content marketing</span>
                          <div className="reasearch">
                            <h2>Content creation and distribution</h2>
                            <p>
                              Engaging content strategies tailored to your
                              <br /> audience to enhance brand awareness.
                            </p>
                          </div>
                          <div>
                            <button className="btn-three-talk">
                              <div className="arrow-m d-flex">
                                <p className="book-intro">Learn more</p>
                                <i className="fa fa-long-arrow-right" />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 store-img">
                        <div className="storm-img">
                          <img
                            src="/landpress-consulting-6.jpg"
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container sliding" id="scrollspyHeading2">
                    <div className="row">
                      <div className="col-6 store">
                        <div className="story-part">
                          <span>Campaign optimization</span>
                          <div className="reasearch">
                            <h2>Fine-tuning marketing campaigns</h2>
                            <p>
                              Customized marketing plans to drive growth <br />
                              and achieve your business objectives effectively.
                            </p>
                          </div>
                          <div>
                            <button className="btn-three-talk">
                              <div className="arrow-m d-flex">
                                <p className="book-intro">Learn more</p>
                                <i className="fa fa-long-arrow-right" />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 store-img">
                        <div className="storm-img">
                          <img
                            src="/landpress-consulting-5.jpg"
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="container sliding" id="scrollspyHeading3">
                    <div className="row">
                      <div className="col-6 store">
                        <div className="story-part">
                          <span>Market research</span>
                          <div className="reasearch">
                            <h2>Data-driven market research analysis</h2>
                            <p>
                              In-depth market research to uncover valuable
                              <br /> insights for strategic business decisions.
                            </p>
                          </div>
                          <div>
                            <button className="btn-three-talk">
                              <div className="arrow-m d-flex">
                                <p className="book-intro">Learn more</p>
                                <i className="fa fa-long-arrow-right" />
                              </div>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="col-6 store-img">
                        <div className="storm-img">
                          <img
                            src="/landpress-consulting-4.jpg"
                            alt=""
                            srcSet=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="studies">
          <div className="container">
            <div className="row pol">
              <div className="col-4 j-flex">
                <h1>Those who made a change</h1>
              </div>
              <div className="col-6 j-flex">
                <p>
                  Our solutions empower you to unleash the full potential
                  <br /> of your business, providing the tools, strategies, and
                  <br /> guidance needed to drive sustainable growth.
                </p>
              </div>
              <div className="col-2 j-flex">
                <div>
                  <button className="btn-three-talk">
                    <div className="arrow-m d-flex">
                      <p className="book-intro">All case studies</p>
                      <i className="fa fa-long-arrow-right" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="row port">
              <div className="col-md-4 f-flex">
                <div width="100%" align="center">
                  <div className="porti">
                    <div className="img-hover-zoom">
                      <img
                        src="/portrait4.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="portfolioDisc">
                        <div className="card-body expert">
                          <h4 className="card-title">
                            Expert guidance through
                            <br /> regulatory challenges
                          </h4>
                          <button className="btn-three-talk-word">
                            <div className="arrow-m d-flex">
                              <p className="book-intro">Case study</p>
                              <i className="fa fa-long-arrow-right" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="counter">
                  <h4>
                    Helped navigate regulatory challenges. Valued advisors for
                    strategic financial decisions.
                  </h4>
                  <h1>+ 120 %</h1>
                  <p>Increase in customer growth rate</p>
                </div>
              </div>
              <div className="col-md-4 f-flex">
                <div width="100%" align="center">
                  <div className="porti">
                    <div className="img-hover-zoom">
                      <img
                        src="/portrait3.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="portfolioDisc">
                        <div className="card-body expert">
                          <h4 className="card-title">
                            Trusted support through <br />
                            market complexities
                          </h4>
                          <button className="btn-three-talk-word">
                            <div className="arrow-m d-flex">
                              <p className="book-intro">Case study</p>
                              <i className="fa fa-long-arrow-right" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="counter">
                  <h4>
                    Stellar support in navigating market complexities. Trusted
                    partners for financial growth.
                  </h4>
                  <h1>$ 250 k</h1>
                  <p>Saved in operational costs</p>
                </div>
              </div>
              <div className="col-md-4 f-flex">
                <div width="100%" align="center">
                  <div className="porti">
                    <div className="img-hover-zoom">
                      <img
                        src="/portrait2.jpg"
                        className="card-img-top"
                        alt="..."
                      />
                      <div className="portfolioDisc">
                        <div className="card-body expert">
                          <h4 className="card-title">
                            Tailored solutions for
                            <br /> financial excellence
                          </h4>
                          <button className="btn-three-talk-word">
                            <div className="arrow-m d-flex">
                              <p className="book-intro">Case study</p>
                              <i className="fa fa-long-arrow-right" />
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="counter">
                  <h4>
                    Innovative solutions tailored to our needs. A reliable
                    partner for our financial excellence.
                  </h4>
                  <h1>+ 25 %</h1>
                  <p>Increase in company revenue</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stories">
          <div className="container">
            <div className="row">
              <div className="col-6 land-imi">
                <div className="storm-img-land land-im">
                  <img src="/landpress-consulting-4.jpg" alt="" srcSet="" />
                </div>
              </div>
              <div className="col-6 land-imo">
                <div className="story">
                  <span>Client stories</span>
                  <div className="reasearch">
                    <h1>Hear success stories from our satisfied users</h1>
                    <p>
                      Hear what our clients have to say about their <br />
                      experience working with us.
                    </p>
                  </div>
                  <div>
                    <button className="btn-three-talk">
                      <div className="arrow-m d-flex">
                        <p className="book-intro">Why work with us</p>
                        <i className="fa fa-long-arrow-right" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="slider-land">
          <div className="container">
            <div className="testimonials-container">
              <div className="testimonial">
                <div className="rating">
                  <input
                    id="rating-5"
                    type="radio"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-4"
                    type="radio"
                    name="rating"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="rating-4">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-3"
                    type="radio"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-2"
                    type="radio"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-1"
                    type="radio"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <i className="fas fa-3x fa-star" />
                  </label>
                </div>
                <p>
                  Professional and results-drien. They
                  <br /> relief our epetations, boosting
                  <br /> our sales signifiantly.
                </p>
                <div className="part d-flex">
                  <div>
                    <img
                      className="img-fluid rounded rounded-circle mb-3"
                      loading="lazy"
                      src="/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-desg mt-2">
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="rating">
                  <input
                    id="rating-5"
                    type="radio"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-4"
                    type="radio"
                    name="rating"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="rating-4">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-3"
                    type="radio"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-2"
                    type="radio"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-1"
                    type="radio"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <i className="fas fa-3x fa-star" />
                  </label>
                </div>
                <p>
                  Professional and results-drien. They
                  <br /> relief our epetations, boosting
                  <br /> our sales signifiantly.
                </p>
                <div className="part d-flex">
                  <div>
                    <img
                      className="img-fluid rounded rounded-circle mb-3"
                      loading="lazy"
                      src="/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-desg mt-2">
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="rating">
                  <input
                    id="rating-5"
                    type="radio"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-4"
                    type="radio"
                    name="rating"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="rating-4">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-3"
                    type="radio"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-2"
                    type="radio"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-1"
                    type="radio"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <i className="fas fa-3x fa-star" />
                  </label>
                </div>
                <p>
                  Professional and results-drien. They
                  <br /> relief our epetations, boosting
                  <br /> our sales signifiantly.
                </p>
                <div className="part d-flex">
                  <div>
                    <img
                      className="img-fluid rounded rounded-circle mb-3"
                      loading="lazy"
                      src="/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-desg mt-2">
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="rating">
                  <input
                    id="rating-5"
                    type="radio"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-4"
                    type="radio"
                    name="rating"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="rating-4">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-3"
                    type="radio"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-2"
                    type="radio"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-1"
                    type="radio"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <i className="fas fa-3x fa-star" />
                  </label>
                </div>
                <p>
                  Professional and results-drien. They
                  <br /> relief our epetations, boosting
                  <br /> our sales signifiantly.
                </p>
                <div className="part d-flex">
                  <div>
                    <img
                      className="img-fluid rounded rounded-circle mb-3"
                      loading="lazy"
                      src="/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-desg mt-2">
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="rating">
                  <input
                    id="rating-5"
                    type="radio"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-4"
                    type="radio"
                    name="rating"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="rating-4">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-3"
                    type="radio"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-2"
                    type="radio"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-1"
                    type="radio"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <i className="fas fa-3x fa-star" />
                  </label>
                </div>
                <p>
                  Professional and results-drien. They
                  <br /> relief our epetations, boosting
                  <br /> our sales signifiantly.
                </p>
                <div className="part d-flex">
                  <div>
                    <img
                      className="img-fluid rounded rounded-circle mb-3"
                      loading="lazy"
                      src="/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-desg mt-2">
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="rating">
                  <input
                    id="rating-5"
                    type="radio"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-4"
                    type="radio"
                    name="rating"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="rating-4">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-3"
                    type="radio"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-2"
                    type="radio"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-1"
                    type="radio"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <i className="fas fa-3x fa-star" />
                  </label>
                </div>
                <p>
                  Professional and results-drien. They
                  <br /> relief our epetations, boosting
                  <br /> our sales signifiantly.
                </p>
                <div className="part d-flex">
                  <div>
                    <img
                      className="img-fluid rounded rounded-circle mb-3"
                      loading="lazy"
                      src="/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-desg mt-2">
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="rating">
                  <input
                    id="rating-5"
                    type="radio"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-4"
                    type="radio"
                    name="rating"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="rating-4">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-3"
                    type="radio"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-2"
                    type="radio"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-1"
                    type="radio"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <i className="fas fa-3x fa-star" />
                  </label>
                </div>
                <p>
                  Professional and results-drien. They
                  <br /> relief our epetations, boosting
                  <br /> our sales signifiantly.
                </p>
                <div className="part d-flex">
                  <div>
                    <img
                      className="img-fluid rounded rounded-circle mb-3"
                      loading="lazy"
                      src="/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-desg mt-2">
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="rating">
                  <input
                    id="rating-5"
                    type="radio"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-4"
                    type="radio"
                    name="rating"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="rating-4">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-3"
                    type="radio"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-2"
                    type="radio"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-1"
                    type="radio"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <i className="fas fa-3x fa-star" />
                  </label>
                </div>
                <p>
                  Professional and results-drien. They
                  <br /> relief our epetations, boosting
                  <br /> our sales signifiantly.
                </p>
                <div className="part d-flex">
                  <div>
                    <img
                      className="img-fluid rounded rounded-circle mb-3"
                      loading="lazy"
                      src="/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-desg mt-2">
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="rating">
                  <input
                    id="rating-5"
                    type="radio"
                    name="rating"
                    defaultValue={5}
                  />
                  <label htmlFor="rating-5">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-4"
                    type="radio"
                    name="rating"
                    defaultValue={4}
                    defaultChecked=""
                  />
                  <label htmlFor="rating-4">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-3"
                    type="radio"
                    name="rating"
                    defaultValue={3}
                  />
                  <label htmlFor="rating-3">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-2"
                    type="radio"
                    name="rating"
                    defaultValue={2}
                  />
                  <label htmlFor="rating-2">
                    <i className="fas fa-3x fa-star" />
                  </label>
                  <input
                    id="rating-1"
                    type="radio"
                    name="rating"
                    defaultValue={1}
                  />
                  <label htmlFor="rating-1">
                    <i className="fas fa-3x fa-star" />
                  </label>
                </div>
                <p>
                  Professional and results-drien. They
                  <br /> relief our epetations, boosting
                  <br /> our sales signifiantly.
                </p>
                <div className="part d-flex">
                  <div>
                    <img
                      className="img-fluid rounded rounded-circle mb-3"
                      loading="lazy"
                      src="/testimonial-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="part-desg mt-2">
                    <h4 className="mb-2">Luna John</h4>
                    <h5 className="fs-6 text-secondary mb-0">UX Designer</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="controls">
              <button className="control-btn" onclick="scrollTestimonials(-1)">
                <i className="bi bi-circle-fill" />
              </button>
              <button className="control-btn" onclick="scrollTestimonials(1)">
                <i className="bi bi-circle-fill" />
              </button>
            </div>
          </div>
        </section>
        <section className="studies">
          <div className="container">
            <div className="row">
              <div className="col-4 f-flex">
                <h1>Insights and expertise</h1>
              </div>
              <div className="col-6 f-flex">
                <p>
                  Stay informed and inspired with our blog, <br />
                  offering valuable insights, tips, and industry
                  <br />
                  updates to fuel your business growth.
                </p>
              </div>
              <div className="col-2 f-flex">
                <div>
                  <button className="btn-three-talk">
                    <div className="arrow-m d-flex">
                      <p className="book-intro">Read all article</p>
                      <i className="fa fa-long-arrow-right" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className="row port">
              <div className="col-4 f-flex">
                <div className="img-hover-zoom">
                  <img
                    src="/blog-post-1.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="counterop">
                  <h4>Strategies for scaling your business successfully</h4>
                  <p>
                    When evaluating potential agencies, consider their expertise
                    in various aspects of design.
                  </p>
                  <div>
                    <button className="btn-three-more-partk">
                      <div className="arrow-m d-flex">
                        <p className="book-intro">Read more</p>
                        <i className="fa fa-long-arrow-right" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4 f-flex">
                <div className="img-hover-zoom">
                  <img
                    src="/blog-post-2.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="counterop">
                  <h4>Storytelling mastery: crafting compelling narratives</h4>
                  <p>
                    The multi-brand system has gained traction, allowing
                    businesses to manage various brands.
                  </p>
                  <div>
                    <button className="btn-three-more-partk">
                      <div className="arrow-m d-flex">
                        <p className="book-intro">Read more</p>
                        <i className="fa fa-long-arrow-right" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-4 f-flex">
                <div className="img-hover-zoom">
                  <img
                    src="/blog-post-3.jpg"
                    className="card-img-top"
                    alt="..."
                  />
                </div>
                <div className="counterop">
                  <h4>Optimizing your online presence for visibility</h4>
                  <p>
                    A well-defined statement helps participants and ensures
                    everyone is on the same page.
                  </p>
                  <div>
                    <button className="btn-three-more-partk">
                      <div className="arrow-m d-flex">
                        <p className="book-intro">Read more</p>
                        <i className="fa fa-long-arrow-right" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="footland">
          <div className="container">
            <div className="row">
              <div className="col-8 foot-stor">
                <span>Take action today</span>
                <h2>Ready to supercharge your business? Let's connect</h2>
              </div>
              <div className="col-4 foot-butn d-flex gap-3 j-flex">
                <div>
                  <button className="btn-three-more">
                    <div className="arrow-m d-flex">
                      <p className="book-intro">Discover more</p>
                      <i className="fa fa-long-arrow-right" />
                    </div>
                  </button>
                </div>
                <div>
                  <button className="btn-three-more-get">
                    <div className="arrow-m d-flex">
                      <p className="book-intro">Book intro all</p>
                      <i className="fa fa-long-arrow-right" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container foot-high">
            <div className="row">
              <div className="col-4 foot-log">
                <img src="/landpress-logo-white.svg" alt="" srcSet="" />
                <p>
                  Modern landing pages that captivate
                  <br /> audiences and drive conversions.
                </p>
                <div className="ionm">
                  <a href="#!" role="button">
                    <i className="fab fa-facebook-f fa-lg" />
                  </a>
                  <a href="#!" role="button">
                    <i className="fab fa-twitter fa-lg" />
                  </a>
                  <a href="#!" role="button">
                    <i className="fab fa-instagram fa-lg" />
                  </a>
                </div>
              </div>
              <div className="col-2 foot-logm foot-op">
                <h5>Features</h5>
                <ul>
                  <li>
                    <a href="">Page builder</a>
                  </li>
                  <li>
                    <a href="">Theme options</a>
                  </li>
                  <li>
                    <a href="">Theme builder</a>
                  </li>
                  <li>
                    <a href="">Tempalte library</a>
                  </li>
                </ul>
              </div>
              <div className="col-2 foot-logm ">
                <h5>Resources</h5>
                <ul>
                  <li>
                    <a href="">Support center</a>
                  </li>
                  <li>
                    <a href="">Documentations</a>
                  </li>
                  <li>
                    <a href="">Community</a>
                  </li>
                  <li>
                    <a href="">Hosting</a>
                  </li>
                </ul>
              </div>
              <div className="col-4 foot-logm">
                <h5>Business hours</h5>
                <div className="week d-flex">
                  <span>Weekdays</span>
                  <span>09.00 AM - 21.00 PM</span>
                </div>
                <div className="week d-flex mt-2">
                  <span>Saturday</span>
                  <span>09.00 AM - 21.00 PM</span>
                </div>
                <div className="week d-flex mt-2">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          <div className="container end-foot">
            <div className="row">
              <div className="col-8 r-flex">
                <p>© LandPress WordPress Theme. All Rights Reserved.</p>
              </div>
              <div className="col-4 end-foo">
                <ul className="d-flex">
                  <li>
                    <a href="">Terms &amp; Conditions</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    </>
  );
};

export default LandingPagee;
