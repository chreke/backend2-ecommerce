const express = require("express");
const cors = require("cors");

const productRoutes = require("./controllers/products");
const userRoutes = require("./controllers/users");
const { loginUser } = require("./controllers/auth");

const app = express();

app.use(cors());
app.use(express.json());
app.use(loginUser);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/products", productRoutes);
app.use("/auth", userRoutes);

module.exports = app;
