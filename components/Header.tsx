"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Achievements",
  ];

  return (
    <header className="bg-gray-900 text-white p-4 fixed w-full z-10 transition-all duration-300 ease-in-out">
      <div className="container mx-auto flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-blue-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mutasim Billah Toha
        </motion.h1>
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <motion.li
                key={item}
                className="group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative overflow-hidden px-2 py-1"
                >
                  <span className="relative z-10 group-hover:text-blue-400 transition-colors duration-300">
                    {item}
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <motion.button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </motion.button>
      </div>
      {isOpen && (
        <motion.nav
          className="md:hidden mt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <ul className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <motion.li
                key={item}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="block px-2 py-1 hover:bg-gray-800 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
