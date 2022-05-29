import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";

import Services from "./components/services/Services";

import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
