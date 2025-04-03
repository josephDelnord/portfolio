import type React from "react";
import hero from "../assets/img/hero.webp"; // Importation de l'image
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <section
      className="text-white flex justify-center items-center text-center"
      style={{
        backgroundImage: `url(${hero})`, // Appliquer l'image en fond
        backgroundSize: "cover", // S'assurer que l'image couvre toute la section
        backgroundPosition: "center", // Centrer l'image
        backgroundAttachment: "fixed", // Fixer l'image au fond pour un effet de parallaxe
        minHeight: "100vh", // Assurer que la section occupe toute la hauteur de la vue
      }}
    >
      <div className="text-center px-6">
        <h2 className="text-5xl font-extrabold mb-6">Joseph DELNORD</h2>
        <p className="text-2xl mb-4">
          Développeur Web full-stack | React & NodeJS
        </p>
        <button
          type="button"
          className="mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
          onClick={handleClick}
        >
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default Home;
