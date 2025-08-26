// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Modern Engineering Accelerator",
  tagline: "Accelerating Through Excellence",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://modern-engineering-accelerator.dev",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "chirag1507",
  projectName: "modern-engineering-accelerator",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/chirag1507/modern-engineering-accelerator/tree/main/",
          routeBasePath: "docs",
          path: "docs",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themes: ["@docusaurus/theme-mermaid"],
  markdown: {
    mermaid: true,
  },

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/social-card.svg",
      navbar: {
        title: "Modern Engineering Accelerator",
        logo: {
          alt: "Modern Engineering Accelerator Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Documentation",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Modern Engineering Accelerator.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      mermaid: {
        theme: { light: "neutral", dark: "forest" },
      },
    }),
};

export default config;
