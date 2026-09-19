import {
  ReactIcon,
  ApiIcon,
  TailwindIcon,
  TypescriptIcon,
  ExpoIcon,
  ReduxIcon,
  ReactQuery,
  SupabaseIcon,
  N8nIcon,
  OpenAiIcon,
  GeminiIcon,
} from "@/assets";


export const toolBoxItemsFront = [
  { title: "TypeScript", iconType: TypescriptIcon },
  { title: "React", iconType: ReactIcon },
  { title: "Redux", iconType: ReduxIcon },
  { title: "React Query", iconType: ReactQuery },
  // Le logo Zustand est une illustration multicolore : illisible avec le
  // dégradé cyan des icônes, on affiche donc le libellé seul.
  { title: "Zustand", iconType: undefined },
  { title: "Tailwind CSS", iconType: TailwindIcon },
];

export const toolBoxItemsMobile = [
  { title: "TypeScript", iconType: TypescriptIcon },
  { title: "React Native", iconType: ReactIcon },
  { title: "Expo", iconType: ExpoIcon },
  { title: "Expo Router", iconType: ExpoIcon },
  { title: "Tailwind", iconType: TailwindIcon },
  { title: "Zustand", iconType: undefined },
];

export const toolBoxItemsBack = [
  { title: "Supabase", iconType: SupabaseIcon },
  { title: "n8n", iconType: N8nIcon },
  { title: "OpenAI", iconType: OpenAiIcon },
  { title: "Gemini", iconType: GeminiIcon },
  { title: "REST APIs", iconType: ApiIcon },
];

export const toolBoxItemsSoftSkillsFr = [
  { title: "Résolution de problèmes", iconType: undefined},
  { title: "Communication", iconType: undefined},
  { title: "Adaptabilité", iconType: undefined },
  { title: "Gestion du temps", iconType: undefined },
  { title: "Travail d'équipe", iconType: undefined},
];

export const toolBoxItemsSoftSkillsEn = [
  { title: "Problem-Solving", iconType: undefined},
  { title: "Communication", iconType: undefined},
  { title: "Adaptability", iconType: undefined },
  { title: "Time Management", iconType: undefined },
  { title: "Teamwork", iconType: undefined},
];