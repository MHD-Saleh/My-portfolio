import React from "react";
import Slide from "react-reveal";

const Resume = () => {
  const getRandomColor = () => {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const myskills = [
    {
      name: "React JS",
      level: "80%",
    },
    {
      name: "flutter",
      level: "70%",
    },
    {
      name: "Redux",
      level: "65%",
    },
    {
      name: "HTML",
      level: "82%",
    },
    {
      name: "CSS",
      level: "70%",
    },
    {
      name: "SQL",
      level: "60%",
    },
  ];

  const mysoftskills = [
    {
      name: "Adobe XD",
      level: "90%",
    },
    {
      name: "UX/Ui Design",
      level: "80%",
    },
    {
      name: "Postman",
      level: "75%",
    },
    {
      name: "illustartor",
      level: "55%",
    },
  ];

  const skills = myskills.map((skills) => {
    const backgroundColor = getRandomColor();
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  const softskills = mysoftskills.map((skills) => {
    const backgroundColor = getRandomColor();
    const className = "bar-expand " + skills.name.toLowerCase();
    const width = skills.level;

    return (
      <li key={skills.name}>
        <span style={{ width, backgroundColor }} className={className}></span>
        <em>{skills.name}</em>
      </li>
    );
  });

  return (
    <>
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">
                  {" "}
                  <div>
                    <h3>University</h3>
                    <p className="info">
                      Yarmouk Private University <span>&bull;</span>
                      <em className="date">2017</em>
                    </p>
                    <p>
                      Start Education at YPU at software engineering faculty
                      (last Year)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>
                Highly adept at conveying complex technical information to a
                variety of professional and lay audiences in a clear and
                understandable manner.
              </p>
              <h3>Languages & framework</h3>
              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
              <h3>Software Skills</h3>
              <div className="bars">
                <ul className="skills">{softskills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    </>
  );
};

export default Resume;
