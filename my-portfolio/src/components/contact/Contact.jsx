import React from "react";
import "./contact.css";
import { MdMarkEmailRead } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { SiWhatsapp } from "react-icons/si";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdMarkEmailRead className="contact__option-icon" />
            <h4>Email</h4>
            <h5>amin.atashin@gmail.com</h5>
            <a href="mailto:amin.atashin@gmail.com" target="_blank">
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <BsMessenger className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>atisatish</h5>
            <a href="https://m.me/ami.atashin" target="_blank">
              Send Message
            </a>
          </article>
          <article className="contact__option">
            <SiWhatsapp className="contact__option-icon" />
            <h4>Whatsapp</h4>
            <h5>amin</h5>
            <a href="https://api.whatsapp.com/send?phone=+12067330906">
              Send Message
            </a>
          </article>
        </div>
        {/* end of contact option */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
