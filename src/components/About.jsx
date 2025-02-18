
import React from "react";

const About = () => {
  return (
    <section 
      id="about" 
      className="w-full py-20 px-5 text-center bg-gradient-to-b from-gray-900 to-black text-white"
    >
      {/* Glowing Title */}
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-12 drop-shadow-lg">
        About Me
      </h2>

      {/* About Me Section with Photo and Text */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-14">
        {/* Left Side: Larger Photo with Smooth Zoom on Hover */}
        <div className="relative w-72 h-72 rounded-full overflow-hidden shadow-[0_0_25px_rgba(0,150,255,0.6)] border-4 border-blue-500 transition-transform duration-500 hover:scale-110">
          <img
            src="public/IMG_4646.JPG" 
            alt="Ishu Sitikhu"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: About Me Text */}
        <div className="max-w-lg text-center md:text-left">
          <p className="text-lg text-gray-300 leading-relaxed">
            Hi, I'm <span className="text-blue-400 font-semibold">Ishu Sitikhu</span>, a passionate Full Stack Developer. I specialize in frontend development and am actively improving my backend skills to build modern, scalable web applications.
          </p>
          <p className="text-gray-400 mt-4">
            I am dedicated to mastering full-stack development while exploring new technologies and innovations in the tech world.
          </p>

          {/* Download CV Button with Gradient Effect */}
          <a 
            href="./_Ishu_CV_.pdf" 
            download="./_Ishu_CV_.pdf"
            className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition-all duration-300"
          >
            🚀 Download CV
          </a>
        </div>
      </div>

      {/* Education Section in Horizontal Layout */}
      <div className="mt-20 max-w-6xl mx-auto">
        <h3 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center">
          Education
        </h3>

        <div className="mt-8 flex flex-wrap justify-center gap-6">
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-gray-600 shadow-lg transition-transform hover:scale-105 w-80 text-center">
            <h4 className="text-2xl font-semibold text-blue-300">BSc. CSIT</h4>
            <p className="text-lg text-gray-400">New Summit College</p>
            <p className="text-sm text-gray-500">2022 - Present</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-gray-600 shadow-lg transition-transform hover:scale-105 w-80 text-center">
            <h4 className="text-2xl font-semibold text-blue-300">+2 Science</h4>
            <p className="text-lg text-gray-400">Khwopa Secondary School</p>
            <p className="text-sm text-gray-500">2019 - 2021</p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-gray-600 shadow-lg transition-transform hover:scale-105 w-80 text-center">
            <h4 className="text-2xl font-semibold text-blue-300">SEE</h4>
            <p className="text-lg text-gray-400">Genuine Secondary School</p>
            <p className="text-sm text-gray-500">2019</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
