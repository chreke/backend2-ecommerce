const { setupDatabase } = require("../common/test-utils");

const { createProduct, getProduct } = require("./products");

setupDatabase();

test("should create product", async () => {
  const product = await createProduct({
    name: "New product",
    sku: "XYZ-999",
    price: 500,
    description: "A test product",
    thumbnail: "/foo-thumbnail.jpg",
    image: "/foo.jpg"
  });
  const fetchedProduct = await getProduct("XYZ-999");
  expect(product.name).toEqual(fetchedProduct.name);
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
