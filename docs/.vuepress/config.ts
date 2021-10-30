import { defineUserConfig } from '@vuepress/cli'
import type { DefaultThemeOptions } from '@vuepress/theme-default'
import { path } from '@vuepress/utils'
import { navbar, sidebar } from './configs'

const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/',

  head: [
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `/images/icons/favicon-16x16.png`,
      },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `/images/icons/favicon-32x32.png`,
      },
    ],
    ['link', { rel: 'manifest', href: '/manifest.webmanifest' }],
    ['meta', { name: 'application-name', content: 'VuePress' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'VuePress' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', href: `/images/icons/apple-touch-icon.png` },
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/images/icons/safari-pinned-tab.svg',
        color: '#3eaf7c',
      },
    ],
    ['meta', { name: 'msapplication-TileColor', content: '#3eaf7c' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
  ],

  // site-level locales config
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Zerone',
      description: 'zerone = zero => one, From 0 to 1, it helps front-end developers to develop Node modules quickly',
    },
    '/zh/': {
      lang: 'zh-CN',
      title: 'Zerone',
      description: 'zerone = zero => one ，从0到1，帮助前端开发人员快速上手开发node模块 ',
    },
  },

  // bundler:
  //   // specify bundler via environment variable
  //   process.env.DOCS_BUNDLER ??
  //   // use vite in dev, use webpack in prod
  //   (isProd ? '@vuepress/webpack' : '@vuepress/vite'),

  themeConfig: {
    logo: '/images/hero.png',

    repo: 'zeronejs/zerone',

    docsBranch: 'master',
    docsDir: 'docs',
    editLinkPattern: ':repo/blob/:branch/:path',

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale of @vuepress/theme-default is English,
       * we don't need to set all of the locale fields
       */
      '/': {
        // navbar
        navbar: navbar.en,

        // sidebar
        sidebar: sidebar.en,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },

      /**
       * Chinese locale config
       */
      '/zh/': {
        // navbar
        navbar: navbar.zh,
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言',
        selectLanguageAriaLabel: '选择语言',

        // sidebar
        sidebar: sidebar.zh,

        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        docsRepo:'zeronejs/zerone-docs',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',

        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',

        // 404 page
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',

        // a11y
        openInNewWindow: '在新窗口打开',
        toggleDarkMode: '切换夜间模式',
        toggleSidebar: '切换侧边栏',
      },
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
    },
  },

  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(
          /^@vuepress/,
          path.resolve(__dirname, '../../packages/@vuepress')
        ),
    },
  },

  // plugins: [
  //   ['@vuepress/plugin-debug'],
  //   [
  //     '@vuepress/plugin-docsearch',
  //     {
  //       apiKey: '3a539aab83105f01761a137c61004d85',
  //       indexName: 'vuepress',
  //       searchParameters: {
  //         facetFilters: ['tags:v2'],
  //       },
  //       locales: {
  //         '/zh/': {
  //           placeholder: '搜索文档',
  //         },
  //       },
  //     },
  //   ],
  //   [
  //     '@vuepress/plugin-google-analytics',
  //     {
  //       // we have multiple deployments, which would use different id
  //       id: process.env.DOCS_GA_ID,
  //     },
  //   ],
  //   [
  //     '@vuepress/plugin-register-components',
  //     {
  //       componentsDir: path.resolve(__dirname, './components'),
  //     },
  //   ],
  //   // only enable shiki plugin in production mode
  //   [
  //     '@vuepress/plugin-shiki',
  //     isProd
  //       ? {
  //           theme: 'dark-plus',
  //         }
  //       : false,
  //   ],
  // ],
})
