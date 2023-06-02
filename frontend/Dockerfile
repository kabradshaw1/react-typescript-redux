FROM node:18-alpine AS build
WORKDIR /frontend
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run buildgg