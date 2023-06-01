FROM node:18-alpine as build
WORKDIR /frontend
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run buildg