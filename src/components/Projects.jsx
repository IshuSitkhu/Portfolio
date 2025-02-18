

import React from "react";

const projects = [
  {
    title: "Dice Game",
    image: "./Dice _Game.png",
    demo: "https://sprightly-lollipop-2c71eb.netlify.app/",
    github: "https://github.com/IshuSitkhu/DiceRoll_Game",
  },
  {
    title: "Guess My Number",
    image: "./GuessMyNumber.png",
    demo: "https://your-ecommerce-site.netlify.app",
    github: "https://github.com/IshuSitkhu/GuessNumberGame",
  },
  {
    title: "Travel Management System",
    image: "./IMS.png",
    demo: "https://your-news-app.netlify.app",
    github: "https://github.com/IshuSitkhu/TravelManagementSystem",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-16 px-5 bg-gradient-to-r from-blue-400 to-purple-500 text-white"
    >
      <h2 className="text-4xl font-extrabold text-white text-center mb-10 uppercase tracking-wide">
        My Projects
      </h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 bg-opacity-80 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-black transition-transform duration-300 transform hover:scale-105"
          >
            {/* Project Image */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 sm:h-56 object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4 text-center">
              <h3 className="text-2xl font-bold text-white">{project.title}</h3>
              <div className="mt-4 flex justify-center space-x-3">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-md bg-white text-blue-600 rounded-md hover:bg-gray-200 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-1.5 text-md bg-gray-800 text-white rounded-md hover:bg-gray-700 transition-transform duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
