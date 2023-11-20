import React, { useState } from "react";
import "./Header.css";
import logo from "../pic/logo.png";

function Header() {
  window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("active", window.scrollY > 50);
  });
  const [Mobile, setMobile] = useState(false);
  return (
    <>
      <header className="container_header ">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <div className="navBar">
          <ul
            className={Mobile ? " nav-links-mobile" : " navList"}
            onClick={() => setMobile(false)}
          >
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#Features">Features</a>
            </li>
            <li>
              <a href="#Portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#resume">resume</a>
            </li>
            <li>
              <a href="#clients">clients</a>
            </li>
            <li>
              <a href="#pricing">pricing</a>
            </li>
            <li>
              <a href="#blog">blog</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
          <div className="button_header">
            <button className="btn_home ">buy now</button>
            <div className="theme_toggle " onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i class="bx bx-x"></i> : <i class="bx bx-menu"></i>}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
