import React from "react";
import Fade from "react-reveal";

const Footer = () => {
  const social = [
    {
      name: "facebook",
      url: "https://www.facebook.com/saleh.alsaleh.7737769/",
      className: "fa fa-facebook",
    },
    {
      name: "twitter",
      url: "https://twitter.com/mhd98saleh",
      className: "fa fa-twitter",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/mhd-saleh-503628182/",
      className: "fa fa-linkedin",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/mohammed_alsaleh98/",
      className: "fa fa-instagram",
    },
    {
      name: "github",
      url: "https://github.com/MHD-Saleh",
      className: "fa fa-github",
    },
  ];

  const networkss = social.map(function (network) {
    return (
      <li key={network.name}>
        <a href={network.url}>
          <i className={network.className}></i>
        </a>
      </li>
    );
  });

  return (
    <footer>
      <div className="row">
        <Fade bottom>
          <div className="twelve columns">
            <ul className="social-links">{networkss}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2022 MHD Saleh</li>
            </ul>
          </div>
        </Fade>

        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
