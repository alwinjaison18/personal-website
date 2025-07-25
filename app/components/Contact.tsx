"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaPaperPlane, FaUser, FaEnvelope, FaComment } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }, 2000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
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
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-orange-500">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-orange-500 mx-auto rounded-full mb-4"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Let's start a conversation
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                I'm always open to discussing new opportunities, creative
                projects, or just having a chat about technology and
                development.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-3 rounded-full">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    alwinjaison1@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                  <FaUser className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Bangalore/ Available for remote work
                  </p>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <div className="mt-8">
              <a
                href="/resume.pdf"
                download="Alwin_Jaison_Resume.pdf"
                target="_blank"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 text-white py-3 px-6 rounded-full hover:from-gray-900 hover:to-black transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
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

            {/* Floating decoration */}
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute top-8 -left-8 w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-30"
              />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-gray-50 dark:bg-gray-800 p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUser className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute left-4 top-4 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300"
                />
              </div>

              <div className="relative">
                <FaComment className="absolute left-4 top-4 text-gray-400" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows={6}
                  required
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 dark:text-white transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold py-4 px-6 rounded-xl hover:from-pink-600 hover:to-orange-600 transition-all duration-300 transform flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Success message area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-6 text-center"
            >
              <p className="text-sm text-gray-600 dark:text-gray-400">
                I'll get back to you as soon as possible! 🚀
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
