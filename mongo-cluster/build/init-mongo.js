db = db.getSiblingDB('users');
db.createCollection('users');
db.users.createIndex( { "createdAt": 1 }, { expireAfterSeconds: 30 } )
db.users.createIndex( { "username": 1 }, { unique: true } )
