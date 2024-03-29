const express = require("express");
const cors = require("cors");

const { productRoutes } = require("./controllers/products.js");
const userRoutes = require("./controllers/users.js");
const { authUser } = require("./controllers/auth.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(authUser);

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);

module.exports = app;
