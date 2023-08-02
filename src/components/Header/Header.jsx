import React from "react";
import "./header.css";
import Button from "../Button/Button";

function Header() {
  return (
    <div className="header">
      <div className="headerBg"></div>
      <div className="headerWrapper">
        <nav className="navbar">
          <img
            src="assets/images/logo-light.svg"
            alt="navbarLogo"
            className="navbarLogo"
          />
          <p className="navbarItem">Apply for access</p>
        </nav>
        <div className="headerContent">
          <h1 className="headerContentTitle">
            Data <span className="headerContentTitleTailored">tailored</span> to
            your needs.
          </h1>
          <Button className='headerContentButton' content={'Learn more'}/>
        </div>
        <img
          src="assets/images/image-hero.webp"
          alt="headerPhone"
          className="headerPhoneImg"
        />
        <img
          src="assets/images/bg-pattern-1.svg"
          alt="headerLeftImg"
          className="headerLeftImg"
        />
        <img
          src="assets/images/bg-pattern-2.svg"
          alt="headerRightImg"
          className="headerRightImg"
        />
      </div>
    </div>
  );
}

export default Header;
