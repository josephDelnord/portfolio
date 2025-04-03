import type React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../assets/img/hero.webp"; // Importation de l'image
import portfolio from "../assets/img/portfolio.webp"; // Importation de l'image du portfolio
import cv from "../assets/docs/cv_joseph_delnord.pdf";
import { saveAs } from "file-saver";
import ProjectCard from "./ProjectCard"; // Assurez-vous que le chemin d'importation est correct

const projects = [
  {
    id: "portfolio",
    name: "Portfolio",
    url: "https://github.com/josephDelnord/portfolio",
    imageUrl: portfolio,
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "Vite",
      "Axios",
      "Farmer-motion",
      "emailJS",
    ],
    description: [
      "Création d'un portfolio personnel pour présenter mes projets et compétences.",
      "Utilisation de React et TypeScript pour une structure de code robuste.",
      "Intégration de TailwindCSS pour un design moderne et réactif.",
      "Utilisation d'Axios pour les requêtes HTTP.",
      "Animations fluides avec Framer Motion.",
      "Envoi d'emails via emailJS.",
    ],
  },
  // Dupliquer le même projet plusieurs fois
  {
    id: "cetolike-duplicate1",
    name: "Cetolike Duplicate 1",
    url: "https://www.cetolike.fr/",
    imageUrl: hero,
    tags: ["WordPress", "PHP", "JavaScript", "mySQL"],
    description: [
      "Contact avec le client et analyse de ses besoins.",
      "Édition du thème choisi par le client afin de correspondre à sa demande.",
      "Mise en place du projet et développement en autonomie.",
      "Utilisation de plugins dont Woocommerce pour la création d'une partie e-commerce.",
      "Création de pages complexes éditables par le client grâce à Avada (Theme Fusion).",
      "Gestion du SEO et de la base de données, et mise en ligne.",
    ],
  },
  {
    id: "cetolike-duplicate2",
    name: "Cetolike Duplicate 2",
    url: "https://www.cetolike.fr/",
    imageUrl: hero,
    tags: ["WordPress", "PHP", "JavaScript", "mySQL"],
    description: [
      "Contact avec le client et analyse de ses besoins.",
      "Édition du thème choisi par le client afin de correspondre à sa demande.",
      "Mise en place du projet et développement en autonomie.",
      "Utilisation de plugins dont Woocommerce pour la création d'une partie e-commerce.",
      "Création de pages complexes éditables par le client grâce à Avada (Theme Fusion).",
      "Gestion du SEO et de la base de données, et mise en ligne.",
    ],
  },
  // Ajoutez autant de duplications que nécessaire
];

const ProjectsList: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const handleDownloadCV = () => {
    const fileUrl = cv;
    saveAs(fileUrl, "cv_joseph_delnord.pdf");
  };
  return (
    <section className="flex flex-col items-center justify-between min-h-screen py-12">
      <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mb-auto">
        <div className="relative mb-20 mt-10">
          <div className="relative px-6 py-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-md">
            <h2 className="text-4xl font-semibold text-white text-center">
              Mes projets
            </h2>
          </div>
        </div>
        {/* Fond blanc pour la page entière */}
        <div className="flex flex-wrap justify-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
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
      </div>
    </section>
  );
};

export default ProjectsList;
