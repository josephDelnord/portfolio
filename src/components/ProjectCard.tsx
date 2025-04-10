import type React from "react";

interface Project {
  id: string;
  name: string;
  url: string;
  imageUrl: string; // URL de l'image
  tags: string[];
  description: string[];
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="relative w-full sm:w-[350px] md:w-[500px] lg:w-[700px] h-[400px] sm:h-[380px] m-4 overflow-hidden rounded-lg group cursor-pointer transform transition-all duration-300 hover:scale-105">
      <div
        className="absolute inset-0 bg-cover bg-top filter brightness-75 transition-all duration-300 group-hover:brightness-100"
        style={{ backgroundImage: `url(${project.imageUrl})` }}
      />

      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 bg-black bg-opacity-50 flex justify-center items-center z-10 group-hover:hidden">
        <h4 className="text-white text-lg sm:text-xl md:text-2xl font-semibold text-center">
          {project.name}
        </h4>
      </div>

      <div
        className="absolute inset-0 flex flex-col justify-center items-center p-2 sm:p-4 bg-white transform translate-y-full group-hover:translate-y-0 transition-all duration-300 z-0 shadow-md border-2 border-transparent group-hover:shadow-2xl"
        style={{
          borderImage: "linear-gradient(to right, red, yellow, green, blue) 1",
        }}
      >
        <div className="text-center">
          <h4 className="text-black text-lg sm:text-xl md:text-2xl font-semibold">
            {project.name}
          </h4>
        </div>

        <ul className="mt-2 sm:mt-4 flex flex-wrap gap-2 text-white text-xs sm:text-sm justify-center">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="bg-green-500 hover:bg-green-700 px-2 py-1 rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>

        <ul className="mt-2 sm:mt-4 text-black text-xs sm:text-sm text-left list-inside pl-4 max-h-[140px] overflow-auto">
          {project.description.map((desc) => (
            <li key={desc} className="mt-1 flex items-start">
              <span className="mr-2 text-green-500">•</span>
              <span className="break-words">{desc}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6"
      >
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base transition-colors duration-300 hover:bg-blue-900"
        >
          Voir le site
        </button>
      </a>
    </div>
  );
};

export default ProjectCard;
