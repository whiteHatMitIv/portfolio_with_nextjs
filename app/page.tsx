"use client";

import ParticlesComponent from "@/components/ui/Particle";
import Link from "next/link";
import FacebookIcon from "@mui/icons-material/FacebookRounded";
import GithubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/X";
import Typewriter, { Options } from "typewriter-effect"

interface CustomOptions extends Options {
  pauseFor?: number
}

export default function Home() {
  const options: CustomOptions = {
    strings: [
      "le développement mobile.",
      "le développement web.",
      "le développement logiciel.",
      "l'intelligence artificielle.",
    ],
    autoStart: true,
    loop: true,
    delay: 80,
    deleteSpeed: 45,
    pauseFor: 3000
  }

  return (
    <div className="flex justify-center items-center w-full md:h-screen relative p-4">
      <div className="absolute inset-0 z-[-1]">
        <ParticlesComponent id="particles" color="#FFF" />
      </div>
      <div className="text-center w-4/5 max-w-4xl">
        <h1>
          Salut, je suis <span className="spans text-primary">Ivan NTEUMI</span>
        </h1>
        <p className="mt-3 text-lg text-gray-300">
          Etudiant en génie logiciel à l&lsquo;IUT de Douala.
          Passionné par 
        </p>
        <span className="text-blue-400 text-2xl animate-pulse">
          <Typewriter options={options} />
        </span>
        <div className="flex justify-center mt-6 gap-8">
          <Link
            href="https://web.facebook.com/ivan.yimi.1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers Facebook"
            className="icon hover:border-primary hover:text-primary"
          >
            <FacebookIcon fontSize="large" />
          </Link>
          <Link
            href="https://github.com/whiteHatMitIv"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers GitHub"
            className="icon hover:border-[#5F4687] hover:text-[#5F4687]"
          >
            <GithubIcon fontSize="large" />
          </Link>
          <Link
            href="https://x.com/Ivan805030"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Lien vers Twitter"
            className="icon hover:border-white hover:text-white"
          >
            <TwitterIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
}
