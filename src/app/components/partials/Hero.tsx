"use client";


const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

export default function Hero() {
  return (
    <section className="hero-section row">
          <div className="">
            <h1 className="display-5">Oi! Eu sou o <span className='hero-text'>Icaro.</span> </h1>
            <p className="lead">
            Social Media blablabla
            </p>
            <button
                className={`btn btn-primary mt-3`}
                onClick={scrollToContact}
              >
                Fala Comigo
              </button>     
            </div>
    </section>
  );
}