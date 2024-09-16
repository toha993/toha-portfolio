"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const About: React.FC = () => {
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
      id="about"
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
          About Me
        </motion.h2>
        <div className="flex flex-col lg:flex-row items-center justify-center">
          <motion.div
            className="lg:w-1/3 mb-8 lg:mb-0 flex justify-center"
            variants={itemVariants}
          >
            <div className="relative w-64 h-64 lg:w-80 lg:h-80">
              <Image
                src="/images/profile-picture.jpg"
                alt="Mutasim Billah Toha"
                layout="fill"
                objectFit="cover"
                className="rounded-full shadow-lg border-4 border-blue-500 hover:border-blue-400 transition-all duration-300"
              />
            </div>
          </motion.div>
          <motion.div className="lg:w-2/3 lg:pl-12" variants={itemVariants}>
            <motion.p
              className="text-xl mb-6 text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              Software Engineer with experience in React, Python, .NET, and
              Angular. Passionate about green cloud computing and data-driven
              software engineering. Strong problem-solving skills demonstrated
              through competitive programming achievements.
            </motion.p>
            <motion.div
              className="flex flex-wrap justify-center gap-4"
              variants={itemVariants}
            >
              {[
                {
                  href: "mailto:mutasimbillahtoha@gmail.com",
                  label: "Email",
                  icon: "📧",
                },
                {
                  href: "https://linkedin.com/in/mutasim-toha",
                  label: "LinkedIn",
                  icon: "💼",
                },
                {
                  href: "https://github.com/toha993",
                  label: "GitHub",
                  icon: "🐙",
                },
              ].map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300 transform hover:scale-105 flex items-center space-x-2"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>{link.icon}</span>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
