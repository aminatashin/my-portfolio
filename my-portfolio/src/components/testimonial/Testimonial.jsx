import React from "react";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <section id="#testimonial">
      <h5>Rview from clients</h5>
      <h2>Testmonials</h2>
      <div className="container testimonials__container">
        {data.map(({ name, avatar, review }, index) => {
          return (
            <>
              <article key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="clientavatar" />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>
              </article>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonial;
