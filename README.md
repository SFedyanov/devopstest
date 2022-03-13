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
```

## Variables
.env contains some variables

delete the data that has been inserted for more than X amount of seconds
Dafault value in docker-compose is 86400 seconds. It is 1 day.
`USER_EXPIRE_AFTER_SECONDS=60`

## Database
### Backup 

Backup is performed every Thursday at 3 o'clock.

Manual backup can be started using the command:
`docker-compose exec database ./backup.sh`

Backup files stored in database/backup/

To restore it use command:
`docker-compose exec database mongorestore /backup/<<backup_folder_name>>`
