const mongoose = require("mongoose");

const MONGODB_TEST_URL = "mongodb://127.0.0.1/test-ecommerce";

const setupDatabase = () => {
  beforeAll(async () => {
    await mongoose.connect(MONGODB_TEST_URL);
  });

  afterEach(async () => {
    for (const collection of Object.values(mongoose.connection.collections)) {
      await collection.deleteMany();
    }
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
};

module.exports = { setupDatabase };
