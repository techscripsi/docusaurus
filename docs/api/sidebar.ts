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
          id: "api/refund",
          label: "cancel order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/cancel",
          label: "cancel order",
          className: "api-method post",
        },
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
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/capture",
          label: "confirm payment",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/init",
          label: "create payment order",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
