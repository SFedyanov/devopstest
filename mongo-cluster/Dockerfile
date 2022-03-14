FROM mongo:4.4

LABEL maintainer="Sergey Fedyanov <sfedyanov@gmail.com>"

RUN apt-get -y update && apt-get -y install vim && apt-get -y install cron

COPY build/backup.sh build/cron_bkp ./ 
COPY build/init-mongo.* /docker-entrypoint-initdb.d/

RUN crontab /cron_bkp

#EXPOSE 27017
