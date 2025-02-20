import type { Metadata } from 'next';
import { Inter,EB_Garamond } from 'next/font/google';
import './globals.css';
import Script from 'next/script'; // Import the Script component
import Footer from './components/Footer';
import Hero from './components/Hero';


const inter = Inter({ subsets: ["latin"] });
const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Icaro Maeda',
  description: 'Icaro Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className} ${garamond.className}`}>
      <body>
      <Hero />
        <div className='container'>
        {children}
        </div>
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