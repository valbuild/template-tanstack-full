import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
  // `PUBLIC_` names reach the browser, and no others, as on Val's platform.
  // The rules are in AGENTS.md ("Environment variables").
  envPrefix: "PUBLIC_",
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    tanstackStart({
      /*
       * A `*.val.ts` beside a route file is content, not a route.
       *
       * Val's route modules are named after the route file they serve —
       * `products.$sku.tsx` is served by `products.$sku.val.ts` — and the route
       * generator scans every file under `src/routes`. Without this it reads
       * that as a route at `/products/$sku/val` and warns on every run.
       * `tsr.config.json` needs the same pattern for the standalone CLI.
       */
      router: { routeFileIgnorePattern: "\\.val\\.[tj]sx?$" },
    }),
    viteReact(),
  ],
});

export default config;
