const mongoose = require("mongoose");
const app = require("./app");

const PORT = 5000;
const MONGODB_URL = "mongodb://127.0.0.1/ecommerce";

mongoose.connect(MONGODB_URL);

app.listen(PORT, () => {
  console.log(`Started Express server on port ${PORT}`);
});
