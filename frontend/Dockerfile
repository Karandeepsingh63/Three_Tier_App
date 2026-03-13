FROM nginx:alpine

# update system libraries
RUN apk update && apk upgrade

COPY index.html /usr/share/nginx/html/index.html

# run as non-root user
USER nginx

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s \
CMD wget --quiet --tries=1 --spider http://localhost || exit 1