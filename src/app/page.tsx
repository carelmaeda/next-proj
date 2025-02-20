import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section id="work" className="py-5">
        <Work />
      </section>
      <section id="about" className="py-5">
        <About />
      </section>
      <section id="contact" className="py-5">
        <Contact />
      </section>


      {/* Floating WhatsApp Button */}
      <FloatingWhatsApp />
    </main>
  );
}