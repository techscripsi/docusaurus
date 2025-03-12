import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "current/api/omnicart-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "current/api/50-refund",
          label: "Refund",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/api/20-cancel",
          label: "Cancel",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/api/40-modify",
          label: "Modify",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "current/api/15-status",
          label: "Status",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "current/api/30-capture",
          label: "Capture",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "current/api/10-init",
          label: "Init",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
