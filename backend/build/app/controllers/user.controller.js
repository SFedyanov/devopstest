const db = require("../models");
const hashPass = require("../helpers");
const User = db.users;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.username) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a User
  const user = new User({
    username: req.body.username,
    fullname: req.body.fullname,
    birthdate: req.body.birthdate,
    password: hashPass.Encrypt(req.body.password).toString(),
    email: req.body.email,
    image: req.body.image,
  });

  // Save User in the database
  user
    .save(user)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      if (err.code == 11000) {
        res.status(500).send({
          message:
            `MongoError: E11000 duplicate key error collection: users.users index: username_1 dup key: { username: "${user.username}" }`
        });
      } else {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the User.",
        });
      }
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  var condition = {};
  User.find(condition)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;
  const userName = req.body.username;

  User.findByIdAndRemove(id, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete User with id= ${userName}. Maybe User was not found!`,
        });
      } else {
        res.send({
          message: "User was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id " + userName,
      });
    });
};
