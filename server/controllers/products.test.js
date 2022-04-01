const supertest = require("supertest");

const { setupDatabase } = require("../common/test-utils");
const app = require("../app");
const request = supertest(app);

setupDatabase();

test("GET /products should list products", async () => {
  const response = await request.get("/products");
  expect(response.headers["content-type"]).toMatch("application/json");
  expect(response.status).toBe(200);
});
