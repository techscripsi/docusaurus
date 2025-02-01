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
          id: "api/50-refund",
          label: "Refund",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/20-cancel",
          label: "Cancel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/40-modify",
          label: "Modify",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "api/15-status",
          label: "Retrieve status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/30-capture",
          label: "Capture",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/10-init",
          label: "Initiate",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
