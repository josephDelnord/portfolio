import type React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Careers from "./components/Careers";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import hero from "./assets/img/hero.webp";
import "@fortawesome/fontawesome-free/css/all.min.css";

const App: React.FC = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Image de fond - ajout de pointer-events-none pour permettre de cliquer à travers */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-fixed z-[-1] opacity-40 pointer-events-none sm:bg-contain"
        style={{ backgroundImage: `url(${hero})` }}
      />

      {/* Contenu de la page avec des fonds transparents */}
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
