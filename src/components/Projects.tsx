import type React from "react";
import ProjectCard from "./ProjectCard";
import FooterPage from "./FooterPage";
import portfolio from "../assets/img/portfolio.webp";
import cinesaveurs from "../assets/img/cinesaveurs.webp";
import coffeeshop from "../assets/img/coffeeshop.webp";
import robbieLens from "../assets/img/robbielens.webp";
import todoList from "../assets/img/todolist.webp";
import calculator from "../assets/img/calculator.webp";

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
  {
    id: "cinesaveurs",
    name: "Ciné Saveurs",
    url: "https://github.com/josephDelnord/cinesaveurs",
    imageUrl: cinesaveurs,
    tags: [
      "React",
      "TypeScript",
      "SCSS",
      "Node.js",
      "MongoDB",
      "Express",
      "Memcached",
      "Redux",
    ],
    description: [
      "Création d'une application de gestion de recettes inspirés des films et des series.",
      "Utilisation de React et TypeScript pour une structure de code robuste.",
      "Intégration de SCSS pour un design moderne et réactif.",
      "Développement d'une API RESTful avec Node.js, Express et MongoDB.",
      "Gestion des états complexes avec Redux.",
      "Optimisation des performances avec Memcached.",
    ],
  },
  {
    id: "coffee-shop",
    name: "Coffee Shop",
    url: "https://github.com/josephDelnord/CoffeeShop",
    imageUrl: coffeeshop,
    tags: ["Node.js", "Express", "EJS", "JavaScript", "CSS", "PostgreSQL"],
    description: [
      "Création d'un site web pour un café en utilisant EJS comme moteur de templates.",
      "Utilisation de PostgreSQL pour stocker les données du site.",
      "Développement d'une API RESTful avec Node.js et Express.",
      "Gestion des sessions utilisateur avec Express-session.",
    ],
  },
  {
    id: "roobie-lens-website",
    name: "Robbie Lens",
    url: "https://github.com/josephDelnord/Robbie-Lens-Website-photographe",
    imageUrl: robbieLens,
    tags: ["HTML", "CSS", "Flexbox ", "Grid", "Media Queries"],
    description: [
      "Création d’un site web pour un photographe professionnel.",
      "Utilisation de HTML et CSS pour créer une interface utilisateur attrayante.",
      "Application de Flexbox et Grid pour la mise en page responsive.",
      "Mise en œuvre de Media Queries pour garantir l’adaptabilité au différents écrans.",
    ],
  },
  {
    id: "todolist",
    name: "Todo List",
    url: "https://github.com/josephDelnord/todolist",
    imageUrl: todoList,
    tags: [
      "React",
      "TailwindCSS",
      "TypeScript",
      "Node.js",
      "Express",
      "Axios",
      "Vite",
    ],
    description: [
      "Création d’une application de liste de choses à faire en utilisant React.",
      "Utilisation de TailwindCSS pour un design moderne et réactif.",
      "Intégration de TypeScript pour une meilleure typage du code.",
      "Utilisation de Node.js et Express pour le backend.",
      "Intégration d'Axios pour les requêtes HTTP.",
      "Utilisation de Vite pour une meilleure performance.",
    ],
  },
  {
    id: "calculator",
    name: "Calculatrice",
    url: "https://github.com/josephDelnord/calculator-app",
    imageUrl: calculator,
    tags: ["React", "TailwindCSS", "TypeScript", "Next.js"],
    description: [
      "Création d’une calculatrice simple en utilisant Next.js.",
      "Utilisation de TailwindCSS pour un design élégant et réactif.",
      "Intégration de TypeScript pour une meilleure typage du code.",
    ],
  },
];

const ProjectsList: React.FC = () => {
  return (
    <div className="min-h-screen pt-40 mt-32 mb-32">
      <section className="flex flex-col items-center justify-between min-h-screen">
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg mb-auto">
          <div className="relative mb-20 mt-10">
            <div className="relative px-6 py-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-md">
              <h2 className="text-4xl font-semibold text-white text-center">
                Mes projets
              </h2>
            </div>
          </div>

          {/* Wrapper responsive */}
          <div className="w-full overflow-x-hidden px-2 sm:px-0">
            <div className="flex flex-wrap justify-center">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
          <FooterPage />
        </div>
      </section>
    </div>
  );
};

export default ProjectsList;
