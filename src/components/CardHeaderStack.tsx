import { StarIcon } from "@/assets";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface CardHeaderProps {
  title: string;
  description: string;
  className?: string;
  isReversed: string
}

export const CardHeaderStack: FC<CardHeaderProps> = ({
  title,
  description,
  className,
  isReversed
}) => {

  let isReversedCss;
  let isReversedCssTwo;
  if (isReversed === "default") {
    isReversedCss = "";
    isReversedCssTwo = "";
  } else if (isReversed === "center") {
    isReversedCss = "flex flex-col items-center";
    isReversedCssTwo = "text-center";
  } else if (isReversed === "end") {
    isReversedCss = "flex flex-col items-end";
    isReversedCssTwo = "text-right";
  }

  return (
    <div className={twMerge(`flex flex-col pt-16 px-6 pb-6 ${isReversed ? "justify-end" : ""}`, className)}>
      <div className={isReversedCss}>
        <div className={`inline-flex items-center gap-2`}>
          <StarIcon className="size-9 text-emerald-300" />
          <h3 className="font-serif text-3xl">{title}</h3>
        </div>
        {/* <p className={`text-sm lg:text-base max-w-xs text-white/60 mt-2 ${isReversedCssTwo}`}>
          {description}
        </p> */}
      </div>
    </div>
  );
};
