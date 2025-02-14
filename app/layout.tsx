import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/ui/Sidebar";
import { inter, SpaceGrotesk } from "./fonts";
import { Toaster } from 'react-hot-toast'


export const metadata: Metadata = {
  title: "Ivan NTEUMI | Développeur Full-Stack • Data Science • Mobile",
  description: "Développeur passionné combinant web, data et mobile • Création d'applications full-stack (React/Node.js) • Analyse de données avec Python • Développement mobile cross-platform (Flutter) • Projets concrets et solutions innovantes",
  keywords: [
    "développeur web", 
    "data science python", 
    "développement mobile flutter",
    "full-stack",
    "machine learning",
    "react",
    "nextjs",
    "node.js",
    "dart",
    "applications cross-platform",
    "analyse de données"
  ],

  openGraph: {
    title: "Ivan NTEUMI | Expertise Web • Data • Mobile",
    description: "Portfolio d'un développeur full-stack spécialisé en web, data science et applications mobiles • Découvrez mes solutions techniques polyvalentes",
    url: "https://portfolio-with-nextjs-mu.vercel.app",
    siteName: "Portfolio Ivan NTEUMI",
    locale: 'fr_FR',
    type: 'website',
  },

  authors: [{ 
    name: "Ivan NTEUMI", 
    url: "https://portfolio-with-nextjs-mu.vercel.app" 
  }],
  creator: "Ivan NTEUMI",
  robots: "index, follow"
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${SpaceGrotesk.variable} ${inter.variable}`}>
      <body className="font-body flex flex-col md:flex-row w-screen h-screen overflow-hidden">
        <Sidebar />

        <main id="main-content" className="relative flex-1 max-md:justify-center h-screen overflow-y-auto">
          <div className="relative min-h-full max-md:flex">
            <div className="absolute inset-0 flex justify-evenly pointer-events-none z-[-1]">
              {[...Array(4)].map((_, i) => (
                <div 
                  key={i}
                  className="w-px h-full bg-border_color"
                />
              ))}
            </div>
            {children}
          </div>
        </main>

        <Toaster />
      </body>
    </html>
  );
}

