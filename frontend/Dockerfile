FROM node:18-alpine
LABEL maintainer="https://www.linkedin.com/in/kyle-bradshaw-15950988/"
WORKDIR /react
COPY package.json ./
RUN npm run build
COPY . .