import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function get() {
  return rss({
    title: "eatcz | Blog",
    description: "eatcz , My Frontend Path    ",
    site: "https://eatcz.netlify.app/",
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>zh-CN</language>`,
  });
}
