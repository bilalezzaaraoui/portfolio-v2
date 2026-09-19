"use client";
import Image from "next/image";
import Button from "@/components/Button";
import HeroOrbit from "@/components/HeroOrbit";
import HeroRing from "@/components/HeroRing";
import {
  EmojiComputerImage,
  GrainImage,
  StarIcon,
  SprakleIcon,
  GithubTwo,
} from "@/assets";
import { useBoundStore } from "@/store/store";

// Updated PDF imports to use Next.js public directory
// These files will be available at the root URL during runtime
const CvFr = "/cv-fr.pdf";
const CvEn = "/cv-en.pdf";

export const Hero = () => {
  const language = useBoundStore((state) => state.language);

  return (
    <section className="relative py-32 md:py-48 lg:py-60 z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{
            backgroundImage: `url(${GrainImage.src})`,
          }}
        ></div>
        <HeroRing size={620} />
        <HeroRing size={820} />
        <HeroRing size={1020} />
        <HeroRing size={1220} />
        <HeroOrbit
          size={430}
          rotation={-14}
          shouldOrbit
          orbitDuration={30}
          shouldSpin
          spinDuration={3}
        >
          <SprakleIcon className="size-8 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration={32}
          shouldSpin
          spinDuration={3}
        >
          <SprakleIcon className="size-5 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={34}>
          <div className="size-2 text-cyan-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration={36}
          shouldSpin
          spinDuration={3}
        >
          <SprakleIcon className="size-10 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={0}
          shouldOrbit
          orbitDuration={38}
          shouldSpin
          spinDuration={6}
        >
          <StarIcon className="size-12 text-cyan-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration={40}
          shouldSpin
          spinDuration={6}
        >
          <StarIcon className="size-8 text-cyan-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={42}>
          <div className="size-2 text-cyan-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration={44}
          shouldSpin
          spinDuration={3}
        >
          <SprakleIcon className="size-14 text-cyan-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={46}>
          <div className="size-3 text-cyan-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration={48}
          shouldSpin
          spinDuration={6}
        >
          <StarIcon className="size-28 text-cyan-300" />
        </HeroOrbit>
      </div>

      <div className="relative container">
        <div className="flex flex-col items-center">
          <Image
            src={EmojiComputerImage}
            alt="Emoji Computer"
            className="size-[150px] rounded-full mb-[-1rem] border-4 border-white"
          />
          <div className="inline-flex items-center gap-4 px-4 py-1.5 bg-gray-950 border border-gray-800 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-long"></div>
            </div>
            <span className="text-sm font-medium">
              {language === "en" ? "Open to work" : "Ouvert aux opportunités"}
            </span>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-serif text-center mt-8">
            <span>Bilal Ezzaaraoui</span>
            <br />
            <span>
              {language === "en"
                ? "Front-End Engineer & React Native Developer"
                : "Développeur Front-End & React Native"}
            </span>
          </h1>

          <p className="md:text-lg text-center text-white/60 mt-4">
            {language === "en"
              ? "I build web and mobile products end-to-end — from pixel-perfect UI to Supabase back-ends and AI-powered features."
              : "Je construis des produits web et mobile de bout en bout d'une interface au pixel près aux back-ends Supabase et aux fonctionnalités boostées à l'IA."}
          </p>
          <p className="md:text-lg text-center text-white/60 mt-4">
            {language === "en"
              ? "React, React Native & Expo. A founder's mindset. I don't just ship what's asked — I build what moves the metric."
              : "React, React Native & Expo. Un état d'esprit de fondateur. Je ne livre pas seulement ce qu'on me demande, je construis ce qui fait bouger les chiffres."}
          </p>
          <p className="md:text-lg text-center text-white/60 mt-4">
            {language === "en"
              ? "Ready to build something together?"
              : "Prêt à construire quelque chose ensemble ?"}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <a href="https://github.com/bilalezzaaraoui" target="_blank">
            <Button variant="primary">
              <span className="font-semibold">
                {language === "en" ? "My GitHub Profile" : "Mon profil GitHub"}
              </span>
              <GithubTwo className="size-4" />
            </Button>
          </a>
          <a
            href={language === "en" ? CvEn : CvFr}
            download={
              language === "en"
                ? "Resume Bilal EZZAARAOUI.pdf"
                : "CV Bilal EZZAARAOUI.pdf"
            }
            className="btn btn-secondary"
          >
            <span>👋</span>
            <span className="font-semibold">
              {language === "en" ? "Download Resume" : "Télécharger mon CV"}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
