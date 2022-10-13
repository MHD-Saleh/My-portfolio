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
              My name is mohammed AL-Saleh, 24 years, in the final year of
              software engineering, Exceptionally creative and dependable Lead
              Front-end Developer with superb work ethic. I am knowledgeable in
              a wide variety of computer languages as well as the principles and
              techniques of website construction and mobile apps.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>MHD Saleh</span>
                  <br />
                  <span>Damascus/Ruken AL-Din</span>
                  <br />
                  <span>+963-992278948</span>
                  <br />
                  <span>Saleh.alsaleh.1998@hotmail.com</span>
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
