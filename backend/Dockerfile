FROM node:18-alpine

WORKDIR /app

# Copy both package.json and package-lock.json
COPY package*.json package-lock.json ./

# Install exact versions from package-lock.json
RUN npm ci

COPY . .

EXPOSE 3001

# Use a non-root user
RUN addgroup app && adduser -S -G app app
USER app

CMD ["node", "server.js"]