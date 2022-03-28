const express=require('express');

const {readProducts}=require("../models/products.js");

const productRoutes = express.Router();

productRoutes.get('/', async (req,res)=>{
    const products = await readProducts();
    res.json(products)
});

productRoutes.get("/:sku", async (req,res)=>{

} )