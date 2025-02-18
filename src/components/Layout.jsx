import React, { useState, useEffect } from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Layout = ({ children }) => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 } // Detect when 60% of a section is visible
    );

    sections.forEach((section) => observer.observe(section));
    
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <div>
      {children}

      {/* Social Icons - Show only in Hero or Contact */}
      {(currentSection === "home" || currentSection === "contact") && (
        <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 text-3xl text-gray-300">
          <a href="https://www.facebook.com/ishu.sitikhu" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="hover:text-blue-500 transition" />
          </a>
          <a href="https://github.com/IshuSitkhu" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-500 transition" />
          </a>
          <a href="https://www.linkedin.com/in/ishu-sitikhu-3b7557237/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-700 transition" />
          </a>
          <a href="https://www.instagram.com/ishusitikhu_/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition" />
          </a>
          <a href="mailto:ishusitikhu6@gmail.com">
            <FaEnvelope className="hover:text-red-500 transition" />
          </a>
        </div>
      )}
    </div>
  );
};

export default Layout;
