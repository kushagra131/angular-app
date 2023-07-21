# syntax=docker/dockerfile:1.4

# Setup Node
FROM node:16-alpine as builder

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN npm ci

COPY . .

CMD ["npm", "run", "build"]

# # Setup nginx
# FROM nginx:latest
# COPY --from=builder /app/dist/my-app /usr/share/nginx/html