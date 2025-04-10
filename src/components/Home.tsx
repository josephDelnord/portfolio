import type React from "react";
import hero from "../assets/img/hero.webp";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about");
  };

  return (
    <section
      className="flex items-center justify-center text-center text-white min-h-screen px-4 md:px-8"
      style={{
        backgroundImage: `url(${hero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Joseph DELNORD
        </h2>

        <p className="text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed">
          Développeur Web full-stack | React & NodeJS
        </p>

        <button
          type="button"
          onClick={handleClick}
          className="mt-4 px-6 py-3 text-base sm:text-lg bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-blue-900 hover:text-white transition duration-300"
        >
          En savoir plus
        </button>
      </div>
    </section>
  );
};

export default Home;
