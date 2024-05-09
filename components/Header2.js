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
                <Link href="/Hiring" onClick={handleMenuItemClick}>
                  <NavDropdown.Item>Hire Dedicated Developers</NavDropdown.Item>
                </Link>
                <Link href="/website-development" onClick={handleMenuItemClick}>
                  <NavDropdown.Item>Website Development</NavDropdown.Item>
                </Link>
                <Link
                  href="/software-development"
                  onClick={handleMenuItemClick}
                >
                  <NavDropdown.Item>Software Development</NavDropdown.Item>
                </Link>
                <Link href="/Mobile" onClick={handleMenuItemClick}>
                  <NavDropdown.Item>Mobile App Development</NavDropdown.Item>
                </Link>
                <Link href="/Marketing" onClick={handleMenuItemClick}>
                  <NavDropdown.Item>Digital Marketing</NavDropdown.Item>
                </Link>
              </NavDropdown>
              <Link href="/" onClick={handleMenuItemClick}>
                Contact us
              </Link>
              <Link href="/About" onClick={handleMenuItemClick}>
                Portfolio
              </Link>
              <Link href="/About" onClick={handleMenuItemClick}>
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
