"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, FileText } from "lucide-react";

interface Achievement {
  title: string;
  pdf: string;
  description: string;
}

interface CompetitiveProgramming {
  platform: string;
  link: string;
  problemsSolved: number;
}

const achievementsData: Achievement[] = [
  {
    title: "Algorithmic Toolbox",
    pdf: "/assets/algorithmic-toolbox.pdf",
    description:
      "Mastered essential algorithmic techniques for designing efficient algorithms, solving complex problems, and implementing reliable solutions for real-world scenarios and technical interviews.",
  },
  {
    title: "Namaste React",
    pdf: "/assets/namaste-react.webp",
    description:
      "Mastered essential React concepts and techniques for building dynamic, production-ready web applications, including component design, state management, routing, and performance optimization, equipping you to tackle complex development challenges and excel in technical interviews.",
  },
];

const competitiveProgrammingData: CompetitiveProgramming[] = [
  {
    platform: "CodeForces",
    link: "https://codeforces.com/profile/Henrick993",
    problemsSolved: 500,
  },
  {
    platform: "UVa",
    link: "http://uhunt.felix-halim.net/id/952077",
    problemsSolved: 150,
  },
  {
    platform: "CodeChef",
    link: "https://www.codechef.com/users/henrick993",
    problemsSolved: 70,
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
          Achievements & Certificates
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Certifications
            </h3>
            {achievementsData.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-gray-700 rounded-lg p-6 mb-6 hover:bg-gray-600 transition-colors duration-300"
                variants={itemVariants}
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-blue-300">
                    {achievement.title}
                  </h4>
                  <motion.a
                    href={achievement.pdf}
                    download
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FileText size={18} />
                  </motion.a>
                </div>
                <p className="text-gray-300">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">
              Competitive Programming
            </h3>
            <div className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors duration-300">
              {competitiveProgrammingData.map((platform, index) => (
                <motion.div
                  key={index}
                  className="mb-4 last:mb-0"
                  variants={itemVariants}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-xl font-semibold text-blue-300">
                      {platform.platform}
                    </h4>
                    <motion.a
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink size={18} />
                    </motion.a>
                  </div>
                  <p className="text-gray-300">
                    Solved {platform.problemsSolved}+ problems
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Achievements;
