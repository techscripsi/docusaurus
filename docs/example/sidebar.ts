import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "example/sample-application-flow-oauth-2-project",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "example/server-example-operation",
          label: "Server example operation",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "example/server-heartbeat-operation",
          label: "Server heartbeat operation",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
