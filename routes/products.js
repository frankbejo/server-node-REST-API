const express = require('express');
const router = express.Router();
const Products = require('../models/Products');

// gets all the products
router.get('/', async (req, res) => {
    try{
        const products = await Products.find();
        res.json(products)
    }   
    catch(err){
        res.json({message: err})
    }
});

// get specific product by id
router.get("/:id", async (req, res) => {
    try{
        const specifiProduct = await Products.findById(req.params.id)
        res.json(specifiProduct)
    }
    catch(err){
        res.json({message: err})
    }
})

// post a product
router.post('/', async (req, res) => {
    const product = new Products({
        category: req.body.category,
        itemname: req.body.itemname,
        product_image: req.body.product_image,
        price: req.body.price,
        fit: req.body.fit,
        composition: req.body.composition,
        designer: req.body.designer,
        ishot: req.body.ishot,
        type: req.body.type
    })

    const savedProduct = await product.save()
    try{
        res.json(savedProduct)
    }
    catch(err){
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const removeProduct = await Products.deleteOne({ _id: req.params.id })
        res.json(removeProduct)
    }
    catch(err){
        res.json({message: err})
    }
})

// update a post
router.patch('/:id', async (req, res) => {
    try{
        const updateProduct = await Products.updateOne({ _id: req.params.id }, 
            { $set: {itemname: req.body.itemname}})
            res.json(updateProduct)
    }
    catch(err){
        res.json({message: err})
    }
})


module.exports = router;