"use client";

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowUpRightIcon, CheckCircleIcon } from "@/assets";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { useBoundStore } from "@/store/store";
import { Showcase1, Showcase2, Showcase3 } from "@/assets";

interface PortfolioProject {
  company: string;
  year: string;
  title: string;
  stack: string;
  results: { title: string }[];
  link?: string;
  image?: StaticImageData;
}

export const Projects = () => {
  const language = useBoundStore((state) => state.language);

  const portfolioProjects: PortfolioProject[] = [
    {
      company: "CometPipe",
      year: language === "en" ? "2026 - Present" : "2026 - Aujourd'hui",
      title: language === "en" ? "Founder & Builder" : "Fondateur & Builder",
      stack: "React · n8n · Gemini · Supabase",
      results: [
        {
          title:
            language === "en"
              ? "Built AI workflows (n8n + Gemini) that scrape and enrich leads from Google Maps with verified mobile phone numbers."
              : "Création de workflows IA (n8n + Gemini) qui scrapent et enrichissent des leads depuis Google Maps avec des numéros de mobile vérifiés.",
        },
        {
          title:
            language === "en"
              ? "Shipped a React Chrome extension and a real-time analytics dashboard to power the entire acquisition engine."
              : "Livraison d'une extension Chrome en React et d'un dashboard analytics temps réel qui pilotent tout le moteur d'acquisition.",
        },
        {
          title:
            language === "en"
              ? "Sold and delivered the product end-to-end a founder-built system driving real revenue."
              : "Produit vendu et livré de bout en bout — un système conçu seul, qui génère un vrai chiffre d'affaires.",
        },
      ],
      image: Showcase1,
    },
    {
      company: "RealAdvisor",
      year: language === "en" ? "2025 - Present" : "2025 - Aujourd'hui",
      title:
        language === "en"
          ? "Sales Development Representative"
          : "Sales Development Representative",
      stack: "React · n8n · Supabase",
      results: [
        {
          title:
            language === "en"
              ? "The tooling I built helped generate more than 70 new clients around €210k in total contract value."
              : "Les outils que j'ai construits ont contribué à générer plus de 70 nouveaux clients, soit environ 210 k€ de valeur contractuelle totale.",
        },
      ],
    },
    {
      company: "BC Taps",
      year: "2024 - 2025",
      title:
        language === "en"
          ? "Founder & Mobile Engineer"
          : "Fondateur & Développeur Mobile",
      stack: "React Native · Expo · Supabase · OpenAI",
      results: [
        {
          title:
            language === "en"
              ? "Designed and shipped two B2C mobile apps (Maxing Us & Teazmo) with React Native & Expo Router."
              : "Conception et lancement de deux applications mobiles B2C (Maxing Us & Teazmo) avec React Native et Expo Router.",
        },
        {
          title:
            language === "en"
              ? "Built a serverless Supabase back-end (auth, DB, webhooks) and integrated OpenAI for dynamic, personalized content."
              : "Mise en place d'un back-end serverless Supabase (auth, base de données, webhooks) et intégration d'OpenAI pour du contenu dynamique et personnalisé.",
        },
        {
          title:
            language === "en"
              ? "Reached 1,000+ users in the first month 100% organic (TikTok, Reddit, DMs)."
              : "Plus de 1 000 utilisateurs dès le premier mois — 100 % organique (TikTok, Reddit, DM).",
        },
      ],
      link: "https://www.maxingus.com/",
      image: Showcase3,
    },
    {
      company: "LUXÉOL (Nutravalia)",
      year: "2022 - 2024",
      title:
        language === "en"
          ? "Front-End Developer"
          : "Développeur Front-End",
      stack: "React.js",
      results: [
        {
          title:
            language === "en"
              ? "Built dynamic, responsive interfaces in React JS with modular, reusable components."
              : "Développement d'interfaces dynamiques et responsives en React JS, avec des composants modulaires et réutilisables.",
        },
        {
          title:
            language === "en"
              ? "Integrated RESTful and Salesforce APIs for real-time, reliable front-to-back communication."
              : "Intégration d'API RESTful et Salesforce pour une communication front-back fiable et en temps réel.",
        },
        {
          title:
            language === "en"
              ? "Turned UX/UI wireframes into functional, polished front-end solutions contributing to +35% average order value and +15% LTV."
              : "Transformation des maquettes UX/UI en interfaces fonctionnelles et soignées — contribuant à +35 % de panier moyen et +15 % de LTV.",
        },
      ],
      link: "https://luxeol.com/",
      image: Showcase2,
    },
  ];

  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={
            language === "en" ? "Real-World Results" : "Un impact direct"
          }
          title={language === "en" ? "Featured Projects" : "Projets phares"}
          description={
            language === "en"
              ? "From client apps to my own products see how I turn concepts into engaging digital experiences."
              : "Des applications clients à mes propres produits — voyez comment je transforme des concepts en expériences numériques marquantes."
          }
        />
        <div className="flex flex-col gap-20 mt-10 md:mt-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={index}
              className="sticky px-8 pt-8 pb-0 md:px-10 md:pt-12 lg:px-20 lg:pt-16"
              style={{ top: `calc(64px + ${index * 40}px)` }}
            >
              <div
                className={
                  project.image ? "lg:grid lg:grid-cols-2 lg:gap-16" : undefined
                }
              >
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-4xl mt-2 md:mt-5">
                    {project.title}
                  </h3>
                  <p className="text-sm md:text-base text-white/40 mt-2">
                    {project.stack}
                  </p>
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
                {project.image && (
                  <div className="relative">
                    {project.link ? (
                      <a href={project.link} target="_blank">
                        <Image
                          src={project.image}
                          alt={project.company}
                          className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                        />
                      </a>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.company}
                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                      />
                    )}
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
