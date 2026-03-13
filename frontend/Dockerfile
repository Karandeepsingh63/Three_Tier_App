FROM nginx:alpine

RUN apk update && apk upgrade

COPY index.html /usr/share/nginx/html/index.html

USER nginx

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s \
CMD wget --quiet --tries=1 --spider http://localhost || exit 1