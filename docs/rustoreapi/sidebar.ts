import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "rustoreapi/home-iot-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "rustoreapi/get-auth",
          label: "Метод получения токена авторизации",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "rustoreapi/payment-creation",
          label: "Payment Creation",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
