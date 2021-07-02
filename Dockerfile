FROM nginx
COPY dist /usr/share/nginx/html
RUN chmod -R 777 /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
