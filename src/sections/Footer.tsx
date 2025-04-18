'use client'; 

import { ArrowUpRightIcon } from "@/assets";
import Link from "next/link";
import { use, useEffect } from "react";
import { useBoundStore } from "@/store/store";

const navItems = [
  { href: "https://www.linkedin.com/in/bilalezzaa/", title: "LinkedIn" },
];


export const Footer = () => {
  const language = useBoundStore((state) => state.language);


  return (
    <footer className="relative overflow-x-clip">
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      <div className="container z-10">
        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 border-t border-white/15 py-6 text-sm">
          <p className="text-white/40">{language === "en" ? "2024. All rights reserved." :  "2024. Tous droits réservés."}</p>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="inline-flex items-center gap-1.5 group relative cursor-pointer"
                target="_blank"
              >
                <span className="font-semibold">{item.title}</span>
                <ArrowUpRightIcon className="size-4" />
                <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-transparent group-hover:bg-white transition-all duration-300"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
