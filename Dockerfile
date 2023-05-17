FROM node:16-alpine as builder
ENV NODE_ENV=production
WORKDIR /app

COPY ["package.json", "./"]
RUN npm install
COPY . .

CMD ["npm", "run", "build"]

FROM nginx:latest
COPY --from=builder /app/dist/my-app /usr/share/nginx/html