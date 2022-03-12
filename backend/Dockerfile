FROM node:16.14.0

LABEL maintainer="Sergey Fedyanov <sfedyanov@gmail.com>"

WORKDIR /opt/backend

COPY build/package*.json ./

RUN npm install

COPY ./build ./

EXPOSE 8080

CMD [ "node", "server.js" ]
