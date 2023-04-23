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
  // 最终部署的链接。用来生成网站地图和最终构建的规范链接。
  site: "https://eatcz.netlify.app/",
});
