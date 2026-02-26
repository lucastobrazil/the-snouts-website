import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://lucastobrazil.github.io",
  base: "/the-snouts-website",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
