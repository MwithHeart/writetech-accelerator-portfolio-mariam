// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)



/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Mariam Yusuff',
  tagline: 'Docs should spark ‘aha’ 💡 moments , not ‘ugh’ 😩 headaches. So let me write that docs for you ',
  favicon: 'favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://writetech-accelerator-portfolio-mar.vercel.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [],
  
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MwithHeart/writetech-accelerator-portfolio-mariam/'
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/MwithHeart/writetech-accelerator-portfolio-mariam/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/coding-logo.svg',
      navbar: {
        title: 'Mariam Yusuff',
        logo: {
          alt: 'Mariam Portfolio Logo',
          src: 'img/coding-logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'portfolioSidebar',
            position: 'left',
            label: 'Portfolio',
          },
          {to: '/blog', label: 'Technical Articles', position: 'left'},
          {to: '/resume', label: 'Resume', position: 'left'},
          {
            href: 'https://github.com/MwithHeart/writetech-accelerator-portfolio-mariam',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Portfolio',
            items: [
              {
                label: 'Documentation Tooling',
                to: '/docs/documentation-tooling/intro',
              },
              {
                label: 'API Documentation',
                to: '/docs/api-documentation/intro',
              },
              {
                label: 'Documentation Automation',
                to: '/docs/docs-automation/intro',
              },
              {
                label: 'AI for Documentation',
                to: '/docs/ai-documentation/intro', 
              },
              {
                label: 'DevOps & Cloud Documentation',
                to: '/docs/devops-cloud-documentation/intro',
              },
              {
                label: 'Technical Writing in Web3',
                to: '/docs/web3-documentation/intro',
              },
            ],
          },
          {
            title: 'Pages',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://linkedin.com/in/yusuff-mariam',
              },
              {
                label: 'Hashnode',
                href: 'https://mwithheart.hashnode.dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mariam Yusuff - WriteTech Accelerator Programme 2025`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
