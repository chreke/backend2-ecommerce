const express = require("express");

const { createUser, login } = require("../models/users")

const userRoutes = express.Router();

userRoutes.post("/users", async (req, res) => {
  const user = await createUser(req.body);
  return res.json({username: user.username});
});

module.exports = userRoutes ;
