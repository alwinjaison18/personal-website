"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full p-4 bg-white/80 dark:bg-gray-900/80 backdrop-filter backdrop-blur-lg z-50 border-b border-gray-200/20 dark:border-gray-700/20"
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500"
        >
          Alwin Jaison
        </motion.div>
        <div className="hidden md:flex space-x-8 text-gray-700 dark:text-gray-300 items-center">
          <Link
            href="#about"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 relative group"
          >
            About
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#skills"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 relative group"
          >
            Skills
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#projects"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 relative group"
          >
            Projects
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link
            href="#contact"
            className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 relative group"
          >
            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
          </Link>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex items-center space-x-4">
          <ThemeToggle />
          <motion.button
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            className="text-gray-700 dark:text-gray-300 p-2"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden mt-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-lg mx-4 p-4"
        >
          <div className="flex flex-col space-y-4 text-gray-700 dark:text-gray-300 items-center">
            {["about", "skills", "projects", "contact"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  href={`#${item}`}
                  onClick={toggleMenu}
                  className="hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 capitalize text-lg"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
