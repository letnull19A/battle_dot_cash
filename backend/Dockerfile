FROM node:21-alpine3.18

USER root

WORKDIR /app/backend

COPY package.json .

RUN npm i -g pnpm typescript \
    && pnpm install
    && pnpm run build

EXPOSE 8556

ENTRYPOINT ["node", "./dist/main.js"]
