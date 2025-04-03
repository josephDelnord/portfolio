import type React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white text-center py-6 mt-auto">
      <p className="text-sm md:text-base">
        © 2024 Joseph Delnord. Tous droits réservés.
      </p>
      <div className="flex justify-center mt-4 space-x-4">
        <Link
          to="https://www.linkedin.com/in/joseph-delnord/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          LinkedIn
        </Link>
        <Link
          to="https://www.facebook.com/joseph.delnord/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          Facebook
        </Link>
        <Link
          to="https://www.instagram.com/josephpariis/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition duration-300"
        >
          Instagram
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
