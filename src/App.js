import React from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
import Skill from "./components/Skill";
import Education from "./components/Education";
import Experience from "./components/Experience";
import About from "./components/About";

function App() {
  return (
    <div id="colorlib-page">
      <div class="container-wrap"></div>
      <SideBar></SideBar>
      <div id="colorlib-main">
        <Home></Home>
        <About></About>
        <Skill></Skill>
        <Education></Education>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default App;
