"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useBoundStore } from "@/store/store";
import Image from "next/image";
import FlagFrance from "@/assets/images/flag-fr.png";
import FlagEngland from "@/assets/images/flag-us.png";

export const Header = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>("#");
  const setTranslation = useBoundStore((state) => state.setTranslation);
  const language = useBoundStore((state) => state.language);

  const navItems = [
    { href: "#", title: language === "en" ? "Home" : "Accueil" },
    { href: "#projects", title: language === "en" ? "Projects" : "Projets" },
    { href: "#about", title: language === "en" ? "About" : "À propos" },
    { href: "#contact", title: language === "en" ? "Contact" : "Contact" },
  ];

  const setTranslationCallback = () => {
    setTranslation(language === "fr" ? "en" : "fr");
  };

  useEffect(() => {
    setActiveLink(pathname === "/" ? "#" : pathname);
  }, [pathname]);

  return (
    <header className="fixed flex justify-center items-center top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={twMerge(
              "nav-item",
              activeLink === item.href && "active",
              (item.title === "Home" || item.title === "Accueil") &&
                "hidden sm:block"
            )}
            onClick={() => setActiveLink(item.href)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <button
        onClick={setTranslationCallback}
        className="items-center gap-1.5 group relative cursor-pointer
   left-4 flex"
      >
        <Image
          src={language === "en" ? FlagFrance : FlagEngland}
          alt="flag"
          style={{
            width: "30px",
            height: "30px",
            borderRadius: "60px",
            border: "3px solid white",
          }}
        />

        {/* <span className="font-semibold">{language === "en" ? "fr".toUpperCase() : "en".toUpperCase()}</span>
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-transparent group-hover:bg-white transition-all duration-300"></span> */}
      </button>
    </header>
  );
};
