import React from "react";
import Fade from "react-reveal";
import ig from "../image/me.jpg";

import cv from "../C.V.pdf";

const About = () => {
  return (
    <section id="about">
      <Fade duration={1000}>
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src={ig} alt={ig} />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>
              With over 5 years of experience in Android mobile app development and 4 years specializing in Flutter hybrid mobile app development, alongside 4 years of expertise as a React.js developer, I am a seasoned Mobile Developer dedicated to delivering top-notch solutions across diverse platforms. I bring expertise in crafting clean, readable, and testable code, with a strong understanding of architectural patterns in both mobile and web development.
Having built numerous applications across various domains, I possess a deep understanding of mobile and web development principles and am adept at translating client requirements into robust, user-centric solutions. My commitment to quality assurance ensures that all projects are completed to the highest standards and delivered on time.
As a freelancer, customer satisfaction is paramount to me. I take pride in exceeding client expectations, meeting deadlines, and prioritizing clear communication throughout the development process.
If you're seeking a highly skilled and experienced mobile and web development expert with a passion for quality and client satisfaction, I'm here to bring your vision to life.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>Mohammed Saleh</span>
                  <br />
                  <span>Egypt/ Giza/ 6th of October, Al Ashraf Street</span>
                  <br />
                  <span>+963-992278948</span>
                  <br />
                  <span>Saleh.alsaleh.1998@hotmail.com</span>
                  <span>mohammed.saleh.alsaleh.98@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={cv} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default About;
