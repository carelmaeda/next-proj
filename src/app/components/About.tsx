"use client";


import Image from "next/image";


const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function About() {
  return (
    <section id="about" className="section-wrapper">
        <h2 className="text-center mb-4">Sobre Mim</h2>
        <div className="about-wrapper d-md-flex">
           <Image src="/images/profile.jpeg" alt="profile"  width={200}  height={200}   />
        <div className="about-text">
        <p lang="pt">
            Sou <strong>Designer Gráfico</strong> e <strong>Social Media</strong>, especializado na criação de conteúdo, 
            planejamento estratégico e edição de materiais visuais para diferentes plataformas. Com experiência em diversos setores, 
            desenvolvo campanhas criativas que fortalecem a conexão entre marcas e público.
        </p>
        <p>
            Minha formação em <strong>Design</strong> pelo Istituto Europeo di Design, aliada a especializações em 
            <strong> Marketing Digital</strong> e <strong>UX Design</strong>, me permite unir criatividade e estratégia para entregar 
            soluções eficazes e alinhadas às necessidades de cada cliente. Estou sempre em busca de inovação para destacar negócios no 
            mercado e aprimorar sua comunicação.
        </p>
        <p>
            Vamos transformar sua ideia em algo impactante?
        </p>
        <button
                className={`btn btn-primary mt-3`}
                onClick={scrollToContact}
              >
                Fala Comigo
       </button>        
       </div>

        </div>

    </section>
  );
}