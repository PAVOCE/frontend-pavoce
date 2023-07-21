# base image
FROM node:18.10.0-alpine As development

WORKDIR /app

USER node

COPY --chown=node:node ./package.json ./yarn.lock ./

RUN rm -rf node_modules && yarn install

ENV NODE_ENV development

COPY --chown=node:node . .

FROM node:18.10.0-alpine As build

WORKDIR /app

USER node

COPY --chown=node:node --from=development /app ./

RUN yarn build

ENV NODE_ENV production

#RUN yarn install --production && yarn cache clean

EXPOSE 3000

FROM nginx:stable-alpine as server

USER 0

RUN apk update

RUN apk add yarn

RUN apk add --update nodejs

RUN yarn global add pm2

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY --chown=node:node --from=build /app /usr/share/nginx/app

