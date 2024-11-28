import { useState } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Service from "./components/Service";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Testimonial from "./components/Testimonial";
import Partners from "./components/Partners";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Service />
      <Resume />
      <Portfolio />
      <Testimonial />
      <Partners />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
