import { motion } from "framer-motion";

import html from "../../public/html-icon.svg";
import css from "../../public/css-icon.svg";
import js from "../../public/js-icon.svg";
import react from "../../public/react.svg";
import nextJs from "../../public/nextjs.svg";
import tailwind from "../../public/tailwind.svg";

const skills = [
  { name: "HTML", icon: html },
  { name: "CSS", icon: css },
  { name: "JavaScript", icon: js },
  { name: "React", icon: react },
  { name: "NextJs", icon: nextJs },
  { name: "Tailwind", icon: tailwind },
];

export default function Skill() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 gap-12">
      <h1 className="text-text-green text-4xl">Skill</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="flex flex-col items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: false }}
          >
            <img
              className="w-16 h-16 hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
              src={skill.icon}
              alt={skill.name}
            />
            <p className="text-white text-lg sm:text-xl">{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
