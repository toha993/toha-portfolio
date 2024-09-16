// app/page.tsx
import React from "react";
import Header from "../components/Header";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Achievements from "../components/Achievements";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-800">
      <Header />
      <div className="">
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Achievements />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
