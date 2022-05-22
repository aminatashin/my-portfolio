import React from "react";
import "./nav.css";
import { GoHome } from "react-icons/go";
import { FiUserCheck } from "react-icons/fi";
import { BiBookContent } from "react-icons/bi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { BiMessageDots } from "react-icons/bi";
const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <GoHome />
      </a>
      <a href="#about">
        <FiUserCheck />
      </a>
      <a href="#experience">
        <BiBookContent />
      </a>
      <a href="#services">
        <RiCustomerService2Fill />
      </a>
      <a href="#contact">
        <BiMessageDots />
      </a>
    </nav>
  );
};

export default Nav;
