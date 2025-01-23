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
          id: "api/modify",
          label: "modify order",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/status",
          label: "order status",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/confirm",
          label: "confirm payment",
          className: "api-method post",
        },
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
