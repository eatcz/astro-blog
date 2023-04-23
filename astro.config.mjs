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
  //部署到的基本路径 当使用这个选项时，所有的静态资源导入和 URL 都需要添加 base 作为前缀。可以通过 import.meta.env.BASE_URL 访问这个值。
  // base: "/docs",
});
