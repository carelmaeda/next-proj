import { Inter,EB_Garamond } from 'next/font/google';
import './globals.css';
import Script from 'next/script'; // Import the Script component
import Footer from './components/partials/Footer';
import Navbar from './components/partials/Navbar';


const inter = Inter({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata = {
  title: "Icaro Maeda | Gestão de Redes Sociais",
  description: "Aumente sua presença digital com estratégias personalizadas de social media e marketing digital.",
  keywords: "gestão de redes sociais, marketing digital, social media, tráfego pago",
  openGraph: {
    title: "Icaro Maeda | Gestão de Redes Sociais",
    description: "Aumente sua presença digital com estratégias personalizadas de social media.",
    url: "https://icaromaeda.netlify.app/",
    siteName: "Icaro Maeda",
    images: [
      {
        url: "https://icaromaeda.netlify.app/seo-image.webp",
        width: 1200,
        height: 630,
        alt: "Imagem de destaque",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gestão de Redes Sociais | Seu Nome",
    description: "Aumente sua presença digital com estratégias personalizadas de social media.",
    images: ["https://seudominio.com/seo-image.webp"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt" className={`${inter.className} ${garamond.className}`}>
      <body>
        <Navbar />
        {children}
        <Footer />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-geWF76RCwLtnZ8qwWowPQNguL3RmwHVBC9FhGdlKrxdiJJigb/j/68SIy3Te4Bkz"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}