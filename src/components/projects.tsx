import coffeDelivery from "../../public/imagem-coffe-delivery.svg";
import spaceAlura from "../../public/spaceAlura.svg";
import react from "../../public/react.svg";
import taiwindcss from "../../public/tailwind.svg";
import html from "../../public/html-icon.svg";
import css from "../../public/css-icon.svg";
import js from "../../public/js-icon.svg";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center p-12 gap-12">
      <h1 className="text-text-green text-4xl">Projetos</h1>

      <div className="flex flex-row gap-12 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4  p-12 rounded-3xl">
          <p className="text-4xl text-white">Coffe Delivery</p>
          <a
            href="https://coffe-delivery-y93a.vercel.app/"
            className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
          >
            <img
              className="h-80 w-96"
              src={coffeDelivery}
              alt="imagem ilustrativa do site coffe delivery"
            />
          </a>
          <p className="leading-8 text-white">
            CoffeDelivery desenvolvi um e-commerce completo usando React,
            TypeScript e Tailwind CSS. <br />
            💻 Ferramentas que usei: <br />
            <div className="flex flex-row gap-4  py-4">
              <img className="h-12 w-12" src={react} alt="" />
              <img className="h-12 w-12" src={taiwindcss} alt="" />
            </div>
            CoffeDelivery desenvolvi um e-commerce completo usando React,
            TypeScript e Tailwind CSS. <br />
            TypeScript, que me ajudou a manter o código mais seguro e
            organizado. <br />
            Tailwind CSS para garantir um design limpo e moderno.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 bg-slate-800 p-12 rounded-3xl">
          <p className="text-4xl text-white">SpaceAlura</p>
          <a
            href="https://space-alura-flax.vercel.app/"
            className="hover:opacity-80 hover:scale-105 transition duration-200 ease-in-out"
          >
            <img
              className="h-80 w-80"
              src={spaceAlura}
              alt="imagem ilustrativa do site SpaceAlura"
            />
          </a>
          <p className="leading-8 text-white">
            SpaceAlura foi um projeto que desenvolvi como um desafio da Alura{" "}
            <br />
            💻 Ferramentas que usei: <br />
            <div className="flex flex-row gap-4  py-4">
              <img className="h-12 w-12" src={react} alt="" />
              <img className="h-12 w-12" src={js} alt="" />
              <img className="h-12 w-12" src={html} alt="" />
              <img className="h-12 w-12" src={css} alt="" />
            </div>
         
          </p>
        </div>
      </div>
    </div>
  );
}
