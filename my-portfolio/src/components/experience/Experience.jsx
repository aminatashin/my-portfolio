import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills i Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>html</h4>

                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>

                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>BootStrap</h4>

                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>React</h4>

                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>REDUX</h4>

                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TypeScript</h4>

                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONT END */}
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>

                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>

                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>

                <small className="text-light">Beginner</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsFillPatchCheckFill />
              <h4>BootStrap</h4>
              <small className="text-light">Beginner</small>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
