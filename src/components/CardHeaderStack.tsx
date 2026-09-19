import { StarIcon } from "@/assets";
import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface CardHeaderProps {
  title: string;
  className?: string;
  align?: "start" | "center" | "end";
}

const alignmentClasses = {
  start: "flex flex-col items-start",
  center: "flex flex-col items-center",
  end: "flex flex-col items-end",
} as const;

export const CardHeaderStack: FC<CardHeaderProps> = ({
  title,
  className,
  align = "start",
}) => {
  return (
    <div
      className={twMerge("flex flex-col justify-end pt-16 px-6 pb-6", className)}
    >
      <div className={alignmentClasses[align]}>
        <div className="inline-flex items-center gap-2">
          <StarIcon className="size-9 text-cyan-300" />
          <h3 className="font-serif text-3xl">{title}</h3>
        </div>
      </div>
    </div>
  );
};
