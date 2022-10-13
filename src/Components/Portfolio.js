import React from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";

const Portfolio = () => {
  const projectss = [
    {
      title: "Flutter E-menu",
      category: "Flutter",
      image: "01.jpg",
      url: "https://www.behance.net/gallery/144695145/E-Menu",
    },
    {
      title: "Flutter Smart Home",
      category: "Flutter",
      image: "02.jpg",
      url: "https://www.behance.net/gallery/145216659/smart-Home-Aplication",
    },
    {
      title: "Tic Tac Toe online",
      category: "React JS",
      image: "03.jpg",
      url: "https://tic-tac-gamma.vercel.app/login",
    },
    {
      title: "React E-Menu",
      category: "React",
      image: "04.jpg",
      url: "https://react-e-menu.vercel.app/login",
    },
    {
      title: "Face music",
      category: "Flutter",
      image: "05.jpg",
      url: "https://github.com/MHD-Saleh",
    },
    {
      title: "Flutter We Poll",
      category: "Flutter",
      image: "06.jpg",
      url: "https://www.behance.net/gallery/154712089/We-Poll",
    },
  ];
  let id = 0;
  const projectts = projectss.map(function (projects) {
    let projectImage = "images/portfolio/" + projects.image;
    console.log(projectImage);
    return (
      <div key={id++} className="columns portfolio-item">
        <div className="item-wrap">
          <Zmage alt={projects.title} src={projectImage} />
          <div style={{ textAlign: "center" }}>
            {" "}
            <a href={projects.url}>{projects.title}</a>
          </div>
        </div>
      </div>
    );
  });
  return (
    <section id="portfolio">
      <Fade left duration={1000} distance="40px">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>
              Some of My Works.
              <br />
              "Name is Link"
            </h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {projectts}
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Portfolio;
/*
let id = 0;
class Portfolioo extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}
*/
