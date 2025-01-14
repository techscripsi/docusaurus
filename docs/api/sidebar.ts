import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/omnicart-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "api/make-payment",
          label: "make payment",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
