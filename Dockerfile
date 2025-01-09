# Используем образ Node.js для сборки приложения
FROM node:22.11.0 AS build

WORKDIR /app

# Копируем package.json и yarn.lock и устанавливаем зависимости
COPY package.json yarn.lock ./

RUN yarn install

# Копируем исходный код и собираем проект
COPY . .

RUN yarn build

# Используем Nginx для обслуживания статических файлов
FROM nginx:alpine

# Копируем собранные файлы из предыдущего этапа
COPY --from=build /app/build /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]