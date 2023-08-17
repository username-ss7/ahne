import React from "react";
import Homepage from "./pages/Homepage";
import Insurance from "../src/components/Insurance";
import About from "../src/components/About";
import Contact from "./components/Contact";
import Policy from "../src/components/Policy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer2 from "./components/Footer2";
import Copyright from "./components/Copyright";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element=<Homepage /> />
        <Route path="/About" element=<About /> />
        <Route path="/Insurance" element=<Insurance /> />
        <Route path="/Policy" element=<Policy /> />
        <Route path="/Contact" element=<Contact /> />
      </Routes>
      <Footer2 />
      <Copyright />
    </>
  );
};

export default App;
