const express = require("express");
const cors = require("cors");

const { productRoutes } = require("./controllers/products.js");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.use("/products", productRoutes);


module.exports = app;
