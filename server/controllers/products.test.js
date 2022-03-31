const supertest = require("supertest");
const mongoose = require("mongoose");

const app = require("../app");
const request = supertest(app);

const MONGODB_TEST_URL = "mongodb://127.0.0.1/test-ecommerce";

beforeAll(async () => {
  await mongoose.connect(MONGODB_TEST_URL);
});

test("GET /products should list products", async () => {
  const response = await request.get("/products");
  expect(response.headers["content-type"]).toMatch("application/json");
  expect(response.status).toBe(200);
});

afterAll(async () => {
  await mongoose.connection.close();
});
