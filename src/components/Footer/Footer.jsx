import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <img src="assets/images/logo-dark.svg" alt="" className="footerLogo" />
        <div className="footerLinks">
          <img
            src="assets/images/icon-facebook.svg"
            alt="facebookIcon"
            className="footerLink"
          />
          <img
            src="assets/images/icon-twitter.svg"
            alt="twitterIcon"
            className="footerLink"
          />
          <img
            src="assets/images/icon-instagram.svg"
            alt="instagramIcon"
            className="footerLink"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
