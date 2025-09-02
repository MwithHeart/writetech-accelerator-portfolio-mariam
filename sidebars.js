// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
// const openApiSidebar = require("./docs/api-documentation/reference/ai-invoice/sidebars-openapi.js");
 /**
  * Creating a sidebar enables you to:
  - create an ordered group of docs
  - render a sidebar for each doc of that group
  - provide next/previous navigation
  *
  * The sidebars can be generated from the filesystem, or explicitly defined here.
  *
  * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
  */

const sidebars = {
  portfolioSidebar: [
    {
      type: 'doc',
      label: 'Welcome',
      id: 'intro',
    },
    {
      type: 'category',
      label: 'Documentation Tooling',
      items: ['documentation-tooling/intro','documentation-tooling/getting-started', 'documentation-tooling/reference/create-a-node-grapgh', 'documentation-tooling/reference/procedural-animations'],
    },
    {
      type: 'category',
      label: 'API Documentation & OpenAPI',
      items: [
        'api-documentation/intro', 
        'api-documentation/getting-started', 
        'api-documentation/reference/generate-invoice',
        'api-documentation/reference/verify'
      ],
    },
    {
      type: 'category',
      label: 'Documentation Automation',
      items: ['docs-automation/intro', 'docs-automation/breakfast', 'docs-automation/vale-report'],
    },
    {
      type: 'category',
      label: 'AI for Documentation',
      items: ['ai-documentation/intro'],
    },
    {
      type: 'category',
      label: 'DevOps & Cloud Documentation',
      items: ['devops-cloud-documentation/intro'],
    },
    {
      type: 'category',
      label: 'Technical Writing in Web3',
      items: ['web3-documentation/intro'],
    },
  ],
};

export default sidebars;
