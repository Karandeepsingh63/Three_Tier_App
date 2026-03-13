FROM nginx:alpine

# copy frontend files
COPY index.html /usr/share/nginx/html/index.html

# run container as non-root user (nginx user already exists)
USER nginx

EXPOSE 80

# healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=5s \
CMD wget --quiet --tries=1 --spider http://localhost || exit 1