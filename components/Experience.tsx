"use client";

import React from "react";
import { motion } from "framer-motion";

const experienceData = [
  {
    title: "Software Engineer-I",
    company: "Optimizely",
    date: "Mar 2024 - Current",
    responsibilities: [
      "Developing a comprehensive design library for frontend development in React",
      "Implemented dynamic host resolution for API requests and added tests",
      "Enhanced support and Updated publicly exposed APIs",
      "Developed an online voting system for internal events",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Orbitax",
    date: "Mar 2022 - Feb 2024",
    responsibilities: [
      "Built and managed a module for customized client solutions",
      "Designed and implemented a data mapping algorithm",
      "Programmed a client support platform for real-time task assignment",
      "Developed and executed stress tests using JMeter",
      "Spearheaded design thinking workshops",
    ],
  },
  {
    title: "Intern, Software Engineer",
    company: "Orbitax",
    date: "Sept 2021 - Feb 2022",
    responsibilities: [
      "Implemented a module with Gin Framework for .Net to Golang conversion",
      "Integrated NoSQL database into existing infrastructure",
    ],
  },
];

const Experience: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          variants={itemVariants}
        >
          Professional Experience
        </motion.h2>
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div
            className="border-2-2 absolute border-opacity-20 border-gray-500 h-full border"
            style={{ left: "50%" }}
          ></div>
          {experienceData.map((exp, index) => (
            <motion.div
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0
                  ? "flex-row-reverse left-timeline"
                  : "right-timeline"
              }`}
              key={index}
              variants={itemVariants}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-blue-500 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {index + 1}
                </h1>
              </div>
              <motion.div
                className="order-1 bg-gray-700 rounded-lg shadow-xl w-5/12 px-6 py-4 hover:bg-gray-600 transition-colors duration-300"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="mb-3 font-bold text-blue-400 text-xl">
                  {exp.title}
                </h3>
                <h4 className="mb-3 font-semibold text-gray-300 text-lg">
                  {exp.company}
                </h4>
                <p className="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100">
                  {exp.date}
                </p>
                <ul className="list-disc list-inside mt-3">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <li key={respIndex} className="text-sm text-gray-300">
                      {resp}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
