"use client";

import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Languages",
    items: ["C#", "TypeScript", "JavaScript", "Go", "Java", "C++", "Python"],
  },
  {
    category: "Frameworks",
    items: [".Net", "Angular", "React", "ExpressJs", "Gin", "VueJs", "Flask"],
  },
  {
    category: "Tools",
    items: [
      "GitHub",
      "Postman",
      "Docker",
      "Jira",
      "Bitbucket",
      "Sourcetree",
      "Jmeter",
      "Jenkins",
    ],
  },
  {
    category: "Other",
    items: [
      "MongoDB",
      "MySQL",
      "RabbitMQ",
      "Grafana",
      "Datadog",
      "Adobe Analytics",
      "Redis",
      "SRS",
      "Microservice basics",
      "Design patterns",
    ],
  },
];

const Skills: React.FC = () => {
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
      id="skills"
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
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((skillCategory, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg p-6"
              variants={itemVariants}
            >
              <h3 className="text-2xl font-semibold text-blue-400 mb-4">
                {skillCategory.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    className="bg-gray-600 text-blue-200 text-sm font-medium px-3 py-1 rounded-full hover:bg-blue-600 hover:text-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
