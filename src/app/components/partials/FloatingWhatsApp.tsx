import Image from "next/image";


export default function FloatingWhatsApp() {
    return (
      <a
        href="https://wa.me/5511968660273?text=Preciso%20de%20ajuda%20com%20as%20redes%20sociais!"
        target="_blank"
        rel="noopener noreferrer"
        className="position-fixed bottom-0 end-0 m-3"
        style={{ zIndex: 1000 }}
      >
        <Image
          src="/images/novo-whats.gif"
          alt="WhatsApp"
          width={70} 
          height={70}
          className="img-fluid"
        />
      </a>
    );
  }
  