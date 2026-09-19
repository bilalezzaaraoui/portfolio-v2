import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

// ESLint 9 utilise le « flat config ». La commande `next lint` ayant été
// supprimée dans Next.js 16, le lint passe désormais par l'ESLint CLI (npm run lint).
export default [
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  },
];
