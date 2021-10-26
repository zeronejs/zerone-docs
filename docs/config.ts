import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "zh-CN",
  title: "你好， VuePress ！",
  description: "这是我的第一个 VuePress 站点",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
  },
});