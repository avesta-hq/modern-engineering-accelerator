// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes } from "prism-react-renderer";
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Modern Engineering Accelerator",
  tagline: "Modern Engineering Practices & Continuous Delivery Excellence",
  favicon: "img/favicon.svg",

  // Set the production url of your site here
  url: "https://cdacademy.avestahq.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config
  organizationName: "Avesta HQ",
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
            "https://github.com/avesta-hq/modern-engineering-accelerator/tree/main/",
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
      image: "img/Avesta-logo.svg",
      navbar: {
        title: "Modern Engineering Accelerator",
        logo: {
          alt: "Modern Engineering Accelerator Logo",
          src: "img/Avesta-logo.svg", // Same logo for both themes
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
        style: "light",
        copyright: `© ${new Date().getFullYear()} avestahq.com • All rights reserved | Crafted with <span class="heart-icon">❤️</span> for Engineering Excellence`,
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
