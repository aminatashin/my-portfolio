import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="linkedin.com/in/amin-atashkhayer-5343a7196" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/aminatashin" target="_blank">
        <BsGithub />
      </a>
      <a href="https://www.instagram.com/aminatashin/" target="_blank">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
