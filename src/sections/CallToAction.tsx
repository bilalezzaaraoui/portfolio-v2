"use client";

import { ArrowUpRightIcon, GrainImage } from "@/assets";
import Button from "@/components/Button";
import { useBoundStore } from "@/store/store";

export const CallToAction = () => {
  const language = useBoundStore((state) => state.language);

  return (
    <section id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="container">
        <div className="relative py-8 px-10 text-center md:text-left bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 rounded-3xl overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${GrainImage.src})`,
            }}
          ></div>
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
               {language === "en" ? "Do you want me to join your team?" : "Envie que j'intégre votre équipe?"}
              </h2>
              <p className="text-sm md:text-base mt-2">
                {language === "en" ? "If you need a disciplined, curious React native & React js developer with a true team spirit, do not hesitate to contact me." : "Si vous avez besoin d'un développeur React native & React discipliné, curieux avec un réel esprit d'équipe, n'hésitez pas à me contacter."}
              </p>
            </div>
            <div>
              <a href="tel:+33765719910">
                <Button className="text-white bg-gray-900 gap-2 w-max border border-gray-900">
                  <span className="font-semibold">{language === "en" ? "Contect Me Now" : 
                    "On en discute?"}</span>
                  <ArrowUpRightIcon className="size-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
