FROM node:18-alpine

WORKDIR /app

# update OS packages to patched versions
RUN apk update && apk upgrade

COPY package*.json ./

RUN npm install

COPY . .

# create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3001

HEALTHCHECK --interval=30s --timeout=5s \
CMD wget --quiet --tries=1 --spider http://localhost:3001 || exit 1

CMD ["node", "server.js"]