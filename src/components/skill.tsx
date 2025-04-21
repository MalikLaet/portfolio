import html from "../../public/html-icon.svg"
import css from "../../public/css-icon.svg"
import js from "../../public/js-icon.svg"
import react from "../../public/react.svg"
import nextJs from "../../public/nextjs.svg"
import tailwind from "../../public/tailwind.svg"

export default function Skill() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 gap-12">
      <h1 className="text-text-green text-4xl">Skill</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 sm:gap-10 md:gap-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            className="w-16 h-16 hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
            src={html}
            alt="HTML"
          />
          <p className="text-white text-lg sm:text-xl">HTML</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <img
            className="w-16 h-16 hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
            src={css}
            alt="CSS"
          />
          <p className="text-white text-lg sm:text-xl">CSS</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <img
            className="w-16 h-16 hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
            src={js}
            alt="JavaScript"
          />
          <p className="text-white text-lg sm:text-xl">JavaScript</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <img
            className="w-16 h-16 hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
            src={react}
            alt="React"
          />
          <p className="text-white text-lg sm:text-xl">React</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <img
            className="w-16 h-16 hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
            src={nextJs}
            alt="nextJs"
          />
          <p className="text-white text-lg sm:text-xl">NextJs</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <img
            className="w-16 h-16 hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
            src={tailwind}
            alt="Tailwind"
          />
          <p className="text-white text-lg sm:text-xl">Tailwind</p>
        </div>
      </div>
    </div>
  )
}
