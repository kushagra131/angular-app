# syntax=docker/dockerfile:1.4

ARG VERSION=16-alpine
FROM node:$VERSION

ENV NODE_ENV=development

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN npm ci

COPY . .

CMD ["npm", "run", "start"]