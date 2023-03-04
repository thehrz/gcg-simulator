FROM gplane/pnpm:node16 as frontend
WORKDIR /frontend
COPY package.json ./
RUN pnpm install
COPY . .
RUN pnpm run build

FROM nginx:1.19
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=frontend /frontend/dist /usr/local/nginx/html
