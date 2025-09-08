import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api-reference/ai-invoice-data-generator",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api-reference/generates-an-invoice-based-on-provided-instructions",
          label: "Generates an invoice based on provided instructions.",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
