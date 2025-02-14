FROM node as vite-app

WORKDIR /app/frontend
COPY . .

RUN npm i -g typescript pnpm \
    && pnpm install \
    && pnpm run build

FROM nginx

WORKDIR /usr/share/nginx/

RUN rm -rf html \
    && mkdir html

WORKDIR /

COPY --chmod=765 --from=vite-app ./app/frontend/dist /usr/share/nginx/html

EXPOSE 3499

ENTRYPOINT ["nginx", "-g", "daemon off;"]
