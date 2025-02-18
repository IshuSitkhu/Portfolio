
import { FaFacebook, FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-8 mt-10 border-t-4 border-blue-400">
      {/* Social Icons */}
      <div className="flex justify-center space-x-6 text-3xl mb-4">
        <a
          href="https://www.facebook.com/ishu.sitikhu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition-transform transform hover:scale-110"
        >
          <FaFacebook />
        </a>
        <a
          href="https://github.com/IshuSitkhu"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ishu-sitikhu-3b7557237/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/ishusitikhu_/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition-transform transform hover:scale-110"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:ishusitikhu6@gmail.com"
          className="hover:text-red-500 transition-transform transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </div>

      {/* Copyright Text */}
      <p className="text-lg font-semibold tracking-wider">
        &copy; {new Date().getFullYear()} <span className="text-blue-400">Ishu Sitikhu</span>. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
