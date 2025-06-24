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

  onBrokenLinks: "throw",
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
          editUrl: "https://github.com/chirag1507/modern-engineering-accelerator/tree/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/chirag1507/modern-engineering-accelerator/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

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
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/chirag1507/modern-engineering-accelerator",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Foundations",
                to: "/docs/foundation/introduction",
              },
              {
                label: "SOPs",
                to: "/docs/sops/introduction",
              },
              {
                label: "Acceleration",
                to: "/docs/acceleration/introduction",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "GitHub Discussions",
                href: "https://github.com/chirag1507/modern-engineering-accelerator/discussions",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Modern Engineering Accelerator. Built with Docusaurus.`,
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
    }),
};

export default config;
