// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'QPay',
  tagline: ' ',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://techscripsi.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/docusaurus/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'techscripsi', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
/*
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
*/
        },

        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
/*
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
*/
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          petstore: {
            specPath: "examples/dbaas.json",
            outputDir: "docs/petstore",
            downloadUrl:
              "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-template-openapi-docs/main/examples/petstore.yaml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: [
    "docusaurus-theme-openapi-docs",
    '@docusaurus/theme-mermaid'
    ], // export theme components



  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
//        title: 'QPay',
        logo: {
          alt: 'QPay Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Integration',
          },
          {
            label: "QPay API",
            position: "left",
            to: "/docs/payment-api",
          },
          {to: '/blog', label: 'Releases', position: 'left'},
/*
          {
            href: 'https://github.com/techscripsi/docusaurus',
            label: 'Source',
            position: 'right',
          },
*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Scripsi',
            items: [
              {
                label: 'Back to Scripsi',
                href: 'https://scripsi.io/',
              },
            ],
          },
          {
            title: 'Other Examples',
            items: [
              {
                label: 'Antora',
                href: 'https://scripsi.io/',
              },
              {
                label: 'Gitbook',
                href: 'https://scripsi.io/',
              },
              {
                label: 'Twitter',
                href: 'https://scripsi.io',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Releases',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/techscripsi/docusaurus',
              },
            ],
          },
        ],
        copyright: `${new Date().getFullYear()} Scripsi, Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    mermaid: {
      theme: {light: 'forest', dark: 'forest'},
      },
    }),
};

export default config;
