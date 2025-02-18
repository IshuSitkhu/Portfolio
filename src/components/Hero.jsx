
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Hero = ({ scrollToSection }) => {
  return (
    <section 
      id="home" 
      className="w-full h-screen flex flex-col justify-center items-center text-center p-5 relative bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Main Heading */}
      <motion.h1 
        className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
        initial={{ opacity: 0, y: -50 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1.5 }}
      >
        Hello, I'm Ishu Sitikhu
      </motion.h1>

      {/* Subtitle */}
      <motion.p 
        className="text-2xl text-gray-300 mt-3"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.3 }}
      >
        Full Stack Developer | BSc. CSIT Student
      </motion.p>

      {/* Buttons */}
      <motion.div 
        className="mt-6 flex gap-6"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5 }}
      >
        <button 
          onClick={() => scrollToSection("about")} 
          className="px-6 py-3 rounded-lg text-lg font-semibold bg-blue-500 hover:bg-blue-600 shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          More About Me
        </button>
        <a 
          href="#projects" 
          className="px-6 py-3 rounded-lg text-lg font-semibold border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          My Work
        </a>
      </motion.div>

      {/* Social Media Icons */}
      <motion.div 
        className="absolute bottom-6 flex gap-6 text-3xl mt-10"
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.7 }}
      >
        <a href="https://www.facebook.com/ishu.sitikhu" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-all duration-300 transform hover:scale-110">
          <FaFacebook />
        </a>
        <a href="https://github.com/IshuSitkhu" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition-all duration-300 transform hover:scale-110">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/ishu-sitikhu-3b7557237/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition-all duration-300 transform hover:scale-110">
          <FaLinkedin />
        </a>
        <a href="https://www.instagram.com/ishusitikhu_/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition-all duration-300 transform hover:scale-110">
          <FaInstagram />
        </a>
        <a href="mailto:ishusitikhu6@gmail.com" className="hover:text-red-500 transition-all duration-300 transform hover:scale-110">
          <FaEnvelope />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
