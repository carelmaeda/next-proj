import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/partials/Hero';
import FloatingWhatsApp from "./components/partials/FloatingWhatsApp";
import Work from './components/partials/Work';

export default function Home() {
  return (
    <main>
      <div className="container-fluid">
        <Hero />
      </div>
      <div className="container">
      <section id="work" className="py-4">
        <Work />
      </section>
      <section id="about" className="py-4">
        <About />
      </section>
      <section id="contact" className="py-4">
        <Contact />
      </section>
      </div>

      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}