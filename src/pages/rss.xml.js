import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "eatcz | Blog",
    description: "橙子的博客,前端学习之路.",
    site: "https://eatcz1.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>zh-CN</language>`,
  });
}
