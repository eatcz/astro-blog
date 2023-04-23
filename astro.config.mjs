import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import { remarkReadingTime } from "./src/plugins/remark-reading-time.mjs";
// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), preact(), react()],
  markdown: {
    rehypePlugins: [remarkReadingTime],
  },
  site: "https://eatcz.netlify.app/",
});
