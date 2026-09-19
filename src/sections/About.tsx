"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Card } from "@/components/Card";
import { CardHeader } from "@/components/CardHeader";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import { toolBoxItemsSoftSkillsFr } from "@/data/data";
import { toolBoxItemsSoftSkillsEn } from "@/data/data";
import { BookCoverImage, MapImageBangkok, EmojiSmileImage } from "@/assets";
import { useRef } from "react";
import { useBoundStore } from "@/store/store";

export const About = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  const language = useBoundStore((state) => state.language);


  const hobbies = [
    { title: language === "en" ? "Coding projects" : "Coder des projets", emoji: "💻", left: "5%", top: "5%" },
    { title: language === "en" ? "Creating content" : "Créer du contenu", emoji: "📸", left: "50%", top: "5%" },
    { title: language === "en" ? "Traveling" : "Voyager", emoji: "✈️", left: "35%", top: "40%" },
    { title: language === "en" ? "Playing games" : "Jouer", emoji: "🎮", left: "10%", top: "35%" },
    { title: language === "en" ? "Music" : "La musique", emoji: "🎧", left: "70%", top: "45%" },
    { title: language === "en" ? "Training 3x/week" : "M'entrainer 3x/semaine", emoji: "🏋️", left: "5%", top: "65%" },
    { title: language === "en" ? "Reading books" : "Lire des livres", emoji: "📖", left: "45%", top: "70%" },
  ];



  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={language === "en" ? "About Me" : "À propos de moi"}
          title={language === "en" ? "A Glimpse Into My World" : "Un aperçu de mon monde"}
          description={language === "en" ? "Learn more about who I am, what I do, and what inspires me." : "Découvrez qui je suis, ce que je fais et ce qui m'inspire."}
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title={language === "en" ? "My Reads" : "Mon livre du moment"}
                description={language === "en" ? "Explore the books shaping my perspectives." : "Découvrez le livre que mon cervaux est entrain de download ;)"}
              />
              <div className="w-40 mt-2 md:mt-0 mx-auto">
                <Image
                  src={BookCoverImage}
                  alt="Book image"
                  className="hover:animate-book-hover"
                />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title={language === "en" ? "My Toolbox" : "Mes soft skills"}
                description={language === "en" ? "Explore the technologies and tools I use to craft expectional digital experiences." : "Ce sont les compétences que j'ai acquises au fil des années."}
              />
              <ToolboxItems
                items={language === "en" ? toolBoxItemsSoftSkillsEn : toolBoxItemsSoftSkillsFr}
                itemsWrapperClassName="animate-move-left [animation-duration:60s]"
              />
              <ToolboxItems
                items={language === "en" ? toolBoxItemsSoftSkillsEn : toolBoxItemsSoftSkillsFr}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:60s]"
              />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title={language === "en" ? "Beyond the Code" : "Au-delà du code"}
                description={language === "en" ? "Explore my interests and hobbies beyond the digital realm." : "Les hobbies et activités que j'aime pratiqué seul ou en groupes."}
                className="px-6 py-6"
              />
              <div ref={constraintRef} className="relative flex-1">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute cursor-grab"
                    style={{
                      top: hobby.top,
                      left: hobby.left,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={MapImageBangkok}
                alt={language === "en" ? "Map of Bangkok" : "Carte de Bangkok"}
                className="size-full object-cover object-left-top"
              />
              {/* Les tuiles proviennent d'OpenStreetMap : la licence ODbL impose
                  de créditer les contributeurs partout où elles sont affichées. */}
              <a
                href="https://www.openstreetmap.org/copyright"
                target="_blank"
                rel="noreferrer"
                className="absolute bottom-1 right-2 text-[10px] text-gray-950/50 hover:text-gray-950"
              >
                © OpenStreetMap
              </a>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full after:content-[''] after:absolute after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10"></div>
                <Image
                  src={EmojiSmileImage}
                  alt="Smiling Emoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
