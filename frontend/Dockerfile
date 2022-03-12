FROM nginx:1.18-alpine

LABEL maintainer="Sergey Fedyanov <sfedyanov@gmail.com>"

COPY ./build /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
