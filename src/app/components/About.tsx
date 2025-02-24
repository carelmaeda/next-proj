import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-wrapper">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="about-wrapper d-md-flex">
           <Image src="/images/profile.jpeg" alt="profile"  width={200}  height={200}   />
        <p className="col-6">
        Sou Designer Gráfico e Social Media, com experiência em criação de conteúdo, planejamento de mídias sociais e edição de materiais visuais para diferentes plataformas.<br/> Ao longo da minha carreira, colaborei com empresas de diversos setores, desenvolvendo campanhas criativas que conectam marcas ao público.
        Minha formação em Design de Moda pelo Istituto Europeo di Design e cursos complementares em Marketing Digital e UX Design me permitem unir criatividade e estratégia para entregar resultados alinhados às necessidades dos clientes.
        Estou sempre em busca de soluções inovadoras para destacar negócios no mercado e fortalecer a comunicação com seus públicos. Será um prazer contribuir com seu projeto!</p>
        </div>

    </section>
  );
}