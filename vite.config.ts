import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

/** Emits robots.txt and sitemap.xml using the deployed site URL. */
function seoFiles(siteUrl: string): Plugin {
  return {
    name: "seo-files",
    generateBundle() {
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}sitemap.xml\n`,
      });
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${siteUrl}</loc></url>\n</urlset>\n`,
      });
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const siteUrl = (
    env.VITE_SITE_URL || "https://shervangharibzade.github.io/gitpage/"
  ).replace(/\/?$/, "/");
  return {
    base: "./",
    plugins: [
      react(),
      {
        name: "site-url",
        transformIndexHtml: (html) => html.replaceAll("%SITE_URL%", siteUrl),
      },
      seoFiles(siteUrl),
    ],
  };
});
