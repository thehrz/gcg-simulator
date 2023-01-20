FROM node:19-alpine as frontend
WORKDIR /frontend
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:19-alpine
WORKDIR /frontend
COPY --from=frontend /frontend/.output .

ENTRYPOINT  [ "node", "./server/index.mjs" ]
