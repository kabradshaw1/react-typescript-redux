FROM node:18-alpine

WORKDIR /react

COPY package.json ./

COPY yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .