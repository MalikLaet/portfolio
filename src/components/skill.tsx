import html from "../../public/html-icon.svg"
import css from "../../public/css-icon.svg"
import js from "../../public/js-icon.svg"
import react from "../../public/react.svg"
import tailwind from "../../public/tailwind.svg"
export default function Skill() {
  return (
    <div className="flex flex-col items-center justify-center  p-12 gap-12"> 
        <h1 className="text-text-green text-4xl">Skill</h1>

        <div className="flex flex-row gap-12 items-center justify-center">

        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src={html}alt="imagem HTML" />
            <p className="text-white text-xl">HTML</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src={css} alt="imagem CSS" />
            <p className="text-white text-xl">CSS</p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src={js} alt="imagem JavaScript" />
            <p className="text-white text-xl">JavaScript</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src={react} alt="imagem React" />
            <p className="text-white text-xl">React</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
            <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src={tailwind} alt="imagem Tailwind" />
            <p className="text-white text-xl">Tailwind</p>
        </div>
            {/* <img className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out" src="/public/typescript.svg" alt="" />    
            <p>TypeScript</p> */}
        </div>
    </div>
  )
}
