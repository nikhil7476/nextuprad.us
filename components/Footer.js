import Link from "next/link";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import { useState } from "react";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    setEmail(e.target.value);
    setErrors(""); // Clear previous validation errors when the user types
  };

  const validateEmail = (email) => {
    const isValid = /\S+@\S+\.\S+/.test(email);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrors("Please enter a valid email address.");
      return;
    }

    try {
      const response = await axios.post("your-api-endpoint", { email });
      console.log(response.data);
      // Handle success response here
    } catch (error) {
      console.error("Error:", error);
      // Handle error response here
    }
  };
  return (
    <>
      <div className="ftr-main">
        <div className="ftr-sec">
          <div className="container">
            <div className="row">
              <div className="col-md-4 ftr-subs">
                <h2>
                  Subscribe to our newsletter to stay in touch with the latest.
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="mail-inpt">
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={handleChange}
                    />
                    {errors && <span className="text-danger">{errors}</span>}
                  </div>
                  <div className="mail-sub">
                    <input type="submit" value="Submit" />
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <nav className="navbar">
                  <ul className="navbar-nav">
                    <li className="footerSubmenu">
                      <Menu
                        menuButton={<MenuButton> Our Services</MenuButton>}
                        transition
                      >
                        <MenuItem
                          onClick={(e) =>
                            Router.push("/hire-dedicated-developer")
                          }
                        >
                          Hire Dedicated Developer
                        </MenuItem>
                        <MenuItem
                          onClick={(e) =>
                            Router.push("/website-design-development-servece")
                          }
                        >
                          Website Development
                        </MenuItem>
                        <MenuItem
                          onClick={(e) =>
                            Router.push("/software-development-services")
                          }
                        >
                          Software Development
                        </MenuItem>
                        <MenuItem
                          onClick={(e) =>
                            Router.push("/mobile-app-development-services")
                          }
                        >
                          Mobile App Development
                        </MenuItem>
                        <MenuItem
                          onClick={(e) =>
                            Router.push("/digital-marketing-services")
                          }
                        >
                          Digital Marketing
                        </MenuItem>
                      </Menu>
                    </li>
                    {/* <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Our Services
                      </a>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="navbarDropdown"
                      >
                        <a className="dropdown-item" href="#">
                          Digital Marketing
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Mobile App Development
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Software Development
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Website Development
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                          Hire Dedicated Developer
                        </a>
                      </div>
                    </li> */}
                    <li className="nav-item active">
                      <a className="nav-link" href="/about-us">
                        About
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/contact-us">
                        Contact Us
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/blog">
                        Blog
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="/portfolio">
                        Portfolio
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-4 con-info">
                <h2 className="con-hd">DROP US A LINE</h2>
                <h2>
                  <a href="mailto:hello@nextupgrad.us">hello@nextupgrad.us</a>
                </h2>
                <h2 className="con-hd">CALL US</h2>
                <ul className="con-lis">
                  <li>
                    <i className="bi bi-telephone" />
                    <a href="tel:+1(408) 786-5558">+1(408) 786-5558</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row logos">
              <div className="ftr-logos">
                <img src="/ISO.png" alt="ISO-logo" />
                <img src="/pmp.png" alt="PMP-logo" />
                <img src="/ISO-2.png" alt="ISO-logo" />
                <img src="/Clutch.png" alt="Clutch-logo" />
                <img src="/ISO-3.png" alt="ISO-logo" />
              </div>
            </div>
            <div className="row below-ftr">
              <div className="col-md-4 copy-right">
                <h2>Copyright © 2024 nextupgrad</h2>
              </div>
              <div className="col-md-4">
                <div className="ftr-socio">
                  <a
                    href="https://www.facebook.com/nextupgrad.usa/"
                    target="_blank"
                  >
                    <i className="bi bi-facebook" />
                  </a>
                  <a
                    href="https://www.instagram.com/nextupgradusa/"
                    target="_blank"
                  >
                    <i className="bi bi-instagram" />
                  </a>
                  <a href="https://twitter.com/nextupgrad_usa" target="_blank">
                    <i className="bi bi-twitter" />
                  </a>
                  <a
                    href="https://www.youtube.com/@nextupgrad-usa"
                    target="_blank"
                  >
                    <i className="bi bi-youtube" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/nextupgrad-usa"
                    target="_blank"
                  >
                    <i className="bi bi-linkedin" />
                  </a>
                  <a
                    href="https://www.pinterest.com/nextupgradusa/"
                    target="_blank"
                  >
                    <i className="bi bi-pinterest" />
                  </a>
                </div>
              </div>
              <div className="col-md-4 pre-policy">
                <h2>
                  <a href="#">Privacy Policy</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
