"use client";
import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <motion.div
        animate={{ x: ["0%", "100%", "0%"], y: ["0%", "100%", "0%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute w-96 h-96 bg-gradient-to-br from-blue-500 to-teal-400 rounded-full opacity-20 blur-3xl"
        style={{ top: "10%", left: "10%" }}
      />
      <motion.div
        animate={{ x: ["100%", "0%", "100%"], y: ["100%", "0%", "100%"] }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute w-80 h-80 bg-gradient-to-br from-purple-500 to-pink-400 rounded-full opacity-20 blur-3xl"
        style={{ top: "50%", left: "70%" }}
      />
      <motion.div
        animate={{ x: ["50%", "-50%", "50%"], y: ["-50%", "50%", "-50%"] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute w-72 h-72 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full opacity-10 blur-3xl"
        style={{ top: "80%", left: "20%" }}
      />
    </div>
  );
};

export default BackgroundAnimation;
