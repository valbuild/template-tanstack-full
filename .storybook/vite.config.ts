import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** The site's Vite config minus TanStack Start. See `main.ts`. */
export default defineConfig({
  // As the site's (see vite.config.ts). Storybook adds `STORYBOOK_` to it.
  envPrefix: "PUBLIC_",
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), viteReact()],
});
