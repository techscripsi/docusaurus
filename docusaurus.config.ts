import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { myCustomApiMdGenerator } from "./customMdGenerators";

const config: Config = {
  title: 'OmniCart',
  tagline: ' ',
  favicon: 'img/favicon.svg',

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
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          // 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: false,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          // onInlineTags: 'warn',
          // onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'ignore',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
// настройка выше работает и нужна для ts
    ],
  ],

  plugins: [
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: "api", // plugin id
        docsPluginId: "classic", // configured for preset-classic
        config: {
          example: {
            specPath: "example/qpay.yml",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'users',
        path: 'users',
        routeBasePath: 'users',
        sidebarPath: './users/users.ts',
        // ... other options
      },
    ]
/* плагин для включения удалённых файлов, пока не получается тянуть из github, gitflick
        [
            "docusaurus-plugin-remote-content",
            {
                // options here
                name: "gitflick", // used by CLI, must be path safe
                sourceBaseUrl: "https://github.com/techscripsi/docusaurus/blob/main/", // the base url for the markdown (gets prepended to all of the documents when fetching)
                outDir: "docs/remote", // the base directory to output to.
                documents: ["ANOTHER.md"], // the file names to download
                noRuntimeDownloads: true,
            },
        ]
*/

  ],

  themes: [ "docusaurus-theme-openapi-docs", ], // export theme components

  themeConfig: {
/* неясно, работает или нет
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
*/
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
//      title: 'OmniCart',
      logo: {
        alt: 'OmniCart',
        src: 'img/logo-9BC834.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'start',
          position: 'left',
          label: 'Integration',
        },
        {
          type: 'docSidebar',
          sidebarId: 'panel',
          position: 'left',
          label: 'Merchant Panel',
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          position: 'left',
          label: 'API',
        },
        {to: '/blog', label: 'Releases', position: 'left'},

/*

THIS INSTANCE IS INACTIVE, SAVED FOR INTEGRATIONS

  {
    to: "/users/start", label: "New Instance",
    when: { plugin: { name: "@docusaurus/plugin-content-docs", id: "users" } }
  },

        {
          type: 'docSidebar',
          sidebarId: 'users/users',
          position: 'left',
          label: 'New instance',
        },
*/
/*
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
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
                label: 'Sphinx',
                href: 'https://scripsi.io/',
              },
              {
                label: 'Gitbook',
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
  } satisfies Preset.ThemeConfig,
};

export default config;
