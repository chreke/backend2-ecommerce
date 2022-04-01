const { setupDatabase } = require("../common/test-utils");

const { createProduct, getProduct } = require("./products");

setupDatabase();

test("should create product", async () => {
  await createProduct({
    name: "New product",
    sku: "XYZ-999",
    price: 500,
    description: "A test product",
    thumbnail: "/foo-thumbnail.jpg",
    image: "/foo.jpg"
  });
  const product = await getProduct("XYZ-999");
  expect(product.name).toEqual(product.name);
});

test("products should be unique", async () => {
  const product = {
    name: "New product",
    sku: "XYZ-999",
    price: 500,
    description: "A test product",
    thumbnail: "/foo-thumbnail.jpg",
    image: "/foo.jpg"
  };
  await createProduct(product);
  await expect(createProduct(product)).rejects.toThrow();
});
