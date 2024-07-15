import Link from "next/link";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import React from "react";
import { useState } from "react";
import Swal from "sweetalert2";
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
      const response = await fetch(
        "https://53c50cd527.nxcli.io/nextupgrad_backend/api/postNewsletter",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        }
      );
      const data = await response.json();

      console.log(data);
      if (data.status == 200 || data.status == 201) {
        setEmail("");
        Swal.fire({
          title: "Subscribed!",
          text: "Thank you for subscribing to nextupgrad!",
          icon: "success",
        });
      }
      if (data.status == 500) {
        Swal.fire({
          title: "Already Subscribed!",
          text: "This email is already subscribed!",
          icon: "error",
        });
      }
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
              <div className="col-md-3 ftr-subs">
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
              <div className="col-md-3 ftr-nav-1">
                <nav className="navbar">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" href="/hire-dedicated-developer" target="_blank">
                        Hire Dedicated Developer
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/website-design-development-services" target="_blank">
                        Website Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/software-development-services" target="_blank">
                        Software Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/mobile-app-development-services" target="_blank">
                        Mobile App Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/digital-marketing-services" target="_blank">
                        Digital Marketing
                      </Link>
                    </li>
                  </ul>
                  <ul className="navbar-nav">
                    {/* <li className="footerSubmenu">
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
                            Router.push("/website-design-development-services")
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
                    </li> */}
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
                    {/* <li className="nav-item active">
                      <Link className="nav-link" href="/about-us">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact-us">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/portfolio">
                        Portfolio
                      </Link>
                    </li> */}
                  </ul>
                </nav>
              </div>
              <div className="col-md-2 ftr-nav-2">
                <nav className="navbar">
                  {/* <ul className="navbar-nav">
                    <li className="nav-item active">
                      <Link className="nav-link" href="/hire-dedicated-developer">
                        Hire Dedicated Developer
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/website-design-development-services">
                        Website Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/software-development-services">
                        Software Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/mobile-app-development-services">
                        Mobile App Development
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/digital-marketing-services">
                        Digital Marketing
                      </Link>
                    </li>
                  </ul> */}
                  <ul className="navbar-nav">
                    {/* <li className="footerSubmenu">
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
                            Router.push("/website-design-development-services")
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
                    </li> */}
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
                      <Link className="nav-link" href="/about-us">
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/contact-us">
                        Contact Us
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/blog">
                        Blog
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" href="/portfolio">
                        Portfolio
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="col-md-4 con-info">
                <h2 className="con-hd">DROP US A LINE</h2>
                <h3>
                  <i class="bi bi-envelope" />
                  <a href="mailto:hello@nextupgrad.us">hello@nextupgrad.us</a>
                </h3>
                <h2 className="con-hd">CALL AT</h2>
                <ul className="con-lis">
                  <li>
                    <i className="bi bi-telephone" />
                    <a href="tel:+1(408) 400-3232">+1 (408) 400-3232</a>
                    <a href="tel:+1 (408) 786-5558">+1 (408) 786-5558</a>
                  </li>
                  <li>
                    <i className="bi bi-telephone" />
                    <a href="tel:+18005700144">Toll Free: 18005700144</a>
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
                  <Link href="/privacy-policy">Privacy Policy</Link>
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
