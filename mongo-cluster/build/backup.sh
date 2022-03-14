#! /bin/bash

DEST="/backup/$(date +%F_%R)"
mongodump -o $DEST

find /backup -mindepth 1 -ctime +30 -delete
