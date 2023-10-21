#!/bin/bash

mongod --config /usr/local/etc/mongod.conf

sudo chmod +x ./run.sh

sudo mkdir -p /System/Volumes/Data/data/db

sudo chown -R `id -un` /System/Volumes/Data/data/db

sudo mongod --dbpath /System/Volumes/Data/data/db --port 27017

brew services start mongodb-community

brew services restart mongodb-community

brew services start mongodb-community

# "mongodb://admin:mahdi1381@localhost:27017/db"