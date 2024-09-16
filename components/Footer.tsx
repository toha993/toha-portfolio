"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

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
    <motion.footer
      className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-12"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div className="mb-6 md:mb-0" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-blue-400">
              Mutasim Billah Toha
            </h3>
            <p className="text-gray-300">Software Engineer</p>
          </motion.div>
          <motion.div className="flex space-x-6" variants={itemVariants}>
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
                className="flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span>{link.icon}</span>
                <span>{link.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400"
          variants={itemVariants}
        >
          <p>&copy; {currentYear} Mutasim Billah Toha. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
