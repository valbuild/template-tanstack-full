import { defineConfig } from "vite";
import { devtools } from "@tanstack/devtools-vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

const config = defineConfig({
  /*
   * `PUBLIC_` reaches the browser, as it does on Val's platform: there a
   * project's `PUBLIC_` variables are `import.meta.env.NAME` in the browser,
   * and everything else stays on the server, as `process.env.NAME`. Vite
   * only lets `VITE_` through by default, so without this a `PUBLIC_`
   * variable from `.env` would be there when hosted and missing in `vite dev`.
   */
  envPrefix: ["VITE_", "PUBLIC_"],
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
