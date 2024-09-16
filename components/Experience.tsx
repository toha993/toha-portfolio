"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const experienceData = [
  {
    title: "Software Engineer-I",
    company: "Optimizely",
    date: "Mar 2024 - Present",
    responsibilities: [
      "Developed React design library for consistent, accessible UI/UX",
      "Implemented dynamic API host resolution with robust testing",
      "Enhanced and updated public APIs",
      "Created internal event voting system",
    ],
  },
  {
    title: "Associate Software Engineer",
    company: "Orbitax",
    date: "Mar 2022 - Feb 2024",
    responsibilities: [
      "Built module for customized client solutions",
      "Optimized data mapping algorithm: 2 hours to 10 minutes for 10+ grid types",
      "Developed real-time client support platform, reducing resolution time",
      "Conducted JMeter stress tests for 1,000+ concurrent users",
      "Led design thinking workshops, generating 5+ new features",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Orbitax",
    date: "Sept 2021 - Feb 2022",
    responsibilities: [
      "Automated .NET to Golang conversion, reducing response time by 30%",
      "Integrated NoSQL, cutting query times by 30%",
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

  const ResponsibilityItem: React.FC<{ text: string }> = ({ text }) => (
    <motion.li
      className="flex items-start space-x-2 mb-2"
      variants={itemVariants}
    >
      <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-400" />
      <span className="text-sm text-gray-300">{text}</span>
    </motion.li>
  );

  return (
    <section
      id="experience"
      className="py-12 md:py-20 bg-gradient-to-b from-gray-900 to-gray-800 text-white"
    >
      <motion.div
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center"
          variants={itemVariants}
        >
          Professional Experience
        </motion.h2>

        <div className="hidden md:block relative wrap overflow-hidden p-10 h-full">
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
                <p className="text-sm leading-snug tracking-wide text-gray-400 text-opacity-100 mb-4">
                  {exp.date}
                </p>
                <motion.ul className="space-y-2" variants={containerVariants}>
                  {exp.responsibilities.map((resp, respIndex) => (
                    <ResponsibilityItem key={respIndex} text={resp} />
                  ))}
                </motion.ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="md:hidden space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-xl p-6 hover:bg-gray-600 transition-colors duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="mb-2 font-bold text-blue-400 text-xl">
                {exp.title}
              </h3>
              <h4 className="mb-2 font-semibold text-gray-300 text-lg">
                {exp.company}
              </h4>
              <p className="mb-4 text-sm text-gray-400">{exp.date}</p>
              <motion.ul className="space-y-2" variants={containerVariants}>
                {exp.responsibilities.map((resp, respIndex) => (
                  <ResponsibilityItem key={respIndex} text={resp} />
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
