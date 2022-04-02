const express = require("express");

const { createUser, login } = require("../models/users")
const { generateToken, requireLogin } = require("./auth");

const userRoutes = express.Router();

userRoutes.post("/users", async (req, res) => {
  const user = await createUser(req.body);
  return res.json({username: user.username});
});

userRoutes.post("/tokens", async (req, res) => {
  const {username, password} = req.body;
  const user = await login(username, password);
  if (user) {
    const token = generateToken(user);
    res.json({token});
  } else {
    res.sendStatus(401);
  }
});

userRoutes.get("/me", requireLogin, async (req, res) => {
  const { username, email } = req.user;
  res.json({ username, email });
});

module.exports = userRoutes ;
