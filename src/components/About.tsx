import type React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUserAlt,
  FaBriefcase,
  FaLightbulb,
  FaPhotoVideo,
  FaGlobeAmericas,
} from "react-icons/fa";
import { saveAs } from "file-saver";
import cv from "../assets/docs/cv_joseph_delnord.pdf";
import ghibli from "../assets/img/ghibli.webp";
import portrait from "../assets/img/portrait1.webp";

const About: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const handleDownloadCV = () => {
    const fileUrl = cv;
    saveAs(fileUrl, "cv_joseph_delnord.pdf");
  };

  return (
    <section className="container mx-auto p-8 bg-white rounded-lg shadow-xl my-32">
      <header className="text-center mx-20 my-32">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          Développeur full-stack | React & NodeJS
        </h1>
        <p className="text-xl text-gray-600">
          Alliant design soigné, performance optimale et accessibilité
        </p>
      </header>

      {/* Section 0 - Portrait */}
      <section className="flex items-center justify-center mb-32">
        <div className="w-full sm:w-1/3 p-4 mx-auto text-center">
          <div className="relative group overflow-hidden rounded-2xl bg-transparent w-64 h-96 flex items-center justify-center mx-auto shadow-lg">
            {/* Image 1: Portrait par défaut - focus sur l'arrondi */}
            <div className="rounded-2xl overflow-hidden w-full h-full">
              <img
                src={ghibli}
                alt="ghibli"
                className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0 rounded-2xl"
              />
            </div>

            {/* Image 2: Portrait qui apparaît au survol */}
            <img
              src={portrait}
              alt="portrait"
              className="w-full h-full object-cover transition-opacity duration-300 absolute top-0 left-0 opacity-0 group-hover:opacity-100 rounded-2xl"
            />
          </div>
          <div className="mt-4">
            <p className="font-semibold text-xl">Joseph DELNORD</p>
            <p className="text-gray-500">Ville : La Garenne-Colombes (92)</p>
            <p className="text-gray-500">Hobbies : Photographie, Voyage</p>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-20">
        {/* Carte 1 - Qui suis-je ? */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 opacity-0 animate-opacityIn">
          <FaUserAlt className="text-4xl text-red-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Qui suis-je ?</h3>
          <p className="text-lg text-gray-700">
            Développeur web passionné, je crée des interfaces intuitives et
            performantes alliant design et technologie.
          </p>
        </div>

        {/* Carte 2 - Mon parcours professionnel */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 opacity-0 animate-opacityIn">
          <FaBriefcase className="text-4xl text-green-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Mon parcours professionnel
          </h3>
          <p className="text-lg text-gray-700">
            Actuellement développeur React/Node.js, je crée des applications
            performantes pour des clients comme StudioCall et Makara Media.
          </p>
        </div>

        {/* Carte 3 - Ma passion pour l'innovation */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 opacity-0 animate-opacityIn">
          <FaLightbulb className="text-4xl text-yellow-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">
            Ma passion pour l'innovation
          </h3>
          <p className="text-lg text-gray-700">
            Passionné par les nouvelles technologies, je suis toujours à la
            recherche de solutions innovantes.
          </p>
        </div>

        {/* Carte 4 - Mes projets personnels */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 opacity-0 animate-opacityIn">
          <FaPhotoVideo className="text-4xl text-purple-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Mes projets personnels</h3>
          <p className="text-lg text-gray-700">
            Je consacre mon temps libre à des projets qui explorent des concepts
            avant-gardistes en développement web et en photographie.
          </p>
        </div>

        {/* Carte 5 - Passions et loisirs */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 opacity-0 animate-opacityIn">
          <FaGlobeAmericas className="text-4xl text-teal-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Passions et loisirs</h3>
          <p className="text-lg text-gray-700">
            Passionné de voyages et de découverte de nouvelles cultures, je
            cherche toujours à enrichir ma vision du monde.
          </p>
        </div>

        {/* Carte 6 - Pourquoi me recruter ? */}
        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:bg-gray-50 opacity-0 animate-opacityIn">
          <FaBriefcase className="text-4xl text-orange-500 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Pourquoi me recruter ?</h3>
          <p className="text-lg text-gray-700">
            Si vous cherchez un développeur motivé, capable d'allier expertise
            technique et expérience utilisateur, je suis là pour vous.
          </p>
        </div>
      </div>

      <footer className="mt-20 text-center mx-20">
        <p className="text-xl text-gray-700 mb-4">
          N’hésitez pas à me contacter pour explorer les possibilités de
          collaboration !
        </p>
        <div className="flex justify-center gap-4 mt-20 mb-20">
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
    </section>
  );
};

export default About;
