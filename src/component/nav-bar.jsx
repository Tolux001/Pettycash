import React from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileScreen,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const phoneLink = "tel:" + +2349065786099;
  const navRef = useRef();

  const showNavBar = () => {
    navRef.current.classList.toggle("show-links");
  };
  return (
    <>
      <nav className="nav">
        <div className="nav-center">
          <div class="nav-brand">
            <img src="logo.png" class="logo" alt="Logo" />
            <button class="nav-toggle" onClick={showNavBar}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          {/* links */}
          <ul ref={navRef} class="links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li className="nav-number">
              <a href={phoneLink}>
                <FontAwesomeIcon icon={faMobileScreen} /> 09065786099
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
