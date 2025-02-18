import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ["home", "about", "skills", "projects", "contact"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 flex justify-center items-center px-10 py-4 z-50 transition-all ${scrolled ? "bg-gray-900 shadow-lg py-3" : "bg-transparent py-5"}`}>
      <div className="flex gap-5">
        {["home", "about", "skills", "projects", "contact"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`hover:text-blue-400 transition ${activeSection === id ? "text-blue-400 border-b-2 border-blue-400 pb-1" : "text-gray-300"}`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
