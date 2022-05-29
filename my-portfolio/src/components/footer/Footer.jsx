import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { GrLinkedin } from "react-icons/gr";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/ami.atashin">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/aminatashin/">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/amin-atashkhayer-5343a7196/">
          <GrLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
