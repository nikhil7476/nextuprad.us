import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import { useRouter } from "next/router";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import Router from "next/router";
import { MdKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  const [activeTab, setActiveTab] = useState("Avengers");
  const router = useRouter();

  useEffect(() => {
    const activeItem = document.querySelector(".tabs a.active");
    const activeWidth = activeItem ? activeItem.clientWidth : 0;
    const itemPos = activeItem ? activeItem.offsetLeft : 0;

    const selector = document.querySelector(".selector");
    if (selector) {
      selector.style.left = `${itemPos}px`;
      selector.style.width = `${activeWidth}px`;
    }
  }, [activeTab]);

  const handleTabClick = (e, tabName) => {
    if (tabName == "Home") {
      router.push("/");
    } else if (tabName == "About Us") {
      router.push("/About");
    } else if (tabName == "Contact Us") {
      router.push("/ContactUs");
    } else if (tabName == "Portfolio") {
      router.push("/Portfolio");
    } else if (tabName == "Blog") {
      router.push("/Blog");
    }

    setActiveTab(tabName);
  };

  return (
    <div className="header">
      <nav className="tabs ">
        <Link href="/">
          <img
            className="NavImg"
            src="/logo-2orange-1.png"
            alt="NextUpgrad Web Solutions"
          />
        </Link>
        <div className="selector"></div>

        <Link
          href="/"
          className={activeTab === "Home" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "h")}
        >
          Home
        </Link>

        <Link
          href="/about-us"
          className={activeTab === "About Us" ? "active" : ""}
        >
          About
        </Link>
        <span className={activeTab === "Services" ? "active" : ""}>
          <Menu
            className="headerSubmenu"
            menuButton={<MenuButton>Services</MenuButton>}
            transition
          >
            <MenuItem
              onClick={(e) =>
                window.open("/hire-dedicated-developer", "_blank")
              }
            >
              Hire Dedicated Developer
            </MenuItem>
            <MenuItem
              onClick={(e) =>
                window.open("/website-design-development-services", "_blank")
              }
            >
              Website Development
            </MenuItem>
            <MenuItem
              onClick={(e) =>
                window.open("/software-development-services", "_blank")
              }
            >
              Software Development
            </MenuItem>
            <MenuItem
              onClick={(e) =>
                window.open("/mobile-app-development-services", "_blank")
              }
            >
              Mobile App Development
            </MenuItem>
            <MenuItem
              onClick={(e) =>
                window.open("/digital-marketing-services", "_blank")
              }
            >
              Digital Marketing
            </MenuItem>
          </Menu>
          <MdKeyboardArrowDown />
        </span>

        {/* <a href="#" onClick={(e) => handleTabClick(e, "Services")}>
          <i className="fas fa-bolt"></i>Services
        </a> */}
        <Link
          href="/contact-us"
          className={activeTab === "Contact Us" ? "active" : ""}
        >
          Contact Us
        </Link>
        {/* <Link href="/">Portfolio</Link> */}
        <Link href="/blog">Blog</Link>
        <Link href="https://calendly.com/ron-wilsonbdm/service" target="_blank">
          <button id="header-btn">Let's Discuss</button>
        </Link>
      </nav>
    </div>
  );
};

export default Header;
