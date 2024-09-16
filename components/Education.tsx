"use client";

import React from "react";
import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Bachelor of Science in Software Engineering",
    institution: "Shahjalal University of Science & Technology",
    date: "Jan 2018 - Jan 2023",
    details: "CGPA: 3.43 out of 4.00",
  },
];

const Education: React.FC = () => {
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
      id="education"
      className="py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white"
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
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg p-6 mb-6 hover:bg-gray-600 transition-colors duration-300"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                {edu.degree}
              </h3>
              <p className="text-xl text-gray-300 mb-2">{edu.institution}</p>
              <p className="text-lg text-gray-400 mb-2">{edu.date}</p>
              {edu.details && (
                <p className="text-md text-gray-400">{edu.details}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
