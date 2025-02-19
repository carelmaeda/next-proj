import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="section-wrapper">
        <h2 className="text-center mb-4">About Me</h2>
        <div className="about-wrapper d-md-flex">
           <Image src="/images/profile.jpeg" alt="profile"  width={200}  height={200}   />
        <p className="col-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non odio pulvinar, posuere tortor at, placerat sem. Quisque at elit ac 
        augue imperdiet pharetra sit amet nec dolor. Nulla sem erat, rhoncus id mi eu, viverra scelerisque erat.</p>
        </div>

    </section>
  );
}