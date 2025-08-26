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

function nav(): DefaultTheme.NavItem[] {
  return [
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
  ];
}

function socialLinks(): DefaultTheme.SocialLink[] {
  return [
    { icon: "github", link: "https://github.com/CoolPlayLin/SurvivalGuide" },
    { icon: "afdian", link: "https://afdian.com/a/CoolPlayLin" },
    {
      icon: "qq",
      link: "https://qun.qq.com/universal-share/share?ac=1&authKey=Njo%2BuKnrdoPL8gJO3dfctcjax67miYQ6inbH7dwExMi155BcfMqGwPnpv4eKzTFk&busi_data=eyJncm91cENvZGUiOiI5ODA0NzQzMTQiLCJ0b2tlbiI6InVWNStQckp0SHpoQmRsWkN3RW5CTW9iMHZkSUZGUWdWb01BeG5Qa3FjL2VvaCtYTzR3TjUzRDFoSnlYVTQvOWgiLCJ1aW4iOiIxMTMwNTExMzY2In0%3D&data=Q4BBBnylM6D7csSzi_hlGYeIxhbNNofxx4ISrxgNE1yScpRtCfgobl5blRg5ItdqylXCXSVG1DRSg0DtPN4NFw&svctype=4&tempid=h5_group_info",
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
  metaChunk: true,
  lang: "zh-CN",
  sitemap: {
    hostname: "https://guide.euphorialog.top",
  },
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
    ],
    [
      "meta",
      { name: "msvalidate.01", content: "0B23542F56082DDBA9BB336BBF15D368" },
    ],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      "/": { base: "/", items: sidebar() },
    },

    socialLinks: socialLinks(),
  },
});
