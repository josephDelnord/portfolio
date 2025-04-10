import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaTools,
  FaBriefcase,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import logo from "../assets/img/logo.webp";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white shadow-lg fixed w-full z-50 top-0 left-0">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Logo" className="w-32 h-32" />
        </Link>

        {/* Burger Button - visible en mobile */}
        <button
          type="button"
          className="text-3xl text-gray-700 md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLinks onClick={closeMenu} />
        </nav>
      </div>

      {/* Menu mobile (slide down) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col space-y-4 p-4">
            <NavLinks onClick={closeMenu} />
          </div>
        </div>
      )}
    </header>
  );
};

// Séparer les liens en un composant réutilisable
const NavLinks = ({ onClick }: { onClick: () => void }) => (
  <>
    <Link to="/about" onClick={onClick} className={linkClass}>
      <FaUser /> <span>About</span>
    </Link>
    <Link to="/careers" onClick={onClick} className={linkClass}>
      <FaBriefcase /> <span>Careers</span>
    </Link>
    <Link to="/skills" onClick={onClick} className={linkClass}>
      <FaTools /> <span>Skills</span>
    </Link>
    <Link to="/projects" onClick={onClick} className={linkClass}>
      <FaProjectDiagram /> <span>Projects</span>
    </Link>
    <Link to="/contact" onClick={onClick} className={linkClass}>
      <FaEnvelope /> <span>Contact</span>
    </Link>
  </>
);

const linkClass =
  "text-gray-600 flex items-center space-x-2 hover:text-teal-500 transition duration-300 ease-in-out text-lg";

export default Header;
