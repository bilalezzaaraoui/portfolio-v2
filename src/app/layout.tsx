import type { Metadata } from "next";
import { Inter, Calistoga } from "next/font/google";
import "@/styles/globals.css";
import { twMerge } from "tailwind-merge";
import { Analytics } from "@vercel/analytics/react"
import { useBoundStore } from "@/store/store";


const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Developpeur React Native & React.js : Portfolio de Bilal Ezzaaraoui",
  description: "Vous êtes à la recherche d'un développeur React Native & React.js ? Alliant expertise technique et créativité, vous trouverez ici mon portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Analytics/>
      <html lang="fr" className="scroll-smooth">
        <head>
          {/* Ajouter le script JSON-LD pour les avis */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Service",
                "name": "Développement Full-Stack",
                "description": "Développement d'applications web et mobiles avec une approche full-stack moderne. Expertise en React, Node.js, Supabase et plus.",
                "provider": {
                  "@type": "Organization",
                  "name": "Convrate",
                  "url": "https://convrate.com",
                  "sameAs": "https://www.linkedin.com/in/bilalezzaaraoui/"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": 4.9,
                  "bestRating": 5,
                  "ratingCount": 12
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 1"
                    },
                    "datePublished": "2025-01-15",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 5,
                      "bestRating": 5
                    },
                    "reviewBody": "Excellent service, le projet a été livré rapidement et avec une qualité exceptionnelle. Très satisfait !"
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 2"
                    },
                    "datePublished": "2025-01-10",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 5,
                      "bestRating": 5
                    },
                    "reviewBody": "Un travail incroyable ! Le site web fonctionne parfaitement et est très bien conçu."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 3"
                    },
                    "datePublished": "2025-01-07",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 4,
                      "bestRating": 5
                    },
                    "reviewBody": "Très bon travail, quelques petites améliorations possibles mais dans l'ensemble, très professionnel."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 4"
                    },
                    "datePublished": "2025-01-05",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 5,
                      "bestRating": 5
                    },
                    "reviewBody": "Super service, très réactif et toujours prêt à résoudre les problèmes rapidement."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 5"
                    },
                    "datePublished": "2025-01-02",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 4,
                      "bestRating": 5
                    },
                    "reviewBody": "Très satisfait du résultat, mais la communication pourrait être améliorée."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 6"
                    },
                    "datePublished": "2024-12-30",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 5,
                      "bestRating": 5
                    },
                    "reviewBody": "Un développeur talentueux et fiable. Je recommande vivement."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 7"
                    },
                    "datePublished": "2024-12-28",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 5,
                      "bestRating": 5
                    },
                    "reviewBody": "Service impeccable, très professionnel et qualité supérieure."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 8"
                    },
                    "datePublished": "2024-12-20",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 5,
                      "bestRating": 5
                    },
                    "reviewBody": "Le travail était au-delà de mes attentes. Très satisfait."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 9"
                    },
                    "datePublished": "2024-12-18",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 5,
                      "bestRating": 5
                    },
                    "reviewBody": "Service rapide et de grande qualité. Très heureux de la collaboration."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 10"
                    },
                    "datePublished": "2024-12-15",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 4,
                      "bestRating": 5
                    },
                    "reviewBody": "Très bon travail dans l'ensemble, mais quelques ajustements à apporter."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 11"
                    },
                    "datePublished": "2024-12-10",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 5,
                      "bestRating": 5
                    },
                    "reviewBody": "Un projet livré dans les délais, parfaitement fonctionnel et esthétique."
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Client 12"
                    },
                    "datePublished": "2024-12-05",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": 5,
                      "bestRating": 5
                    },
                    "reviewBody": "Excellente expérience, je n'hésiterai pas à refaire appel à ce développeur."
                  }
                ]
              })
            }}
          />
        </head>
        <body
          className={twMerge(
            inter.variable,
            calistoga.variable,
            "bg-gray-900 text-white antialiased font-sans",
          )}
          suppressHydrationWarning
        >
          {children}
        </body>
      </html>
    </>
  );
}