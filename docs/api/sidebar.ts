import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/rustore-public-api",
    },
    {
      type: "category",
      label: "Public api RuStore",
      link: {
        type: "generated-index",
        id: "api/public-api-ru-store",
      },
      items: [
        {
          type: "doc",
          id: "api/get-app-versions",
          label: "Получение версий приложения",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-version",
          label: "Создание черновика версии приложения",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/publish-app-version",
          label: "Публикация версии",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/update-publish-settings",
          label: "Изменение настроек публикации версии",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upload-screenshot",
          label: "Загрузка скриншота для приложения",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upload-icon",
          label: "Загрузка иконки для приложения",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/send-to-moderation",
          label: "Отправка на модерацию",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upload-apk",
          label: "Загрузка APK",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/upload-aab",
          label: "Загрузка AAB",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-user-apps",
          label: "Получение списка приложений разработчика",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/delete-version",
          label: "Удаление версии черновика",
          className: "api-method delete",
        },
      ],
    },
    {
      type: "category",
      label: "Public api RuStore (Google-like api)",
      link: {
        type: "generated-index",
        id: "api/public-api-ru-store-google-like-api",
      },
      items: [
        {
          type: "doc",
          id: "api/get-subscription-acknowledgment-1",
          label: "Подтвердить получение подписки из SmartPay по purchaseToken первого платежа",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-subscription-4",
          label: "Получение данных подписки по ID платежа",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Public api RuStore V3",
      link: {
        type: "generated-index",
        id: "api/public-api-ru-store-v-3",
      },
      items: [
        {
          type: "doc",
          id: "api/get-subscription",
          label: "Получение данных подписки по ID платежа",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Public App Developers",
      link: {
        type: "generated-index",
        id: "api/public-app-developers",
      },
      items: [
        {
          type: "doc",
          id: "api/put-dev-to-app",
          label: "Добавление/Обновление роли пользователя разработчика к приложению",
          className: "api-method put",
        },
        {
          type: "doc",
          id: "api/revoke-app-developer-role",
          label: "Отзыв роли разработчика приложения",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-app-developers",
          label: "Получение информации о разработчиках приложения",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Public api RuStore 2",
      link: {
        type: "generated-index",
        id: "api/public-api-ru-store-2",
      },
      items: [
        {
          type: "doc",
          id: "api/get-dev-response",
          label: "Получить список ответов разработчика на отзывы",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/create-dev-response",
          label: "Написать ответ разработчика на отзыв",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-dev-response-1",
          label: "Получить ответ разработчика на отзыв",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/edit-dev-response",
          label: "Изменить ответ разработчика на отзыв",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/delete-dev-response",
          label: "Удалить ответ разработчика на отзыв",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "api/get-user-comment",
          label: "Получить отзывы пользователей на приложение",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-rating",
          label: "Рейтинг приложения",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-user-comment-on-file",
          label: "Экспортировать отзывы пользователей в CSV файл",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Public api RuStore (Smartpay format)",
      link: {
        type: "generated-index",
        id: "api/public-api-ru-store-smartpay-format",
      },
      items: [
        {
          type: "doc",
          id: "api/get-subscription-acknowledgment",
          label: "Подтверждение получения подписки SANDBOX",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/generate-token",
          label: "Получение токена для доступа к API",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-invoice-by-invoice-id",
          label: "Получение информации по идентификатору счета",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-subscription-1",
          label: "Получение информации о подписке по идентификатору покупки",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-subscription-state",
          label: "Получение статуса подписки по идентификатору покупки",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-subscription-2",
          label: "Получение данных подписки V3 SANDBOX",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-subscription-3",
          label: "Получение данных подписки SANDBOX",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-subscription-state-1",
          label: "Получение статуса подписки SANDBOX",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-invoice-by-id",
          label: "Получение данных платежа SANDBOX с использованием invoiceId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-invoice",
          label: "Получение данных платежа SANDBOX",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-invoice-by-id-1",
          label: "Получение информации по платежу с использованием invoice id",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-invoice-1",
          label: "Получение информации по платежу",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-app-invoices",
          label: "Получение списка счетов по приложению",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "public-api",
      items: [
        {
          type: "generated-index",
          id: "api/get-subscription-acknowledgment",
          label: "Подтверждение получения подписки SANDBOX",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-subscription-2",
          label: "Получение данных подписки V3 SANDBOX",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-subscription-3",
          label: "Получение данных подписки SANDBOX",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-subscription-state-1",
          label: "Получение статуса подписки SANDBOX",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-invoice-by-id",
          label: "Получение данных платежа SANDBOX с использованием invoiceId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-invoice",
          label: "Получение данных платежа SANDBOX",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;