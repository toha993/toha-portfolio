"use client";

import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/types";

const projectsData: Project[] = [
  {
    name: "Project-X",
    description:
      "A comprehensive digital platform for local delivery services.",
    technologies: [
      "Node.js",
      "Express",
      "MySQL",
      "React",
      "Google Cloud Services",
      "GitHub",
    ],
    link: "#",
  },
  {
    name: "URL Shortener",
    description: "A URL shortener service built with Domain Driven Design",
    technologies: ["Go", "MongoDB", "React", "Gin Framework"],
    link: "#",
  },
  {
    name: "Practice Yourself",
    description: "An Android app for vocabulary preparation",
    technologies: ["Java", "Android SDK", "SQLite"],
    link: "#",
  },
];

const Projects: React.FC = () => {
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
      id="projects"
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
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-blue-400 mb-2">
                  {project.name}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-900 text-blue-200 text-sm font-medium px-2.5 py-0.5 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <motion.a
                    href={project.link}
                    className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
