import React, { useRef, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Link from "next/link";

const Header2 = () => {
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        const navbarToggler = document.getElementById("navbar-toggler");
        if (navbarToggler) {
          navbarToggler.click();
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuItemClick = () => {
    const navbarToggler = document.getElementById("navbar-toggler");
    if (navbarToggler) {
      navbarToggler.click();
    }
  };

  return (
    <section className="header2">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container ref={navRef}>
          <Link href="/">
            <Navbar.Brand>
              <img className="NavImg" src="/logo-2orange-1.png" alt="" />
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle id="navbar-toggler" aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link href="/" onClick={handleMenuItemClick}>
                Home
              </Link>
              <Link href="/About" onClick={handleMenuItemClick}>
                About Us
              </Link>
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href="/Hiring" onClick={handleMenuItemClick}>
                    Hire Dedicated Developers
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/website-design" onClick={handleMenuItemClick}>
                    Website Development
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link
                    href="/software-development"
                    onClick={handleMenuItemClick}
                  >
                    Software Development
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/Mobile" onClick={handleMenuItemClick}>
                    Mobile App Development{" "}
                  </Link>
                </NavDropdown.Item>

                <NavDropdown.Item>
                  <Link href="/Marketing" onClick={handleMenuItemClick}>
                    Digital Marketing
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link href="/ContactUs" onClick={handleMenuItemClick}>
                Contact us
              </Link>
              <Link href="/Portfolio" onClick={handleMenuItemClick}>
                Portfolio
              </Link>
              <Link href="/Blog" onClick={handleMenuItemClick}>
                Blog
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </section>
  );
};

export default Header2;
