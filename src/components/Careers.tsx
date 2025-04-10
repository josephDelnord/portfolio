import type React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import cv from "../assets/docs/cv_joseph_delnord.pdf";
import { saveAs } from "file-saver";

// Définition des types pour les éléments de la timeline
interface TimelineItem {
  date: string;
  title: string;
  description: string;
  type: "diploma" | "experience" | "certification"; // Type de l'événement : diplôme ou expérience
  etablissement: string; // Établissement associé à l'événement
}

// Définition des couleurs pour chaque type
const typeColors = {
  diploma: "bg-sky-600", // Couleur pour les diplômes
  experience: "bg-pink-600", // Couleur pour les expériences
  certification: "bg-green-600", // Couleur pour les certifications
  diplomaText: "text-sky-600", // Couleur du texte pour les diplômes
  experienceText: "text-pink-600", // Couleur du texte pour les expériences
  certificationText: "text-green-600", // Couleur du texte pour les certifications
};

const timelineData: TimelineItem[] = [
  {
    date: "2024 - Présent",
    title: "Développeur Full-Stack (stage)",
    etablissement: "StudioCall & Makara Media",
    description:
      "Actuellement développeur full-stack en stage chez StudioCall & Makara Media, spécialisé en React.js et Node.js.",
    type: "experience",
  },
  {
    date: "2024 - 2025",
    title:
      "Titre professionnel Niveau 6 - Concepteur Développeur d'Applications",
    etablissement: "O'Clock",
    description:
      "Formation intensive en conception, développement web & déploiement, avec un accent sur les technologies modernes telles que JavaScript, React.js, Node.js, MongoDB, postgreSQL et Docker.",
    type: "diploma",
  },
  {
    date: "2024-2027",
    title: "Opquast certification",
    etablissement: "Opquast",
    description:
      "Intégrer les règles et le vocabulaire assurance qualité web dans sa pratique professionnelle.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "2023 - 2024",
    title: "Technicien support systèmes & réseaux (stage)",
    etablissement: "HNCS",
    description:
      "Stage en tant que technicien support systèmes et réseaux, impliquant la gestion de l'infrastructure réseau et le support technique.",
    type: "experience",
  },
  {
    date: "Juin 2024",
    title: "CCNA: Enterprise Networking, Security, and Automation",
    etablissement: "Cisco",
    description:
      "Certification CCNA, couvrant les concepts fondamentaux des réseaux, la sécurité et l'automatisation.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "Mai 2024",
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    etablissement: "Cisco",
    description:
      "Certification CCNA, couvrant les concepts fondamentaux des réseaux, la sécurité et l'automatisation.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "Février 2024",
    title: "CCNA: Introduction to Networks",
    etablissement: "Cisco",
    description:
      "Certification CCNA, couvrant les concepts fondamentaux des réseaux, la sécurité et l'automatisation.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "Janvier 2024",
    title: "Concevez votre site web avec PHP et MySQL",
    etablissement: "OpenClassrooms",
    description:
      "Formation sur la conception de sites web dynamiques avec PHP et MySQL, incluant la gestion des bases de données et le développement back-end.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "Janvier 2024",
    title: "Créez votre site web avec HTML5 et CSS3",
    etablissement: "OpenClassrooms",
    description:
      "Formation sur la création de sites web statiques avec HTML5 et CSS3, incluant les meilleures pratiques de développement front-end.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "2023-2024",
    title: "The Complete DevOps Bootcamp",
    etablissement: "KodeKloud",
    description:
      "Formation complète sur les pratiques DevOps, y compris l'intégration continue, le déploiement continu et la gestion des infrastructures.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "2022 - 2023",
    title:
      "Titre professionnel Niveau 5 - Technicien informatique systèmes & réseaux",
    etablissement: "GEFI",
    description:
      "Formation intensive en systèmes et réseaux, mettant l'accent sur la gestion des infrastructures informatiques, la sécurité et le support technique.",
    type: "diploma",
  },
  {
    date: "Mars 2022",
    title: "Réalisez un cahier des charges fonctionnel",
    etablissement: "OpenClassrooms",
    description:
      "Formation sur la création de cahiers des charges fonctionnels, incluant la collecte des besoins et la rédaction de spécifications techniques.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "Février 2022",
    title: "Appropriez-vous la démarche UX en pratique",
    etablissement: "OpenClassrooms",
    description:
      "Formation sur la démarche UX, incluant la recherche utilisateur, la conception d'interfaces et l'évaluation de l'expérience utilisateur.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "Février 2022",
    title: "Créez des visuels avec Illustrator",
    etablissement: "OpenClassrooms",
    description:
      "Formation sur la création de visuels avec Adobe Illustrator, incluant la conception graphique et l'illustration numérique.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "Janvier 2022",
    title: "Gérez un projet digital avec une méthodologie en cascade",
    etablissement: "OpenClassrooms",
    description:
      "Formation sur la gestion de projets digitaux avec une méthodologie en cascade, incluant la planification, l'exécution et le suivi des projets.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "Janvier 2022",
    title: "UX design : découvrez les fondamentaux !",
    etablissement: "OpenClassrooms",
    description:
      "Formation sur les fondamentaux de l'UX design, incluant la recherche utilisateur, la conception d'interfaces et l'évaluation de l'expérience utilisateur.",
    type: "certification", // Nouvelle catégorie Certification
  },
  {
    date: "2019 - 2023",
    title: "Ingénieur en formation digitale",
    etablissement: "IDC Formation",
    description:
      "Experience en ingénierie digitale, axée sur le développement de solutions numériques et la gestion de projets informatiques.",
    type: "experience",
  },
  {
    date: "2016 - 2019",
    title: "Formateur FLE et CBP",
    etablissement: "IDC Formation",
    description:
      "Experience en tant que formateur de français langue étrangère et compétences de base professionnelles, avec une approche pédagogique innovante.",
    type: "experience",
  },
  {
    date: "2013 - 2019",
    title:
      "Doctorat en Sciences du langage - Linguistique et didactique des langues",
    etablissement: "INALCO",
    description:
      "Recherche doctorale en linguistique et didactique des langues, avec une spécialisation en didactique des langues et des cultures.",
    type: "diploma",
  },
  {
    date: "2014 - 2016",
    title: "Caissier",
    etablissement: "Monoprix",
    description:
      "Experience en tant que caissier, impliquant la gestion des transactions et le service à la clientèle.",
    type: "experience",
  },
  {
    date: "2011 - 2013",
    title:
      "Master 2 - Sciences du langage - Analyse de discours, sociolinguistique et didactique des langues",
    etablissement: "Montpellier 3",
    description:
      "Formation avancée en linguistique et didactique des langues, avec un accent sur la recherche et l'enseignement.",
    type: "diploma",
  },
  {
    date: "2010 - 2011",
    title:
      "Master 1 - Sciences du langage - sociolinguistique et didactique du FLE",
    etablissement: "Montpellier 3",
    description:
      "Formation avancée en linguistique et didactique des langues, avec un accent sur la recherche et l'enseignement.",
    type: "diploma",
  },
];

