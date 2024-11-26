"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRightIcon, CheckCircleIcon } from "@/assets";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useBoundStore } from "@/store/store";
import { Showcase1, Showcase2, Showcase3 } from "@/assets";

export const Projects = () => {
  const language = useBoundStore((state) => state.language);


  const portfolioProjects = [
    {
      company: "Maxing Us",
      year: "2024",
      title: language === "en" ? "AI Personal Improvement Ios App - Side hustle" : "App Ios d'amélioration personnelle avec l'IA - Projet personnel",
      results: [
        { title: language === "en" ? "Designed and implemented a user-centric UX/UI interface" : "Conception et mise en œuvre d'une interface UX/UI centrée sur l'utilisateur" },
        { title: language === "en" ? "Developed the app with Expo(React Native) and Supabase for seamless performance" : "Développement de l'application avec Expo(React Native) et Supabase pour des performances fluides" },
        { title: language === "en" ? "Executed a marketing strategy to drive app visibility and user acquisition" : "Mise en œuvre d'une stratégie marketing pour améliorer la visibilité de l'application et l'acquisition d'utilisateurs" }
      ],
      link: "https://www.maxingus.com/",
      image: Showcase3,
    },
    {
      company: "Luxeol",
      year: "2022 - 2024",
      title: language === "en" ? "Front-end Developpeur" : "Développeur Front-end",
      results: [
        { title: language === "en" ? "Built a responsive mobile application using React Native, enhancing user experience" : "Création d'une application mobile responsive avec React Native, améliorant l'expérience utilisateur" },
        { title: language === "en" ? "Integrated advanced AI-based features and third-party APIs for facial analysis" : "Intégration de fonctionnalités avancées basées sur l'IA et d'API tierces pour l'analyse faciale" },
        { title: language === "en" ? "Refactored components to improve performance and reduce technical debt" : "Refactorisation de composants pour améliorer les performances et réduire la dette technique" }
      ],
      link: "https://luxeol.com/",
      image: Showcase2,
    },
    {
      company: "OpenClassrooms",
      year: "2020 - 2022",
      title: language === "fr" ?  "Formation certifiante" : "Eduction",
      results: [
      ],
      link: "https://openclassrooms.com/en/",
      image: Showcase1,
    },
  ];

  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={language === "en" ? "Real-World Results": "Résultats concrets"}
          title={language === "en" ? "Featured Projects" :  "Projets phare"}
          description={language === "en" ? "See how I transformed concepts into engaging digital experiences." : "Découvrez comment j’ai transformé des concepts en expériences numériques captivantes."}
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="sticky px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <CheckCircleIcon className="size-5 md:size-6" />
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={project.link}
                    className="btn btn-secondary text-gray-950 justify-center w-full mt-8 md:w-auto"
                    target="_blank"
                  >
                    <span className="font-semibold">Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </Link>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
