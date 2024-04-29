import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Link from "next/link";
import { useRouter } from "next/router";

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

    e.preventDefault();
    setActiveTab(tabName);
  };

  return (
    <div className="header">
      <nav className="tabs ">
        <Link href="/">
          <img className="NavImg" src="/logo-2orange-1.png" alt="" />
        </Link>
        <div className="selector"></div>

        <Link
          href="/"
          className={activeTab === "Home" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "Home")}
        >
          <i className="fab fa-superpowers"></i>Home
        </Link>

        <Link
          href="/About"
          className={activeTab === "About Us" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "About Us")}
        >
          <i className="fas fa-hand-rock"></i>About Us
        </Link>
        <a
          href="#"
          className={activeTab === "Services" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "Services")}
        >
          <i className="fas fa-bolt"></i>Services
        </a>
        <Link
          href="/ContactUs"
          className={activeTab === "Contact Us" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "Contact Us")}
        >
          <i className="fas fa-burn"></i>Contact Us
        </Link>
        <Link
          href="/Portfolio"
          className={activeTab === "Portfolio" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "Portfolio")}
        >
          <i className="fas fa-burn"></i>Portfolio
        </Link>
        <Link
          href="/Blog"
          className={activeTab === "Blog" ? "active" : ""}
          onClick={(e) => handleTabClick(e, "Blog")}
        >
          <i className="fas fa-burn"></i>Blog
        </Link>
        <a href="/ContactUs">
          <button id="header-btn">Let's Discuss</button>
        </a>
      </nav>
    </div>
  );
};

export default Header;
