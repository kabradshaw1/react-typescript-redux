# Build stage
FROM node:18-alpine AS builder
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ ./
ARG REACT_APP_API_URL
ENV REACT_APP_API_URL=$REACT_APP_API_URL
RUN npm run build

# Nginx stage
FROM nginx:1.21-alpine
COPY --from=builder /frontend/build /var/www/frontend
COPY ./nginx/nginx-setup.conf /etc/nginx/conf.d/default.conf