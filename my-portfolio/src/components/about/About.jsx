import React from "react";
import "./about.css";
import ME2 from "../../assets/me8.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { RiFolderShield2Line } from "react-icons/ri";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME2} alt="about image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiene</h5>
              <small>6 months' with Epicode school</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200</small>
            </article> */}
            <article className="about__card">
              <RiFolderShield2Line className="about__icon" />
              <h5>Projects</h5>
              <small>4 completed</small>
            </article>
          </div>
          <p>Projects: Netflix , Amazon , Spotify , Linkedin</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
