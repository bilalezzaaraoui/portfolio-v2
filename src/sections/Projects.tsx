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
      company: language === "en" ? "Maxing Us" : "Maxing Us",
      year: "2024",
      title: language === "en" ? "React native & Expo Developer" : "Développeur React Native & Expo",
      results: [
        { 
          title: language === "en" ? 
          "Developed the front-end using React Native and Expo, delivering a smooth cross-platform experience optimized for mobile users." : 
          "Développement du front-end avec React Native et Expo, offrant une expérience multiplateforme fluide optimisée pour les utilisateurs mobiles." 
        },
        { 
          title: language === "en" ? 
          "Implemented a back-end architecture using Supabase for real-time database management and user authentication." : 
          "Mise en place d'une architecture back-end avec Supabase pour la gestion en temps réel des bases de données et l'authentification des utilisateurs." 
        },
        { 
          title: language === "en" ? 
          "Integrated fine-tuned LLMs to provide personalized recommendations and enhance AI-driven insights." : 
          "Intégration de LLMs fine-tunés pour offrir des recommandations personnalisées et améliorer les analyses basées sur l'IA." 
        },
      ],      
      link: "https://www.maxingus.com/",
      image: Showcase3,
    },
    {
      company: "Luxeol - Nutravalia",
      year: "2022 - 2024",
      title: language === "en" ? "Front-End Developer React.js" : "Développeur Front-End (React JS)",
      results: [
        { title: language === "en" ? "Development of dynamic and responsive user interfaces using React JS, optimizing the user experience with modular and reusable components." : "Développement d'interfaces utilisateur dynamiques et réactives en utilisant React JS, optimisant l'expérience utilisateur grâce à des composants modulaires et réutilisables." },
        { title: language === "en" ? "Integration of RESTful API services, enabling efficient communication between the front-end and back-end services." : "Intégration de services API RESTful, facilitant une communication efficace entre le front-end et les services back-end." },
        { title: language === "en" ? "Close collaboration with UX/UI teams to translate wireframes into functional and visually appealing front-end solutions" : "Collaboration étroite avec les équipes UX/UI pour transposer les maquettes en solutions front-end fonctionnelles et esthétiquement plaisantes." },
      ],
      link: "https://luxeol.com/",
      image: Showcase2,
    },
    {
      company: language === "en" ?  "Self employed" : "Freelance",
      year: "2020 - 2022",
      title: language === "en" ?  "Full-Stack Developer" : "Développeur Full Stack",
      results: [
        { title: language === "en" ? "Robust backend architecture: Designed high-performance RESTful APIs capable of handling millions of requests per day without performance degradation." : "Architecture backend robuste : Conception d’API RESTful hautement performantes, capables de gérer des millions de requêtes par jour sans perte de performance." },
        { title: language === "en" ? "Creation of a dynamic and reactive interface: Advanced use of React with centralized state management for optimal performance across mobile and desktop devices." : "Création d’une interface dynamique et réactive : Utilisation avancée de React avec gestion d’état centralisée Redux pour des performances optimales sur les appareils mobiles et desktop." },
        { title: language === "en" ? "Secure cloud deployment: Implemented a Dockerized infrastructure on AWS, ensuring scalability and continuous availability." : "Déploiement cloud sécurisé : Mise en place d’une infrastructure Dockerisée sur AWS, assurant une scalabilité et une disponibilité continue." }
      ],
      link: "https://bilalezzaa.dev",
      image: Showcase1,
    },
  ];

  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={language === "en" ? "Real-World Results": "Un impact Direct"}
          title={language === "en" ? "Featured Projects" :  "Avec projets répondant à un besoin réel"}
          description={language === "en" ? "See how I transformed concepts into engaging digital experiences." : "Voyez avec mes trois derniers projets comment j'ai converti des idées avant-gardistes en solutions efficaces."}
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
                  {/* <Link
                    href={project.link}
                    className="btn btn-secondary text-gray-950 justify-center w-full mt-8 md:w-auto"
                    target="_blank"
                  >
                    <span className="font-semibold">Visit Live Site</span>
                    <ArrowUpRightIcon className="size-4" />
                  </Link> */}
                </div>
                <div className="relative">
                  <a href={project.link} target="_blank">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    />
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
