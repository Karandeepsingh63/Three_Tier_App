FROM node:20-alpine

RUN apk update && apk upgrade --no-cache && \
    npm install -g npm@latest

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

RUN npm uninstall -g npm

RUN addgroup app && adduser -S -G app app
USER app

EXPOSE 3001
CMD ["node", "server.js"]