const Careers: React.FC = () => {
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
      <div className="relative mb-20 mt-10">
        <div className="relative px-6 py-4 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg shadow-md">
          <h2 className="text-4xl font-semibold text-white text-center">
            Mon parcours professionnel
          </h2>
        </div>
      </div>

      <div className="relative">
        {/* Ligne verticale uniquement en mode bureau */}
        <div
          className={`border-l-2 ${typeColors.diploma} h-full absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:translate-x-0 sm:block hidden`}
        />
        {timelineData.map((item, index) => (
          <motion.div
            key={`${item.title}-${item.date}`}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? -200 : 200, // Animation de gauche/droite
            }}
            animate={{ opacity: 1, x: 0 }} // Finition de l'animation
            transition={{
              duration: 1,
              delay: index * 0.3, // Délai pour l'animation de chaque élément
              type: "spring",
              stiffness: 80,
            }}
            className={`relative flex flex-col sm:flex-row ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            } items-center sm:items-start mb-12`} // Ajout de justify-start/end en mode sm
          >
            {/* Cercle contenant le picto - icône */}
            <div
              className={`relative w-12 h-12 rounded-full border-4 border-white ${
                typeColors[item.type]
              } flex items-center justify-center mb-4 sm:mb-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2`} // Positionner sur la ligne verticale
            >
              {item.type === "diploma" ? (
                <i className="fas fa-graduation-cap text-white text-2xl" />
              ) : item.type === "experience" ? (
                <i className="fas fa-briefcase text-white text-2xl" />
              ) : (
                <i className="fas fa-award text-white text-2xl" /> // Pictogramme pour la certification
              )}
            </div>

            {/* Contenu de l'événement */}
            <div
              className={`w-full max-w-[400px] text-gray-800 ${
                index % 2 === 0 ? "sm:ml-12" : "sm:mr-12"
              } sm:text-center`} // Centrer le texte en mode mobile
            >
              <div className="flex items-center mb-2 justify-center sm:justify-center">
                <h3
                  className={`text-xl font-semibold ${
                    typeColors[`${item.type}Text` as keyof typeof typeColors]
                  } text-center`} // Centrer le titre sur tous les écrans
                >
                  {item.title}
                </h3>
              </div>
              <div className="flex mb-2 justify-center sm:justify-center">
                <p className="text-sm text-gray-600 mr-4">{item.date},</p>
                <p className="text-sm text-gray-600">{item.etablissement}</p>
              </div>
              <p className="text-lg mt-2 text-center sm:text-center">
                {item.description}
              </p>
            </div>
          </motion.div>
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
    </section>
  );
};

export default Careers;
