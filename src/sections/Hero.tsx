"use client";
import Image from "next/image";
import Button from "@/components/Button";
import HeroOrbit from "@/components/HeroOrbit";
import HeroRing from "@/components/HeroRing";
import {
  EmojiComputerImage,
  ArrowDownIcon,
  GrainImage,
  StarIcon,
  SprakleIcon,
} from "@/assets";
import { useBoundStore } from "@/store/store";

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
          <SprakleIcon className="size-8 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={440}
          rotation={79}
          shouldOrbit
          orbitDuration={32}
          shouldSpin
          spinDuration={3}
        >
          <SprakleIcon className="size-5 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration={34}>
          <div className="size-2 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={530}
          rotation={178}
          shouldOrbit
          orbitDuration={36}
          shouldSpin
          spinDuration={3}
        >
          <SprakleIcon className="size-10 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit
          size={550}
          rotation={0}
          shouldOrbit
          orbitDuration={38}
          shouldSpin
          spinDuration={6}
        >
          <StarIcon className="size-12 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit
          size={590}
          rotation={98}
          shouldOrbit
          orbitDuration={40}
          shouldSpin
          spinDuration={6}
        >
          <StarIcon className="size-8 text-emerald-300" />
        </HeroOrbit>
        <HeroOrbit size={650} rotation={-5} shouldOrbit orbitDuration={42}>
          <div className="size-2 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={710}
          rotation={144}
          shouldOrbit
          orbitDuration={44}
          shouldSpin
          spinDuration={3}
        >
          <SprakleIcon className="size-14 text-emerald-300/20" />
        </HeroOrbit>
        <HeroOrbit size={720} rotation={85} shouldOrbit orbitDuration={46}>
          <div className="size-3 text-emerald-300/20 rounded-full" />
        </HeroOrbit>
        <HeroOrbit
          size={800}
          rotation={-72}
          shouldOrbit
          orbitDuration={48}
          shouldSpin
          spinDuration={6}
        >
          <StarIcon className="size-28 text-emerald-300" />
        </HeroOrbit>
      </div>

      <div className="relative container">
        <div className="flex flex-col items-center">
          <Image
            src={EmojiComputerImage}
            alt="Emoji Computer"
            className="size-[100px]"
          />
          <div className="inline-flex items-center gap-4 px-4 py-1.5 bg-gray-950 border border-gray-800 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping-long"></div>
            </div>
            <span className="text-sm font-medium">
              {language === "en" ? "Seeking employment" : "À la recherche d'un emploi"}
            </span>
          </div>
        </div>
        <div className="max-w-xl mx-auto">
        <h1 className="text-3xl md:text-5xl font-serif text-center mt-8">
          <span>Bilal EZZAARAOUI,</span><br />
          <span>{language === "en" ? "Full Stack Developer" : "Développeur Full-Stack"}</span>
        </h1>

          <p className="md:text-lg text-center text-white/60 mt-4">
            {language === "en" ? `Passionate about coding and creating high-performance, aesthetically pleasing web and mobile applications.` : "Passionné par le code et la création d'applications web et mobile performantes et esthétiques."}
          </p>
          <p className="md:text-lg text-center text-white/60 mt-4">
            {language === "en" ? `Expert in React, React Native, Node.js, and the latest web technologies, I turn ideas into digital realities.` : "Expert en React, React Native, Node.js et les dernières techs web, je transforme les idées en réalités numériques."}
          </p>
          <p className="md:text-lg text-center text-white/60 mt-4">
            {language === "en" ? `Ready to innovate together?` : "Prêt à innover ensemble ?"}
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8">
          <a href="#projects">
            <Button variant="primary">
              <span className="font-semibold">{language === "en" ? "Explore My Work" : "Mes réalisations"}</span>
              <ArrowDownIcon className="size-4" />
            </Button>
          </a>
          <a href={language === "en" ? "/Resume%20Bilal%20EZZAARAOUI.pdf" : "cv-fr.pdf"} download={language === "en" ? "Resume Bilal EZZAARAOUI.pdf" : "CV Bilal EZZAARAOUI.pdf"}>
            <Button variant="secondary">
              <span>👋</span>
              <span className="font-semibold">{language === "en" ? "Download Resume" : "Télécharger mon CV"}</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
