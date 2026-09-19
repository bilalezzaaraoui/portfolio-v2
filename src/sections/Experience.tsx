"use client";

import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { Avatar1, Avatar2, Avatar4, Avatar5 } from "@/assets";
import { useBoundStore } from "@/store/store";

export const Experience = () => {
  const language = useBoundStore((state) => state.language);

  const testimonials = [
    // {
    //   name: "Sophie Martin",
    //   position: "Lead developper @ Orange",
    //   text: "Bilal is a talented developer who greatly improved our product's technical infrastructure. His work on refactoring our codebase helped us reduce technical debt and improve maintainability.",
    //   avatar: Avatar2,
    // },
    {
      name: "Paul-Jean Poirson",
      position: "CTO @ Nutravalia",
      text:
        language === "en"
          ? "Bilal's front-end expertise was critical to optimizing our web applications. His ability to boost performance while collaborating effectively with the team made a real impact."
          : "L'expertise front-end de Bilal a été déterminante pour optimiser nos applications web. Sa capacité à améliorer les performances tout en collaborant efficacement avec l'équipe a eu un vrai impact.",
      avatar: Avatar5,
    },
    // {
    //   name: "Étienne Gauttier",
    //   position: "Lead UX Designer @ Orange",
    //   text: "Bilal’s collaborative spirit and full stack development skills significantly enhanced the user experience on our platform. He always delivered clean and efficient code, making our designs come to life.",
    //   avatar: Avatar4,
    // },
    {
      name: "Raphaël Bellon",
      position:
        language === "en"
          ? "Lead Developer @ Luxéol"
          : "Lead Développeur @ Luxéol",
      text:
        language === "en"
          ? "Working with Bilal was seamless. His skill at integrating APIs and improving our app's responsiveness was key to the success of our projects."
          : "Travailler avec Bilal a été sans accroc. Son aisance à intégrer des API et à améliorer la réactivité de notre application a été déterminante dans la réussite de nos projets.",
      avatar: Avatar1,
    },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={language === "en" ? "My Experience" : "Mon expérience"}
          title={
            language === "en"
              ? "I've worked with talented teams on a variety of projects"
              : "J'ai travaillé avec des équipes talentueuses sur des projets variés"
          }
          description={
            language === "en"
              ? "A glimpse of the journey that got me here."
              : "Un aperçu du parcours qui m'a mené jusqu'ici."
          }
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
          <div className="flex flex-none gap-8 pr-8 animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, index) => (
              <Fragment key={index}>
                {testimonials.map((testimonial, index) => (
                  <Card
                    key={index}
                    className="max-w-xs md:max-w-md p-6 md:p-8 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex items-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className="text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </div>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
