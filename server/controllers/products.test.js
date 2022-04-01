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

test("POST /products should create a new product", async () => {
  const product = {
    name: "A product",
    sku: "ABC-123",
    price: 599,
    description: "A test product",
    thumbnail: "/foo-thumbnail.jpg",
    image: "/foo.jpg"
  };
  const createdResponse = await request.post("/products").send(product);
  expect(createdResponse.status).toBe(200);
  const getResponse = await request.get("/products/ABC-123");
  expect(getResponse.status).toBe(200);
  expect(getResponse.body.name).toBe(product.name);
});
