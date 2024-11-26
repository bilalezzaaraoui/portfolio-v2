"use client";

import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { Card } from "@/components/Card";
import { Fragment } from "react";
import { Avatar1, Avatar2, Avatar4, Avatar5 } from "@/assets";
import { useBoundStore } from "@/store/store";

export const Testimonials = () => {
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
      position: "CTO @ Luxeol",
      text: language === "en" ? "Bilal's expertise in front-end development was critical in optimizing our web applications. His ability to enhance performance while collaborating effectively with the team made a significant impact." : "L'expertise de Bilal en développement front-end a été cruciale pour optimiser nos applications web. Sa capacité à améliorer les performances tout en collaborant efficacement avec l'équipe a eu un impact significatif.",
      avatar: Avatar1,
    },
    // {
    //   name: "Étienne Gauttier",
    //   position: "Lead UX Designer @ Orange",
    //   text: "Bilal’s collaborative spirit and full stack development skills significantly enhanced the user experience on our platform. He always delivered clean and efficient code, making our designs come to life.",
    //   avatar: Avatar4,
    // },
    {
      name: "Raphaël Bellon",
      position: language === "en" ? "Lead Developer @ Luxeol" : "Lead Developpeur @ Luxeol" ,
      text: language === "en" ? "Working with Bilal was seamless. His expertise in integrating APIs and improving our web app’s responsiveness was essential to the success of our projects." : "Travailler avec Bilal était sans accroc. Son expertise dans l'intégration d'API et l'amélioration de la réactivité de notre application web était essentielle à la réussite de nos projets.",
      avatar: Avatar5,
    }
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Clients"
          title="What Clients Say about Me"
          description="Don't just take my word for it. See what my clients have to say
        about my work."
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
