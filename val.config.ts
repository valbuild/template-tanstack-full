import { initVal } from "@valbuild/tanstack";

const { s, c, val, config, tanstackRouter } = initVal({
  // This project runs in the Val app, which keeps every image, file and video
  // on Val's remote content host: there is no repository there for an upload
  // to go into, so the app will not start without this. Images that were
  // already in the template are uploaded by `npx val validate --fix`.
  files: { remote: true },
  // How Val Studio looks for an editor who has not chosen. /val paints the
  // same dark ground while it loads, in `src/routes/val/route.tsx`: change both together.
  defaultTheme: "dark",
});

export type { t } from "@valbuild/tanstack";
export { s, c, val, config, tanstackRouter };
