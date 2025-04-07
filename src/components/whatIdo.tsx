import imagempc from '../../public/ImagePC.svg';

export default function WhatIdo() {
  return (
    <div className="flex flex-row items-center justify-center gap-2 text-white p-4">
        <div className="flex flex-col items-start justify-center text-white p-12 gap-12">
        <p className="text-2xl ">O que eu faço ⚡ </p>
        <p className=" text-xl/9 pb-12">Atualmente, trabalho com desenvolvimento web, criando aplicações escalávei <br />
            s e performáticas. Minha stack principal inclui React, TypeScript, Java e Spring Boot, e sempre <br />
             busco utilizar as melhores práticas para garantir código limpo e eficiente. Meu foco é construir  <br />
             produtos intuitivos, com ótima experiência para o usuário e arquitetura bem estruturada. <br />
        Além do desenvolvimento, também me interesso por boas práticas de código, otimização de performance <br />
        e novas tecnologias que possam melhorar processos e produtos. <br /> Estou sempre aberto a novas oportunidades, desafios e colaborações!</p>
        </div>
        <img src={imagempc} alt="imagem de uma pessoa mexendo no computador programando" className="w-96 h-96"/>
    </div>
  ) 
}
