import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import ExperienceTimeline from "./components/ExperienceTimeline";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <Summary />
      <Experience />
      <ExperienceTimeline />
      <Projects />
    </>
  );
}

export default App;
