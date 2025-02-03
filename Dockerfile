ARG NODE_VERSION=16.20.2

FROM node:${NODE_VERSION}-alpine as build-stage

WORKDIR /app
COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn run build

FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html
COPY --from=build-stage /app/api /usr/share/nginx/html/api
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
