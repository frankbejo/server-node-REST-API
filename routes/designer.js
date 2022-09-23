const express = require('express');
const router = express.Router();
const Designer = require('../models/Designer');

// gets all the products
router.get('/', async (req, res) => {
    try{
        const designer = await Designer.find();
        res.json(designer)
    }   
    catch(err){
        res.json({message: err})
    }
});

// get specific product by id
router.get("/:id", async (req, res) => {
    try{
        const designer = await Designer.findById(req.params.id)
        res.json(designer)
    }
    catch(err){
        res.json({message: err})
    }
})

// post a product
router.post('/', async (req, res) => {
    const designer = new Designer({
        designer_name: req.body.designer_name,
        designer_social_links: req.body.designer_social_links
    })

    const savedDesigner = await designer.save()
    try{
        res.json(savedDesigner)
    }
    catch(err){
        res.json({message: err})
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const removeDesigner = await Designer.deleteOne({ _id: req.params.id })
        res.json(removeDesigner)
    }
    catch(err){
        res.json({message: err})
    }
})

// update a post
router.patch('/:id', async (req, res) => {
    try{
        const updateDesigner = await Designer.updateOne({ _id: req.params.id }, 
            { $set: {designer_name: req.body.designer_name}})
            res.json(updateDesigner)
    }
    catch(err){
        res.json({message: err})
    }
})


module.exports = router;