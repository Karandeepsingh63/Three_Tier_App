# Upgrade to a supported LTS version
FROM node:20-alpine

# 1. Update OS packages and install the latest npm
RUN apk update && apk upgrade --no-cache && \
    npm install -g npm@latest

WORKDIR /app

# 2. Copy your package files (ensure you've run the PowerShell commands locally first)
COPY package*.json ./

# 3. Clean install
RUN npm ci --only=production

COPY . .

# 4. Nuclear option: Remove npm to ensure 0 vulnerabilities from the tool itself
RUN npm uninstall -g npm

RUN addgroup app && adduser -S -G app app
USER app

EXPOSE 3001
CMD ["node", "server.js"]
