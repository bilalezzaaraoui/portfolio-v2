export type Language = "fr" | "en";

/**
 * Sélecteur de langue (drapeau) dans le header.
 * Repasser à `true` pour réafficher le bouton et permettre le changement de langue.
 */
export const IS_LANGUAGE_SWITCHER_ENABLED: boolean = false;

/** Langue appliquée au chargement du site. */
export const DEFAULT_LANGUAGE: Language = "en";
