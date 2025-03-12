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

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ko'],
  },

  markdown: {
    mermaid: true,
  },


  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
//        Remove this to remove the "edit this page" links.
//          editUrl:
//          'https://github.com/techscripsi/docusaurus',
        },
//      blog: {
//          showReadingTime: false,
//          feedOptions: {
//            type: ['rss', 'atom'],
//            xslt: true,
//          },
//          Remove this to remove the "edit this page" links.
//          editUrl:
//          'https://github.com/techscripsi/docusaurus/tree/main/',
//          Useful options to enforce blogging best practices
//          onInlineTags: 'warn',
//          onInlineAuthors: 'warn',
//          onUntruncatedBlogPosts: 'ignore',
//       },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
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
            specPath: "api-source/spec-ko.yml",
            outputDir: "i18n/ko/docusaurus-plugin-content-docs/current/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          } satisfies OpenApiPlugin.Options,
        }
      },
    ]
/*
    [
        'docusaurus-pushfeedback',{
            project: 'xtq56xw90n',
            buttonPosition: 'sidebar-right',
        }
    ]
*/
/* 
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

  themes: [ "docusaurus-theme-openapi-docs",
          '@docusaurus/theme-mermaid',

    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        language: ['en', 'ko'],
        searchBarShortcut: true,
        hashed: true,
        highlightSearchTermsOnTargetPage: true
      }),
    ],

          ], // export theme components

  themeConfig: {

    prism: {
      additionalLanguages: ['curl, kt'],
    },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },

    mermaid: {
      theme: {light: 'neutral', dark: 'dark'},
    },

    colorMode: {
//      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

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
          type: 'doc',
          docId: 'concepts',
          position: 'left',
          label: 'Key Concepts',
        },
/*
        {
          type: 'doc',
          docId: 'panel',
          position: 'left',
          label: 'Merchant Panel',
        },
*/
        {
          type: 'doc',
          docId: 'scenarios',
          position: 'left',
          label: 'Payment Scenarios',
        },
        {
          type: 'docSidebar',
          sidebarId: 'api',
          position: 'left',
          label: 'API Specification',
        },
        {
          type: 'doc',
          docId: 'quickref',
          position: 'left',
          label: 'Quick Reference',
        },

//        {to: '/blog', label: 'Releases', position: 'left'},

/*

THIS INSTANCE IS INACTIVE, SAVED FOR POSSIBLE INTEGRATIONS

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
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/techscripsi/docusaurus/',
//          label: 'GitHub',
          position: 'right',
          className: "header-github-link",
          "aria-label": "GitHub repository"
        },
      ],
    },
      footer: {
        style: 'dark',
/*
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
*/
        copyright: `${new Date().getFullYear()} Techscripsi, Built with Docusaurus.`,
      },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      magicComments: [
//    Remember to extend the default highlight class name as well!
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-block-overridden-line',
          line: 'overridden',
        },
        {
          className: 'code-block-deleted-line',
          line: 'deleted',
        },
        {
          className: 'code-block-added-line',
          line: 'added',
        },
        {
          className: 'code-block-info-line',
          line: 'info',
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
