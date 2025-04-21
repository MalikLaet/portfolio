import coffeDelivery from "../../public/imagem-coffe-delivery.svg";
import spaceAlura from "../../public/spaceAlura.svg";
import react from "../../public/react.svg";
import taiwindcss from "../../public/tailwind.svg";
import html from "../../public/html-icon.svg";
import css from "../../public/css-icon.svg";
import js from "../../public/js-icon.svg";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-12 gap-12">
      <h1 className="text-text-green text-4xl">Projetos</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="flex flex-col items-center justify-center gap-4 bg-slate-800 p-8 sm:p-12 rounded-3xl w-full max-w-md mx-auto">
          <p className="text-3xl text-white text-center">Coffe Delivery</p>
          <a
            href="https://coffe-delivery-y93a.vercel.app/"
            className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
          >
            <img
              className="h-64 sm:h-80 w-full object-cover rounded-xl"
              src={coffeDelivery}
              alt="imagem ilustrativa do site coffe delivery"
            />
          </a>
          <p className="leading-7 text-white text-sm sm:text-base text-justify">
            CoffeDelivery é um e-commerce completo usando React, TypeScript e Tailwind CSS. <br />
            💻 Ferramentas que usei:
          </p>
          <div className="flex flex-row gap-4 py-2">
            <img className="h-10 w-10" src={react} alt="React" />
            <img className="h-10 w-10" src={taiwindcss} alt="TailwindCSS" />
          </div>
          <p className="leading-7 text-white text-sm sm:text-base text-justify">
            TypeScript ajudou a manter o código seguro e organizado. <br />
            Tailwind CSS garantiu um design limpo e moderno.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-4 bg-slate-800 p-8 sm:p-12 rounded-3xl w-full max-w-md mx-auto">
          <p className="text-3xl text-white text-center">SpaceAlura</p>
          <a
            href="https://space-alura-flax.vercel.app/"
            className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
          >
            <img
              className="h-64 sm:h-80 w-full object-cover rounded-xl"
              src={spaceAlura}
              alt="imagem ilustrativa do site SpaceAlura"
            />
          </a>
          <p className="leading-7 text-white text-sm sm:text-base text-justify">
            SpaceAlura foi um projeto desafiador feito com base em um desafio da Alura. <br />
            💻 Ferramentas que usei:
          </p>
          <div className="flex flex-row flex-wrap justify-center gap-4 py-2">
            <img className="h-10 w-10" src={react} alt="React" />
            <img className="h-10 w-10" src={js} alt="JavaScript" />
            <img className="h-10 w-10" src={html} alt="HTML" />
            <img className="h-10 w-10" src={css} alt="CSS" />
          </div>
        </div>
      </div>
    </div>
  );
}
