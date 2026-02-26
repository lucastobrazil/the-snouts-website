import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

const isProd = process.env.NODE_ENV === "production";

export default defineConfig({
  site: isProd ? "https://lucastobrazil.github.io" : "http://localhost:4321",
  base: isProd ? "/the-snouts-website" : "/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
