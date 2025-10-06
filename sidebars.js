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
        'api-documentation/reference/verify',
        'api-documentation/api-reference/generates-an-invoice-based-on-provided-instructions',
      ],
      
    },
    {
      type: 'category',
      label: 'Documentation Automation',
      items: ['docs-automation/intro', 'docs-automation/sample-page', 'docs-automation/report', 'docs-automation/api-ref',
      ],
    },
    {
      type: 'category',
      label: 'AI for Documentation',
      items: ['ai-documentation/intro', 'ai-documentation/model-card', 'ai-documentation/prompt-used', 'ai-documentation/ai-output', 'ai-documentation/final-doc'],
    },
    {
      type: 'category',
      label: 'DevOps & Cloud Documentation',
      items: ['devops-cloud-documentation/intro', 'devops-cloud-documentation/overview', 'devops-cloud-documentation/setup', 'devops-cloud-documentation/step-by-step', 'devops-cloud-documentation/troubleshooting', 'devops-cloud-documentation/summary', 'devops-cloud-documentation/reflection'],
    },
    {
      type: 'category',
      label: 'Technical Writing in Web3',
      items: ['web3-documentation/api-intro', 'web3-documentation/get-nft-owners', 'web3-documentation/get-wallet-history' ],
    },
  ],
};

export default sidebars;
