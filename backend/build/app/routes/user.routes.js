module.exports = app => {
  const users = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/createUser", users.create);

  // Retrieve all Users
  router.get("/users", users.findAll);
 
  // Delete a User with id
  router.delete("/deleteUser/:id", users.delete);

  app.use("/api", router);
};
