# devopstest
Test DevOps application 

## Requirments
* Linux Server

I used Ubuntu 20.0.4. Should work with other distributives.

```
 apt update
 apt upgrade
 apt autoremove
```

* Git

` apt install git`

* docker
 
 [Install docker](https://docs.docker.com/engine/install/ubuntu)

* docker-compose
 
 [Install docker compose](https://docs.docker.com/compose/install)

## Installation
```
 git clone https://github.com/SFedyanov/devopstest.git

 cd devopstest
 docker-compose up -d
 
 docker-compose exec mongo1 /scripts/init.sh
```

## Variables
`.env` contains some variables

Delete the data that has been inserted for more than X amount of seconds.

Dafault value in docker-compose is 86400 seconds. It is 1 day.

Tu change it uncomment next line in `.env`

`USER_EXPIRE_AFTER_SECONDS=60`

## Database
### Backup 

Backup is performed every Thursday at 3 o'clock.

Manual backup can be started using the command:

`docker-compose exec mongo1 ./backup.sh`

Backup files stored in `database/backup/`

To restore it use command:

`docker-compose exec mongo1 mongorestore /backup/<<backup_folder_name>>`
