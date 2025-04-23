import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import coffeDelivery from "../../public/imagem-coffe-delivery.svg";
import spaceAlura from "../../public/spaceAlura.svg";
import react from "../../public/react.svg";
import tailwind from "../../public/tailwind.svg";
import html from "../../public/html-icon.svg";
import css from "../../public/css-icon.svg";
import js from "../../public/js-icon.svg";


// No topo do componente ou arquivo
type ProjectData = {
  title: string;
  image: string;
  link: string;
  description: string;
  tools: string[];
  extra: string;
};

const projects = [
  {
    title: "Coffe Delivery",
    image: coffeDelivery,
    link: "https://coffe-delivery-y93a.vercel.app/",
    description:
      "CoffeDelivery é um e-commerce completo usando React, TypeScript e Tailwind CSS.",
    tools: [react, tailwind],
    extra:
      "TypeScript ajudou a manter o código seguro e organizado. Tailwind CSS garantiu um design limpo e moderno."
  },
  {
    title: "SpaceAlura",
    image: spaceAlura,
    link: "https://space-alura-flax.vercel.app/",
    description:
      "SpaceAlura foi um projeto desafiador feito com base em um desafio da Alura.",
    tools: [react, js, html, css],
    extra: "Utilizei boas práticas de código e responsividade para entregar uma ótima experiência."
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 gap-12">
      <h1 className="text-text-green text-4xl">Projetos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: false }}
            className="flex flex-col items-center justify-center gap-4 bg-slate-800 p-8 sm:p-12 rounded-3xl w-full max-w-md mx-auto cursor-pointer hover:shadow-lg hover:scale-105 transition-transform duration-300"
            onClick={() => setSelectedProject(project)}
          >
            <p className="text-3xl text-white text-center">{project.title}</p>
            <img
              className="h-64 sm:h-80 w-full object-cover rounded-xl"
              src={project.image}
              alt={`Imagem do projeto ${project.title}`}
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-slate-800 p-8 rounded-2xl max-w-lg w-full text-white"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-2xl font-bold mb-4 text-center">
                {selectedProject.title}
              </h2>
              <p className="mb-4 text-sm sm:text-base">
                {selectedProject.description}
              </p>
              <p className="text-sm sm:text-base mb-2">💻 Ferramentas que usei:</p>
              <div className="flex gap-4 mb-4">
                {selectedProject.tools.map((tool, i) => (
                  <img key={i} className="h-10 w-10" src={tool} alt="Ferramenta" />
                ))}
              </div>
              <p className="mb-4 text-sm sm:text-base">
                {selectedProject.extra}
              </p>
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-text-green text-black font-semibold py-2 rounded hover:bg-green-400 transition mb-2"
              >
                Ver Projeto Online
              </a>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full border border-zinc-700 py-2 rounded hover:bg-red-700 hover:text-black transition"
              >
                Fechar
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
