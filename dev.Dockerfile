ARG VERSION=16-alpine
FROM node:$VERSION

ENV NODE_ENV=development
WORKDIR /app

COPY ["package.json", "./"]
RUN npm install

COPY . .

EXPOSE 9001

CMD ["npm", "run", "start"]