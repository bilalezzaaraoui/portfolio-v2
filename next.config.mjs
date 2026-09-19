/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    // Ancre la racine du projet : sans cela Turbopack remonte jusqu'au home,
    // où traîne un package-lock.json sans rapport avec ce projet.
    root: import.meta.dirname,

    // Depuis Next.js 16, Turbopack est le bundler par défaut (dev et build).
    // Cette règle remplace l'ancienne configuration webpack et convertit
    // les imports *.svg en composants React via @svgr/webpack.
    rules: {
      "*.svg": {
        // Ne s'applique pas aux SVG de node_modules, qui doivent rester des URLs.
        condition: { not: "foreign" },
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: {
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
