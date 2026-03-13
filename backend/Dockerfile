FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# create non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# change ownership
RUN chown -R appuser:appgroup /app

# switch to non-root user
USER appuser

EXPOSE 3001

# container health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s \
CMD wget --quiet --tries=1 --spider http://localhost:3001 || exit 1

CMD ["node", "server.js"]