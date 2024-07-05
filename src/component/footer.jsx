import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const email = "support[at]pettycash[dot]com[dot]ng";
  const emailLink =
    "mailto:" +
    email.replace("[at]", "@").replace("[dot]", ".").replace("[dot]", ".");
  const phoneLink = "tel:" + +2349065786099;
  const date = new Date();
  const dateYear = date.getFullYear();
  return (
    <footer style={{ paddingBlock: "12px" }}>
      <div className="footer-section">
        <div className="footer-about">
          <h2>About Pettycash</h2>
          <p className="text">
            We are Pettycash, a lending firm with customers in 36 states in
            Nigeria. We don’t have branches, but we do have enough employees
            dedicated to helping our customers borrow funds. We offer a fully
            digital experience by providing instant loan to salary earners in
            Nigerian though their employer or individually. This means our
            customers can access finance anytime and anywhere.
          </p>
        </div>
        <div className="quick--link">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">FAQ's</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms & Conditions</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contacts</h3>
          <p> Address: 23 Opebi road, Ikeja, Lagos.</p>
          <span className="tel">
            <a href={phoneLink}>Phone: 09065786099</a>
            <a href={emailLink}>Email: support@pettycash.com.ng</a>
          </span>
        </div>
      </div>
      <div className="reserved">
        <div className="social--links">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faXTwitter} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
        <p>© {dateYear} All Right Reserved, Pettycash Systems</p>
      </div>
    </footer>
  );
};

export default Footer;
