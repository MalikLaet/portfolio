import email from "../../public/icon-mail.svg"
import loc from "../../public/icon-map-pin.svg"
export default function AboutMe() {
  return (
    <div className="flex flex-row items-center justify-center pt-24 gap-24 ">
<div
  className="flex flex-col items-center text-white p-12 py-28 gap-2 border-2"
  style={{
    position: "relative",
    borderColor: "#12F7D6 white white #12F7D6",
    borderStyle: "solid",
    borderWidth: "4px", 
    borderTopLeftRadius: "100px",
    borderBottomRightRadius: "100px",
  }}
>
    <img src="/public/Profilephoto.svg" alt="" className="w-24 h-24 items-center" />
        <h2 className="text-3xl text-center">Malik</h2>
        <p>Desenvolvedor FullStack</p>
        <div className="flex flex-row gap-2 pt-6">
          <img src={email} alt="email Malik" />
          <p>isklikma@gmail.com</p>
        </div>
        <div className="flex flex-row gap-2 pt-2">
          <img src={loc} alt="localização" />
          <p>Brasil</p>
        </div>
        <a
    href="https://docs.google.com/document/d/15v4kH0SGHpbMgF0it3M7XkO7YX1kfnmGOfFTmEGL1RE/edit?tab=t.0" // Caminho do arquivo PDF
    download="Curriculo-Malik.pdf" // Nome do arquivo ao baixar
    className="mt-4 px-6 py-2 bg-[#12F7D6] text-black font-semibold rounded-lg hover:bg-[#0fb5a1] transition duration-200"
  >
    Baixar Currículo
  </a>
      </div>


      <div className="flex flex-col items-start justify-center text-white p-12 pb-48 gap-4">
      <div className="flex flex-col items-start  text-white p-4 pt-12 gap-2">
        <p className="text-4xl">Olá</p>
        <p className="text-4xl">Me chamo Malik</p>
        <p className="text-4xl">Desenvolvedor FullStack</p>
      </div>
      <div
        className="flex items-center justify-center text-white py-6 px-12"
        style={{
          borderColor: "#12F7D6",
          borderStyle: "solid",
          borderWidth: "4px",
          borderTopLeftRadius: "50px",
          borderBottomRightRadius: "50px",
        }}
      >
        <p className="text-3xl">Sobre Mim</p>
      </div>
            <p className="text-base/8">  Sou um desenvolvedor de software apaixonado por tecnologia, inovação e <br />
               resolução de problemas. D  esde que comecei minha jornada na programação, <br />
               sempre busquei criar soluções que fazem a diferença, combinando criatividade <br /> com boas práticas de desenvolvimento. 
               Sou movido por desafios e pelo aprendizado contínuo, <br />
                sempre buscando evoluir como profissional e contribuir para a comunidade tech.</p>
      </div>
    </div>
  );
}
