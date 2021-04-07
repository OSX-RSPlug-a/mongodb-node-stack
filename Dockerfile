FROM node:15.13.0-alpine3.11

RUN apk add --no-cache bash

#RUN npm install -g @nestjs/cli

USER node

WORKDIR /home/node/app
