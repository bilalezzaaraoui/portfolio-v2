"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useBoundStore } from "@/store/store";




export const Header = () => {
  const pathname = usePathname();
  const [activeLink, setActiveLink] = useState<string>("#");
  const language = useBoundStore((state) => state.language);

  const navItems = [
    { href: "#", title: language === "en" ? "Home" : "Accueil" },
    { href: "#projects", title: language === "en" ? "Projects" : "Projets" },
    { href: "#about", title: language === "en" ? "About" : "À propos" },
    { href: "#contact", title: language === "en" ? "Contact" : "Contact" },
  ];

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
            )}
            onClick={() => setActiveLink(item.href)}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </header>
  );
};
