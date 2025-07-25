"use client";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import ParticleBackground from "./components/ParticleBackground";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <main className="relative z-10 bg-light-bg text-light-text dark:bg-gray-900 dark:text-white">
        <Navbar />
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-300 py-2">
              <Typewriter
                words={["Hi, I'm Alwin Jaison"]}
                loop={1}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              <Typewriter
                words={[
                  "A passionate Masters in Computer Application student specializing in building modern, responsive, and user-friendly web applications.",
                ]}
                loop={1}
                cursor={false}
                typeSpeed={50}
              />
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6"
          >
            <a
              href="#projects"
              className="group relative inline-block bg-gradient-to-r from-blue-500 to-teal-400 text-white font-bold py-4 px-10 rounded-full text-lg hover:from-blue-600 hover:to-teal-500 transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href="/resume.pdf"
              download="Alwin_Jaison_Resume.pdf"
              target="_blank"
              className="group relative inline-block border-2 border-blue-500 text-blue-500 dark:border-teal-400 dark:text-teal-400 font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-500 hover:text-white dark:hover:bg-teal-400 dark:hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
            >
              <span className="relative z-10">Download Resume</span>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="animate-bounce">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </motion.div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
