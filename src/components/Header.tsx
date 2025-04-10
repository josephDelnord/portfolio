import { Link } from "react-router-dom";
import {
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaTools,
  FaBriefcase,
} from "react-icons/fa";
import logo from "../assets/img/logo.webp";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto p-6 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-40 h-40" />
          </Link>
        </div>

        <nav className="flex space-x-8">
          <Link
            to="/about"
            className="text-gray-600 relative group hover:text-teal-500 transition duration-300 ease-in-out flex items-center space-x-2 transform hover:scale-105"
          >
            <FaUser className="text-lg" />
            <span>About</span>
          </Link>
          <Link
            to="/careers"
            className="text-gray-600 relative group hover:text-teal-500 transition duration-300 ease-in-out flex items-center space-x-3 transform hover:scale-105"
          >
            <FaBriefcase className="text-2xl group-hover:scale-110 transition-transform duration-300" />{" "}
            {/* Icône adaptée pour Careers */}
            <span className="text-lg">Careers</span>
          </Link>
          <Link
            to="/skills"
            className="text-gray-600 relative group hover:text-teal-500 transition duration-300 ease-in-out flex items-center space-x-3 transform hover:scale-105"
          >
            <FaTools className="text-2xl group-hover:scale-110 transition-transform duration-300" />{" "}
            {/* Icône adaptée pour Skills */}
            <span className="text-lg">Skills</span>
          </Link>
          <Link
            to="/projects"
            className="text-gray-600 relative group hover:text-teal-500 transition duration-300 ease-in-out flex items-center space-x-2 transform hover:scale-105"
          >
            <FaProjectDiagram className="text-lg" />
            <span>Projects</span>
          </Link>

          <Link
            to="/contact"
            className="text-gray-600 relative group hover:text-teal-500 transition duration-300 ease-in-out flex items-center space-x-2 transform hover:scale-105"
          >
            <FaEnvelope className="text-lg" />
            <span>Contact</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
