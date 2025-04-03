import type React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaReact,
  FaNodeJs,
  FaFigma,
  FaLinux,
  FaDocker,
  FaCogs,
  FaDatabase,
  FaTasks,
} from "react-icons/fa";
import cv from "../assets/docs/cv_joseph_delnord.pdf";
import { saveAs } from "file-saver";

const Skills: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
  };

  const handleDownloadCV = () => {
    const fileUrl = cv;
    saveAs(fileUrl, "cv_joseph_delnord.pdf");
  };
  return (
    <section className="container mx-auto p-8 bg-gray-100 rounded-lg shadow-lg my-20">
      {/* Skills Container - Grille avec une nouvelle disposition et style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Conception et Web Design */}
        <div className="flip-card w-full h-[350px]">
          <div className="flip-card-inner w-full h-full">
            {/* Face Avant (Picto + Titre uniquement) */}
            <div className="flip-card-front w-full h-full flex items-center justify-center flex-col text-white bg-gradient-to-r from-pink-500 to-purple-600 p-6 rounded-lg">
              <FaFigma className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-center">
                Conception et Web Design
              </h3>
            </div>

            {/* Face Arrière (Liste alignée à gauche uniquement) */}
            <div className="flip-card-back w-full h-full p-6 bg-white rounded-lg">
              <ul className="list-disc pl-6 text-black">
                <li>Maquettage avec Figma</li>
                <li>Design UI/UX (Expérience utilisateur, Prototypage)</li>
                <li>Principes de design responsif</li>
                <li>Création d'interfaces dynamiques</li>
                <li>Accessibilité web (WCAG, ARIA)</li>
                <li>Création de wireframes et prototypes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Front-End */}
        <div className="flip-card w-full h-[350px]">
          <div className="flip-card-inner w-full h-full">
            {/* Face Avant (Picto + Titre uniquement) */}
            <div className="flip-card-front w-full h-full flex items-center justify-center flex-col text-white bg-gradient-to-r from-blue-500 to-purple-600 p-6 rounded-lg">
              <FaReact className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-center">Front-End</h3>
            </div>

            {/* Face Arrière (Liste alignée à gauche uniquement) */}
            <div className="flip-card-back w-full h-full p-6 bg-white rounded-lg">
              <ul className="list-disc pl-6 text-black">
                <li>HTML5 & CSS3 (Flexbox, Grid, animations)</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js, React Router, Redux</li>
                <li>TypeScript</li>
                <li>Axios</li>
                <li>Responsive Design (Mobile-first approach)</li>
                <li>
                  Frameworks CSS : TailwindCSS, Bootstrap, & Semantic UI React
                </li>
                <li>Gestion des formulaires (Formik, React Hook Form)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Back-End */}
        <div className="flip-card w-full h-[350px]">
          <div className="flip-card-inner w-full h-full">
            {/* Face Avant (Picto + Titre uniquement) */}
            <div className="flip-card-front w-full h-full flex items-center justify-center flex-col text-white bg-gradient-to-r from-orange-400 to-red-500 p-6 rounded-lg">
              <FaNodeJs className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-center">Back-End</h3>
            </div>

            {/* Face Arrière (Liste alignée à gauche uniquement) */}
            <div className="flip-card-back w-full h-full p-6 bg-white rounded-lg">
              <ul className="list-disc pl-6 text-black">
                <li>Node.js</li>
                <li>Express.js</li>
                <li>GraphQL</li>
                <li>API REST</li>
                <li>MongoDB</li>
                <li>PostgreSQL</li>
                <li>MySQL</li>
                <li>Authentication (JWT, OAuth2)</li>
                <li>ORM (Sequelize, Mongoose)</li>
                <li>Gestion des erreurs et validation des données</li>
                <li>Tests unitaires et d'intégration (Jest, Mocha)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Déploiement */}
        <div className="flip-card w-full h-[350px]">
          <div className="flip-card-inner w-full h-full">
            {/* Face Avant (Picto + Titre uniquement) */}
            <div className="flip-card-front w-full h-full flex items-center justify-center flex-col text-white bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg">
              {" "}
              <FaDocker className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-center">
                Déploiement
              </h3>
            </div>

            {/* Face Arrière (Liste alignée à gauche uniquement) */}
            <div className="flip-card-back w-full h-full p-6 bg-white rounded-lg">
              <ul className="list-disc pl-6 text-black">
                <li>Netlify, Vercel</li>
                <li>Heroku</li>
                <li>Docker, Docker Compose et Docker Swarm</li>
                <li>CI/CD pipelines</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="hidden lg:block" /> */}

        {/* Titre au centre */}
        <div className="p-6 flex items-center justify-center order-first md:order-none">
          <h2 className="text-4xl font-bold text-gray-800 text-center">
            Mes compétences
          </h2>
        </div>

        {/* Gestion de Projet */}
        <div className="flip-card w-full h-[350px]">
          <div className="flip-card-inner w-full h-full">
            {/* Face Avant (Picto + Titre uniquement) */}
            <div className="flip-card-front w-full h-full flex items-center justify-center flex-col text-white bg-gradient-to-r from-blue-400 to-green-500 p-6 rounded-lg">
              {" "}
              <FaTasks className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-center">
                Gestion de Projet
              </h3>
            </div>

            {/* Face Arrière (Liste alignée à gauche uniquement) */}
            <div className="flip-card-back w-full h-full p-6 bg-white rounded-lg">
              <ul className="list-disc pl-6 text-black">
                <li>Gestion des projets agiles (Scrum, Kanban)</li>
                <li>Planification et suivi des sprints</li>
                <li>Gestion des ressources humaines et matérielles</li>
                <li>Suivi des indicateurs de performance (KPI)</li>
                <li>Outils de gestion de projet : Jira, Trello, Asana</li>
                <li>Communication et coordination des équipes</li>
                <li>Estimation des délais et des coûts</li>
                <li>Rédaction et gestion des documents de projet</li>
                <li>Gestion des risques et des conflits</li>
                <li>Veille et amélioration continue des processus</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Environnement de Travail */}
        <div className="flip-card w-full h-[350px]">
          <div className="flip-card-inner w-full h-full">
            {/* Face Avant (Picto + Titre uniquement) */}
            <div className="flip-card-front w-full h-full flex items-center justify-center flex-col text-white bg-gradient-to-r from-red-500 to-yellow-600 p-6 rounded-lg">
              <FaLinux className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-center">
                Environnement de Travail
              </h3>
            </div>

            {/* Face Arrière (Liste alignée à gauche uniquement) */}
            <div className="flip-card-back w-full h-full p-6 bg-white rounded-lg">
              <ul className="list-disc pl-6 text-black">
                <li>Linux (Debian, Ubuntu), Windows, macOS</li>
                <li>VSCode, WebStorm</li>
                <li>Intégration continue / Livraison continue (CI/CD)</li>
                <li>Git, GitHub, GitLab, GitFlow</li>
                <li>Trello, Jira, Notion</li>
                <li>Slack, Discord, Zoom, Google Meet</li>
                <li>Markdown, Confluence</li>
                <li>Postman, Insomnia</li>
                <li>Chrome DevTools, React DevTools</li>
                <li>Lighthouse, WebPageTest</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Systèmes et Réseaux */}
        <div className="flip-card w-full h-[350px]">
          <div className="flip-card-inner w-full h-full">
            {/* Face Avant (Picto + Titre uniquement) */}
            <div className="flip-card-front w-full h-full flex items-center justify-center flex-col text-white bg-gradient-to-r from-purple-500 to-blue-600 p-6 rounded-lg">
              {" "}
              <FaCogs className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-center">
                Systèmes et Réseaux
              </h3>
            </div>

            {/* Face Arrière (Liste alignée à gauche uniquement) */}
            <div className="flip-card-back w-full h-full p-6 bg-white rounded-lg">
              <ul className="list-disc pl-6 text-black">
                <li>Gestion des serveurs (Linux, Apache, Nginx)</li>
                <li>Configuration des réseaux (DHCP, DNS, VPN)</li>
                <li>Sécurité des systèmes et réseaux (Firewall, SSH)</li>
                <li>Virtualisation avec VirtualBox, VMware, Hyper-V</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Autres Compétences */}
        <div className="flip-card w-full h-[350px]">
          <div className="flip-card-inner w-full h-full">
            {/* Face Avant (Picto + Titre uniquement) */}
            <div className="flip-card-front w-full h-full flex items-center justify-center flex-col text-white bg-gradient-to-r from-purple-500 to-pink-600 p-6 rounded-lg">
              <FaDatabase className="text-4xl mb-4" />
              <h3 className="text-2xl font-semibold text-center">
                Autres Compétences
              </h3>
            </div>

            {/* Face Arrière (Liste alignée à gauche uniquement) */}
            <div className="flip-card-back w-full h-full p-6 bg-white rounded-lg">
              <ul className="list-disc pl-6 text-black">
                <li>Anglais technique (Niveau B1)</li>
                <li>Gestion de projets agiles (Scrum, Kanban)</li>
                <li>Création et gestion de documentation technique</li>
                <li>Communication efficace en équipe</li>
                <li>Résolution de problèmes</li>
                <li>Esprit d'analyse et de synthèse</li>
                <li>Capacité d'adaptation et de changement</li>
                <li>Veille technologique et apprentissage continu</li>
              </ul>
            </div>
          </div>
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

export default Skills;
