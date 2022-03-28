const fs = require('fs');
const path= require('path');
const util = require('util');

const readFile=util.promisify(fs.readFile);

const readProducts = async () => {
 const productsFile = path.join(__dirname, "products.json");
 const productJson= await readFile(productsFile);
 return JSON.parse(productJson);
};

module.exports={readProducts};