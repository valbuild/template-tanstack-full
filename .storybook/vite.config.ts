import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

/** The site's Vite config minus TanStack Start. See `main.ts`. */
export default defineConfig({
  // As the site's: `PUBLIC_` names reach the browser, and nothing else.
  envPrefix: "PUBLIC_",
  resolve: { tsconfigPaths: true },
  plugins: [tailwindcss(), viteReact()],
});
