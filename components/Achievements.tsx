"use client";

import React from "react";
import { Achievement } from "../types";
import { motion } from "framer-motion";

const achievementsData: Achievement[] = [
  {
    title: "Algorithmic Toolbox",
    description:
      "Mastered essential algorithmic techniques for designing efficient algorithms, solving complex problems, and implementing reliable solutions for real-world scenarios and technical interviews.",
  },
  {
    title: "Government Scholarship",
    description: "HSC 2017, Notre Dame College, Dhaka, Bangladesh",
  },
  {
    title: "Government Scholarship",
    description: "SSC 2015, Cumilla Zilla School, Cumilla, Bangladesh",
  },
  {
    title: "Government Scholarship",
    description: "JSC 2012, Cumilla Zilla School, Cumilla, Bangladesh",
  },
  {
    title: "Competitive Programming",
    description:
      "Solved 500+ problems on CodeForces, 150+ problems on UVa, and 70+ problems on CodeChef",
  },
  {
    title: "SUST Engagement",
    description:
      "Organized problem-solving contest in SWE department, enhancing students' algorithmic and coding skills. Volunteered in SUST Admission processes (2018, 2019) and SUST SWE Technovent 2023.",
  },
  {
    title: "Student Mentorship",
    description:
      "Guided newly admitted and final-year Software Engineering students in academic and professional development, including job search strategies.",
  },
  {
    title: "Industry Contribution",
    description: "Served as Problem Setter for Orbitax Recruitment 2023",
  },
  {
    title: "Sports Achievements",
    description:
      "Champion, Intra IICT Inter Football Tournament 2019 and Intra SWE Cricket Tournament 2022",
  },
];

const Achievements: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="achievements"
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
          Achievements & Certificates
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg p-6 hover:bg-gray-600 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold text-blue-400 mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-300">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
