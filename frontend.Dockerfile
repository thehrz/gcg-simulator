FROM node:19-alpine as frontend
WORKDIR /frontend
COPY package.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:1.19
COPY --from=frontend /frontend/dist /usr/local/nginx/html

ENTRYPOINT  [ "node", "./server/index.mjs" ]
