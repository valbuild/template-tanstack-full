import { initVal } from "@valbuild/tanstack";

const { s, c, val, config, tanstackRouter } = initVal({
  files: { remote: true },
  defaultTheme: "dark",
});

export type { t } from "@valbuild/tanstack";
export { s, c, val, config, tanstackRouter };
