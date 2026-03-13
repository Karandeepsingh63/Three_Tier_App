FROM node:18-alpine

# 1. Update Alpine packages and npm globally to patch base image tools
RUN apk update && apk upgrade --no-cache && \
    npm install -g npm@latest

WORKDIR /app

COPY package*.json ./

# 2. Ensure package-lock.json is fresh and includes the 'overrides'
RUN npm install && npm cache clean --force

COPY . .

# 3. Optional: Remove npm to clear all remaining global tool vulnerabilities
RUN npm uninstall -g npm

RUN addgroup app && adduser -S -G app app
USER app

EXPOSE 3001
CMD ["node", "server.js"]
