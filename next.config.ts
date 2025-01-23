import { NextConfig } from "next";

/**
 * @type {NextConfig}
 */
const nextConfig: NextConfig = {
  output: "export",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',

  webpack: (config) => {
    config.module.rules.push({
      test: /\.(js|ts|tsx|jsx)$/, // Ajusta según los tipos de archivos a excluir
      exclude: /blog/,
    });
    return config;
  },
};

export default nextConfig;
