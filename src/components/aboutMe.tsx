import email from "../../public/icon-mail.svg"
import loc from "../../public/icon-map-pin.svg"
import portfolioImagem from "../../public/Profilephoto.svg"
import { TypeAnimation } from 'react-type-animation';

export default function AboutMe() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center pt-20 lg:pt-24 gap-12 lg:gap-24 px-4">
      
      <div
        className="flex flex-col items-center text-white px-6 py-12 sm:px-10 sm:py-16 gap-4 border-4"
        style={{
          borderColor: "#12F7D6 white white #12F7D6",
          borderStyle: "solid",
          borderTopLeftRadius: "100px",
          borderBottomRightRadius: "100px",
        }}
      >
        <img src={portfolioImagem} alt="foto de perfil" className="w-24 h-24" />
        <h2 className="text-2xl sm:text-3xl text-center">Malik</h2>
        <p className="text-sm sm:text-base">Desenvolvedor FullStack</p>

        <div className="flex flex-row items-center gap-2 pt-4">
          <img src={email} alt="email Malik" className="w-5 h-5" />
          <p className="text-sm">isklikma@gmail.com</p>
        </div>

        <div className="flex flex-row items-center gap-2 pt-2">
          <img src={loc} alt="localização" className="w-5 h-5" />
          <p className="text-sm">Brasil</p>
        </div>

        <a
          href="https://docs.google.com/document/d/15v4kH0SGHpbMgF0it3M7XkO7YX1kfnmGOfFTmEGL1RE/edit?tab=t.0"
          download="Curriculo-Malik.pdf"
          className="mt-4 px-6 py-2 bg-[#12F7D6] text-black font-semibold rounded-lg hover:bg-[#0fb5a1] transition duration-200 text-sm"
        >
          Baixar Currículo
        </a>
      </div>

      <div className="flex flex-col items-start text-white gap-6 max-w-xl px-4 sm:px-8">
        <div className="flex flex-col gap-2">
          <p className="text-3xl sm:text-4xl">Olá</p>

          <TypeAnimation
            sequence={['Me chamo Malik', 2200]}
            wrapper="p"
            cursor={false}
            className="text-2xl sm:text-3xl"
          />

          <TypeAnimation
            sequence={[2500, 'Desenvolvedor FullStack']}
            wrapper="p"
            cursor={false}
            className="text-2xl sm:text-3xl"
          />
        </div>

        <div
          className="flex items-center justify-center text-white py-4 px-6 sm:px-12"
          style={{
            borderColor: "#12F7D6",
            borderStyle: "solid",
            borderWidth: "4px",
            borderTopLeftRadius: "50px",
            borderBottomRightRadius: "50px",
          }}
        >
          <p className="text-2xl sm:text-3xl">Sobre Mim</p>
        </div>
        <p className="text-sm sm:text-base leading-relaxed text-justify max-w-full w-full px-4 sm:px-6 md:px-8">
  Sou um desenvolvedor de software apaixonado por tecnologia, inovação e resolução de problemas.
  Desde que comecei minha jornada na programação, sempre busquei criar soluções que fazem a diferença,
  combinando criatividade com boas práticas de desenvolvimento. Sou movido por desafios e pelo aprendizado contínuo,
  sempre buscando evoluir como profissional e contribuir para a comunidade tech.
</p>


      </div>
    </div>
  );
}
