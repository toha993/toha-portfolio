"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  User,
  Briefcase,
  Code,
  Award,
  FileText,
  Presentation,
} from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "About", icon: User },
    { name: "Experience", icon: Briefcase },
    { name: "Projects", icon: Presentation },
    { name: "Skills", icon: Code },
    { name: "Achievements", icon: Award },
    { name: "Resume", icon: FileText, isDownload: true },
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
                key={item.name}
                className="group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.isDownload ? (
                  <a
                    href="/assets/mutasim_resume.pdf"
                    download
                    className="flex items-center px-2 py-1 hover:text-blue-400 transition-colors duration-300"
                  >
                    <item.icon className="w-4 h-4 mr-1" />
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={`#${item.name.toLowerCase()}`}
                    className="flex items-center px-2 py-1 hover:text-blue-400 transition-colors duration-300"
                  >
                    <item.icon className="w-4 h-4 mr-1" />
                    {item.name}
                  </Link>
                )}
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
                key={item.name}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.isDownload ? (
                  <a
                    href="/assets/my-cv.pdf"
                    download
                    className="flex items-center px-2 py-1 hover:bg-gray-800 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </a>
                ) : (
                  <Link
                    href={`#${item.name.toLowerCase()}`}
                    className="flex items-center px-2 py-1 hover:bg-gray-800 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-4 h-4 mr-2" />
                    {item.name}
                  </Link>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.nav>
      )}
    </header>
  );
};

export default Header;
