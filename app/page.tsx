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
    <main className="min-h-screen bg-gray-900">
      <Header />
      <div className="py-10">
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Achievements />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
