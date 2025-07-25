"use client";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaJs,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFlask,
  SiMongodb,
  SiBootstrap,
} from "react-icons/si";
import { MdHealthAndSafety } from "react-icons/md";

const projects = [
  {
    title: "Health Inspector",
    description:
      "A comprehensive health monitoring application built with Flask and MongoDB. Features disease prediction using machine learning, health record management, and user-friendly interface for tracking personal health metrics.",
    technologies: [
      <FaPython key="python" className="text-blue-500" />,
      <SiFlask key="flask" className="text-green-600" />,
      <SiMongodb key="mongodb" className="text-green-500" />,
      <SiBootstrap key="bootstrap" className="text-purple-600" />,
    ],
    liveLink: "https://healthinspector-demo.herokuapp.com",
    githubLink: "https://github.com/alwinjaison18/HealthInspector",
    category: "Full Stack",
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website with dark/light themes, smooth animations using Framer Motion, and interactive particle background. Built with Next.js and Tailwind CSS for optimal performance.",
    technologies: [
      <SiNextdotjs key="next" className="text-black dark:text-white" />,
      <FaReact key="react" className="text-blue-500" />,
      <SiTailwindcss key="tailwind" className="text-cyan-500" />,
      <FaJs key="js" className="text-yellow-500" />,
    ],
    liveLink: "https://alwinjaison18.github.io/personal-website",
    githubLink: "https://github.com/alwinjaison18/personal-website",
    category: "Frontend",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-blue-500">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are my featured projects that showcase my skills in full-stack
            development, machine learning, and modern web technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700"
            >
              {/* Project Image/Preview */}
              <div className="relative h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-teal-400 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                <div className="relative z-10 text-white text-center">
                  <div className="text-4xl mb-2">🚀</div>
                  <span className="text-sm font-medium bg-white bg-opacity-20 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.liveLink}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full transition-colors duration-300"
                    aria-label="View Live Project"
                  >
                    <FaExternalLinkAlt className="text-lg" />
                  </a>
                  <a
                    href={project.githubLink}
                    className="bg-gray-800 hover:bg-gray-900 text-white p-3 rounded-full transition-colors duration-300"
                    aria-label="View Source Code"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    Built with:
                  </span>
                  <div className="flex gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="text-xl text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300 text-center font-medium"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-500 hover:text-blue-500 py-2 px-4 rounded-lg transition-all duration-300"
                  >
                    <FaGithub className="text-lg" />
                  </a>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/alwinjaison18"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white py-3 px-8 rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105"
          >
            <FaGithub className="text-xl" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
