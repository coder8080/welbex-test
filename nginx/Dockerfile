FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/nginx.conf
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]