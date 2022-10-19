import React, { useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";
import Portfolio from "./Components/Portfolio";
import ReactGA from "react-ga";

ReactGA.initialize("G-7D84501S6W");

const App = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  return (
    <div className="App">
      <Header />
      <About data={mainn} />
      <Resume data={resu} />
      <Portfolio data={porto} />
      <Contact data={mainn} />
      <Footer data={mainn} />
    </div>
  );
};

export default App;
