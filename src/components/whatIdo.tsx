import imagempc from '../../public/ImagePC.svg';

export default function WhatIdo() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white p-6 md:p-12 max-w-[90vw] mx-auto">
      <div className="flex flex-col items-start justify-center gap-6 text-justify">
        <p className="text-2xl font-semibold">O que eu faço ⚡</p>
        <p className="text-sm sm:text-base leading-relaxed">
          Atualmente, trabalho com desenvolvimento web, criando aplicações escaláveis e performáticas.
          Minha stack principal inclui React, TypeScript, Java e Spring Boot, e sempre busco utilizar
          as melhores práticas para garantir código limpo e eficiente. Meu foco é construir produtos
          intuitivos, com ótima experiência para o usuário e arquitetura bem estruturada.
          <br /><br />
          Além do desenvolvimento, também me interesso por boas práticas de código, otimização de
          performance e novas tecnologias que possam melhorar processos e produtos.
          Estou sempre aberto a novas oportunidades, desafios e colaborações!
        </p>
      </div>

      <img
        src={imagempc}
        alt="imagem de uma pessoa mexendo no computador programando"
        className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96"
      />
    </div>
  );
}
