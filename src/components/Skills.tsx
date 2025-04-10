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

  // Séparons les cartes de compétences et le titre
  const titleCard = {
    title: "Mes compétences",
    icon: null,
    gradient: "",
    items: [],
    isTitle: true,
  };

  const skillsData = [
    {
      title: "Conception et Web Design",
      icon: <FaFigma className="text-5xl sm:text-3xl mb-4" />,
      gradient: "from-pink-500 to-purple-600",
      items: [
        "Maquettage avec Figma",
        "Design UI/UX (Expérience utilisateur, Prototypage)",
        "Principes de design responsif",
        "Création d'interfaces dynamiques",
        "Accessibilité web (WCAG, ARIA)",
        "Création de wireframes et prototypes",
      ],
    },
    {
      title: "Front-End",
      icon: <FaReact className="text-5xl sm:text-3xl mb-4" />,
      gradient: "from-blue-500 to-purple-600",
      items: [
        "HTML5 & CSS3 (Flexbox, Grid, animations)",
        "JavaScript (ES6+)",
        "React.js, React Router, Redux",
        "TypeScript",
        "Axios",
        "Responsive Design (Mobile-first approach)",
        "Frameworks CSS : TailwindCSS, Bootstrap, & Semantic UI React",
        "Gestion des formulaires (Formik, React Hook Form)",
      ],
    },
    {
      title: "Back-End",
      icon: <FaNodeJs className="text-5xl sm:text-3xl mb-4" />,
      gradient: "from-orange-400 to-red-500",
      items: [
        "Node.js",
        "Express.js",
        "GraphQL",
        "API REST",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Authentication (JWT, OAuth2)",
        "ORM (Sequelize, Mongoose)",
        "Gestion des erreurs et validation des données",
        "Tests unitaires et d'intégration (Jest, cypress)",
        "Gestion du cache (Redis, Memcached)",
      ],
    },
    {
      title: "Déploiement",
      icon: <FaDocker className="text-5xl sm:text-3xl mb-4" />,
      gradient: "from-green-400 to-blue-500",
      items: [
        "Netlify, Vercel",
        "Heroku",
        "Docker, Docker Compose et Docker Swarm",
        "CI/CD pipelines (GitHub Actions, Jenkins)",
      ],
    },
    {
      title: "Gestion de Projet",
      icon: <FaTasks className="text-5xl sm:text-3xl mb-4" />,
      gradient: "from-blue-400 to-green-500",
      items: [
        "Gestion des projets agiles (Scrum, Kanban)",
        "Outils de gestion de projet : Jira, Trello, Asana",
        "Communication et coordination des équipes",
        "Estimation des délais",
        "Rédaction et gestion des documents de projet",
      ],
    },
    {
      title: "Environnement de Travail",
      icon: <FaLinux className="text-5xl sm:text-3xl mb-4" />,
      gradient: "from-red-500 to-yellow-600",
      items: [
        "Linux (Debian, Ubuntu), Windows, macOS",
        "IDEs : VSCode",
        "Intégration continue / Livraison continue (CI/CD)",
        "Git, GitHub, GitLab, GitFlow",
        "Trello, Jira, Notion",
        "Slack, Discord, Zoom, Google Meet",
        "Markdown",
        "Postman, Insomnia",
        "Chrome DevTools, React DevTools",
        "Lighthouse",
      ],
    },
    {
      title: "Systèmes et Réseaux",
      icon: <FaCogs className="text-5xl sm:text-3xl mb-4" />,
      gradient: "from-purple-500 to-blue-600",
      items: [
        "Gestion des serveurs (Linux, Apache, Nginx)",
        "Configuration des réseaux (DHCP, DNS, VPN)",
        "Sécurité des systèmes et réseaux (SSH)",
        "Virtualisation avec VirtualBox, VMware, Hyper-V",
      ],
    },
    {
      title: "Autres Compétences",
      icon: <FaDatabase className="text-5xl sm:text-3xl mb-4" />,
      gradient: "from-purple-500 to-pink-600",
      items: [
        "Anglais technique (Niveau B1)",
        "Communication efficace en équipe",
        "Résolution de problèmes",
        "Esprit d'analyse et de synthèse",
        "Capacité d'adaptation et de changement",
        "Veille technologique et apprentissage continu",
      ],
    },
  ];

  // Calculer l'index pour positionner le titre au milieu en mode desktop
  const middleIndex = Math.floor(skillsData.length / 2);

  // Fonction pour rendre une carte de compétence
  interface SkillData {
    title: string;
    icon: React.ReactNode;
    gradient: string;
    items: string[];
  }

  const renderSkillCard = (skillData: SkillData): JSX.Element => (
    <div key={skillData.title} className="flip-card w-full h-[350px]">
      <div className="flip-card-inner w-full h-full">
        <div
          className={`flip-card-front w-full h-full flex items-center justify-center flex-col text-white bg-gradient-to-r ${skillData.gradient} p-6 sm:p-4 rounded-lg`}
        >
          {skillData.icon}
          <h3 className="text-3xl sm:text-xl font-semibold text-center">
            {skillData.title}
          </h3>
        </div>
        <div className="flip-card-back w-full h-full p-6 sm:p-4 bg-white rounded-lg flex items-center justify-center">
          <ul className="list-disc pl-6 sm:pl-4 text-black text-base sm:text-sm">
            {skillData.items.map((item: string) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  // Fonction pour rendre la carte de titre
  const renderTitleCard = () => (
    <div
      key={titleCard.title}
      className="w-full h-[350px] bg-white flex items-center justify-center rounded-lg p-6 sm:p-4"
    >
      <h2 className="text-5xl sm:text-3xl font-bold text-gray-800 text-center">
        {titleCard.title}
      </h2>
    </div>
  );

  return (
    <div className="min-h-screen pt-40 mt-32 mb-32">
      {/* Cette div couvre toute la hauteur de l'écran et commence après le header */}
      <section className="container mx-auto p-8 sm:p-4 bg-white rounded-lg shadow-xl">
        {/* Version mobile: Titre en haut */}
        <div className="md:hidden mb-8">{renderTitleCard()}</div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Premier groupe de cartes (avant la carte titre) */}
          {skillsData.slice(0, middleIndex).map(renderSkillCard)}

          {/* Carte titre pour desktop seulement (au milieu) */}
          <div className="hidden md:block">{renderTitleCard()}</div>

          {/* Deuxième groupe de cartes (après la carte titre) */}
          {skillsData.slice(middleIndex).map(renderSkillCard)}
        </div>

        {/* Footer */}
        <footer className="mt-20 text-center mx-20">
          <p className="text-xl text-gray-700 mb-4">
            N'hésitez pas à me contacter pour explorer les possibilités de
            collaboration !
          </p>
          <div className="flex justify-center gap-4 mt-20 mb-20">
            <button
              type="button"
              className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-900 hover:text-white border-2 border-blue-500 hover:border-blue-900 transition duration-300"
              onClick={handleClick}
            >
              Me contacter
            </button>
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
    </div>
  );
};

export default Skills;
