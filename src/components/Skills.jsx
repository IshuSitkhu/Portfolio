

import React from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase 
} from "react-icons/fa";
import { SiTailwindcss, SiFirebase } from "react-icons/si"; 

const SkillItem = ({ icon, skill }) => {
  return (
    <div className="skill-item flex flex-col items-center p-5 bg-gray-800 rounded-xl shadow-md hover:bg-gray-700 transition-all">
      <div className="skill-icon text-7xl">{icon}</div> 
      <div className="mt-2 text-2xl font-semibold text-blue-400">{skill}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="w-full py-20 px-5 bg-gradient-to-b from-gray-900 to-black text-white">
      <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 text-center mb-12">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="skills-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10">
        <SkillItem icon={<FaHtml5 className="text-orange-500" />} skill="HTML" />
        <SkillItem icon={<FaCss3Alt className="text-blue-500" />} skill="CSS" />
        <SkillItem icon={<SiTailwindcss className="text-cyan-500" />} skill="Tailwind CSS" />
        <SkillItem icon={<FaJs className="text-yellow-500" />} skill="JavaScript" />
        <SkillItem icon={<FaReact className="text-cyan-500" />} skill="React" />
        <SkillItem icon={<FaNodeJs className="text-green-500" />} skill="Node.js" />
        <SkillItem icon={<FaDatabase className="text-red-500" />} skill="MySQL" />
        <SkillItem icon={<SiFirebase className="text-yellow-400" />} skill="Firebase" />
      </div>
    </section>
  );
};

export default Skills;
