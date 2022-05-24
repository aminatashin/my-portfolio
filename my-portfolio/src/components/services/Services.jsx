import React from "react";
import "./services.css";
import { BsCheck } from "react-icons/bs";
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Dsign</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
          </ul>
        </article>
        {/* EnD OF UI?UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content creation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
            <li>
              <BsCheck className="service__lis-" />
              <p>Lorem ipsum dolor sit amet consectetur </p>
            </li>
          </ul>
        </article>
        {/* end of creation */}
      </div>
    </section>
  );
};

export default Services;
