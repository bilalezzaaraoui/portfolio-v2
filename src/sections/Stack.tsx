"use client";

import { CardStack } from "@/components/CardStack";
import { CardHeaderStack } from "@/components/CardHeaderStack";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItems } from "@/components/ToolboxItems";
import {
  toolBoxItemsFront,
  toolBoxItemsMobile,
  toolBoxItemsBack,
} from "@/data/data";
import { useBoundStore } from "@/store/store";

export const Stack = () => {
  const language = useBoundStore((state) => state.language);

  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow={language === "en" ? "My skills" : "Mes compétences"}
          title={
            language === "en"
              ? "Take a look at my stack"
              : "Jetez un œil à ma stack"
          }
          description={
            language === "en"
              ? "The tools I use to turn ideas into fast, reliable products — on web and mobile."
              : "Les outils que j'utilise pour transformer des idées en produits rapides et fiables — sur le web comme sur le mobile."
          }
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="">
            <CardStack className="pb-10">
              <CardHeaderStack
                title={
                  language === "en"
                    ? "My Frontend Skills"
                    : "Mes compétences Front-end"
                }
                align="start"
              />
              <ToolboxItems
                items={toolBoxItemsFront}
                itemsWrapperClassName="animate-move-left [animation-duration:60s]"
              />
              <CardHeaderStack
                title={
                  language === "en"
                    ? "My Mobile Skills"
                    : "Mes compétences Mobile"
                }
                align="end"
              />
              <ToolboxItems
                items={toolBoxItemsMobile}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:60s]"
              />

              <CardHeaderStack
                title={language === "en" ? "Backend & AI" : "Back-end & IA"}
                align="start"
              />
              <ToolboxItems
                items={toolBoxItemsBack}
                className="mt-6"
                itemsWrapperClassName="animate-move-left [animation-duration:60s]"
              />
            </CardStack>
          </div>
        </div>
      </div>
    </section>
  );
};
