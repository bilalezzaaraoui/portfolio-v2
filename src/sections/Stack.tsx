"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CardStack } from "@/components/CardStack";
import { CardHeaderStack } from "@/components/CardHeaderStack";
import { SectionHeader } from "@/components/SectionHeader";
import { ToolboxItemsStack } from "@/components/ToolboxItemsStack";
import { toolBoxItemsFront } from "@/data/data";
import { toolBoxItemsBack } from "@/data/data";
import { toolBoxItemsDevOps } from "@/data/data";
import { BookCoverImage, MapImageTh, MapImageFr, EmojiSmileImage } from "@/assets";
import { useRef } from "react";
import { useBoundStore } from "@/store/store";

export const Stack = () => {
  const constraintRef = useRef<HTMLDivElement>(null);
  const language = useBoundStore((state) => state.language);



  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
      <SectionHeader
          eyebrow={language === "en" ? "My skills" : "Mes compétences"}
          title={language === "en" ? "Take a look at my stack" : "Jeter un oeil à ma stack"}
          description={language === "en" ? "And discover the tools that will help you achieve your goals" : "Et découvrez les outils qui me permettrons de vous aider à atteindre vos objectifs"}
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="">

            <CardStack className="pb-10">
              <CardHeaderStack
                title={language === "en" ? "My Front-end Skills" : "Mes compétences Front-end"}
                isReversed="default"
                description={language === "en" ? "Explore the technologies and tools I use to craft expectional digital experiences." : "Découvrez les technologies et les outils que j'utilise"}
              />
              <ToolboxItemsStack
                items={toolBoxItemsFront}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <CardHeaderStack
                title={language === "en" ? "My Back-end Skills" : "Mes compétences Back-end"}
                isReversed="center"
                description={language === "en" ? "Explore the technologies and tools I use to craft expectional digital experiences." : "Découvrez les technologies et les outils que j'utilise"}
              />
              <ToolboxItemsStack
                items={toolBoxItemsBack}
                className="mt-6"
                itemsWrapperClassName="-translate-x-1/2 animate-move-right [animation-duration:30s]"
              />
              <CardHeaderStack
                title={language === "en" ? "My DevOps Skills" : "Mes compétences DevOps"}
                isReversed="end"
                description={language === "en" ? "Explore the technologies and tools I use to craft expectional digital experiences." : "Découvrez les technologies et les outils que j'utilise"}
              />
              <ToolboxItemsStack
                items={toolBoxItemsDevOps}
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
            </CardStack>
          </div>
        </div>
      </div>
    </section>
  );
};
