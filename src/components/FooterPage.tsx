import type React from "react";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import cv from "../assets/docs/cv_joseph_delnord.pdf";

const FooterPage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const handleDownloadCV = () => {
    const fileUrl = cv;
    saveAs(fileUrl, "cv_joseph_delnord.pdf");
  };

  return (
    <footer className="mt-16 sm:mt-20 text-center mx-4 sm:mx-20">
      <p className="text-lg sm:text-xl text-gray-700 mb-4">
        N’hésitez pas à me contacter pour explorer les possibilités de
        collaboration !
      </p>
      <div className="flex justify-center gap-4 mt-16 sm:mt-20 mb-20">
        {/* Bouton Contact */}
        <button
          type="button"
          className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-900 hover:text-white border-2 border-blue-500 hover:border-blue-900 transition duration-300"
          onClick={handleClick}
        >
          Me contacter
        </button>
        {/* Bouton Télécharger CV avec handler */}
        <button
          type="button"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
          onClick={handleDownloadCV}
        >
          Télécharger mon CV
        </button>
      </div>
    </footer>
  );
};

export default FooterPage;
