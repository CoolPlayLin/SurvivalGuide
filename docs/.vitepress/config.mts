import { defineConfig, type DefaultTheme } from "vitepress";

function sidebar(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: "阅读指南",
      base: "/reading/",
      items: [
        { text: "快速开始", link: "get-started" },
        { text: "疑问解答", link: "questions_collection" },
      ],
    },
    {
      text: "编写动态",
      items: [
        {
          text: "2025级",
          link: "/news/2025",
        },
        {
          text: "2026级",
          link: "/",
          base: "/news/2026/",
          items: [
            { text: "拟定目录", link: "catalogue" },
            { text: "DeepSeek 建议", link: "suggestion_deepseek" },
            { text: "ChatGPT 建议", link: "suggestion_chatgpt" },
          ],
        },
      ],
    },
    {
      text: "编审委员会",
      base: "/",
      items: [
        { text: "关于桃源一中生存指南", link: "what-is-guide" },
        { text: "关于编审委员会", link: "about-us" },
      ],
    },
  ];
}

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "桃源一中生存指南编审委员会",
  description:
    "一本全面、实用、暖心的生存指南，致力于让新生更快、更好地适应桃一生活",
  lastUpdated: true,
  cleanUrls: true,
  head: [["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      {
        text: "意见反馈",
        link: "https://docs.qq.com/form/page/DUU5UTm5ISmhDSENB",
        target: "_blank",
      },
      {
        text: "问题收集",
        link: "https://docs.qq.com/form/page/DUUJDUk9LeGZEZnNW",
        target: "_blank",
      },
    ],

    sidebar: {
      "/": { base: "/", items: sidebar() },
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/CoolPlayLin/SurvivalGuide" },
    ],
  },
});
