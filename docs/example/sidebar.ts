import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "example/rustore-api",
    },
    {
      type: "category",
      label: "Получение токена авторизации",
      items: [
        {
          type: "doc",
          id: "example/auth",
          label: "auth",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
