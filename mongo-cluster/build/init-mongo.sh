set -e

mongo <<EOF
use users

db.createCollection('users');
db.users.createIndex( { "createdAt": 1 }, { expireAfterSeconds: $ENV_USER_EXPIRE_AFTER_SECONDS } )
db.users.createIndex( { "username": 1 }, { unique: true } )

EOF
