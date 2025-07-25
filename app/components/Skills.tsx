"use client";
import { motion } from "framer-motion";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiJavascript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FiZap } from "react-icons/fi";

const skills = [
  { name: "React", level: "90%", icon: <FaReact className="text-blue-400" /> },
  {
    name: "Next.js",
    level: "85%",
    icon: <TbBrandNextjs className="text-white" />,
  },
  {
    name: "Tailwind CSS",
    level: "95%",
    icon: <SiTailwindcss className="text-teal-400" />,
  },
  {
    name: "Framer Motion",
    level: "80%",
    icon: <FiZap className="text-purple-400" />,
  },
  {
    name: "TypeScript",
    level: "85%",
    icon: <SiTypescript className="text-blue-500" />,
  },
  {
    name: "JavaScript",
    level: "90%",
    icon: <SiJavascript className="text-yellow-400" />,
  },
  { name: "HTML", level: "95%", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: "90%", icon: <FaCss3Alt className="text-blue-600" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-500">
            My Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative z-10 flex flex-col items-center">
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                  {skill.name}
                </h3>

                {/* Skill level bar */}
                <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-3 mb-2">
                  <motion.div
                    className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
                    style={{ width: "0%" }}
                    whileInView={{ width: skill.level }}
                    transition={{
                      duration: 1.5,
                      ease: "easeOut",
                      delay: index * 0.1,
                    }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                  {skill.level}
                </span>
              </div>

              {/* Floating particles effect */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
              <div className="absolute bottom-2 left-2 w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 animate-pulse"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional skills section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Additional Skills & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Git",
              "GitHub",
              "VS Code",
              "Figma",
              "Responsive Design",
              "API Integration",
            ].map((tool, index) => (
              <motion.span
                key={tool}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
