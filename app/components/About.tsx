"use client";
import { motion } from "framer-motion";
import { FaUser, FaCode, FaGraduationCap } from "react-icons/fa";
import Image from "next/image";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Geometric Shapes */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-r from-blue-400/20 to-teal-400/20 rounded-lg"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 100, 0],
            rotate: [0, -180, -360],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full"
        />
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-32 left-1/4 w-8 h-20 bg-gradient-to-b from-green-400/20 to-blue-400/20 rounded-full transform rotate-45"
        />
        <motion.div
          animate={{
            x: [0, -120, 0],
            y: [0, 60, 0],
            rotate: [0, 90, 180],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-1/3 w-14 h-14 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 transform rotate-45"
        />

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-gray-400/30"></div>
            ))}
          </div>
        </div>

        {/* Animated Dots */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
              className="absolute w-2 h-2 bg-blue-400/40 rounded-full"
              style={{
                left: `${10 + i * 6}%`,
                top: `${20 + (i % 3) * 25}%`,
              }}
            />
          ))}
        </div>

        {/* Curved Lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
        >
          <motion.path
            d="M0,300 Q250,200 500,300 T1000,300"
            stroke="url(#gradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.path
            d="M0,700 Q250,600 500,700 T1000,700"
            stroke="url(#gradient2)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-500">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-2 md:order-1"
          >
            <div className="relative">
              {/* Profile Picture Container with Gradient Border */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-blue-500 to-teal-400 p-1 shadow-2xl">
                <div className="w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-gray-800 relative">
                  <Image
                    src="/profile.png"
                    alt="Alwin Jaison - Profile Picture"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Overlay for better contrast in different themes */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent dark:from-white/5"></div>
                </div>
              </div>
              {/* Floating icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg"
              >
                <FaCode className="text-xl" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-teal-500 text-white p-3 rounded-full shadow-lg"
              >
                <FaGraduationCap className="text-xl" />
              </motion.div>

              {/* Decorative elements around the image */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-teal-400/20 blur-xl"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2"
          >
            <div className="space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Passionate Developer & Problem Solver
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                I am a passionate and driven Masters in Computer Application
                student with a strong foundation in web development. I
                specialize in creating modern, responsive, and user-friendly web
                applications using the latest technologies.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                My goal is to leverage my skills to build innovative solutions
                that solve real-world problems and create meaningful digital
                experiences.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Years Learning
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-600 dark:text-teal-400">
                    4+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Projects Built
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                    8+
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Technologies
                  </div>
                </div>
              </div>

              {/* Download Resume Button */}
              <div className="mt-8 pt-6">
                <a
                  href="/resume.pdf"
                  download="Alwin_Jaison_Resume.pdf"
                  target="_blank"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-teal-500 text-white py-3 px-6 rounded-full hover:from-blue-700 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl font-semibold"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Download Resume
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
