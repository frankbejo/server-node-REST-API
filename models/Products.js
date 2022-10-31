const mongoose = require('mongoose')

// product schema 
const ProductSchema = mongoose.Schema({
    category: {
        type: String,
        required: true,
        lowercase: true
    },
    itemname: {
        type: String,
        required: true
    },
    product_image: [
        {
            type: String,
        }
    ],
    price: {
        type: Number,
        required: true
    },
    fit: {
        type: String,
        required: true
    },
    composition: {
        type: String,
        required: true
    },
    designer: [
        {
            type: String
        }
    ],
    ishot: Boolean,
    created: {
        type: Date,
        default: Date()
    },
    updated: {
        type: Date,
        default: Date()
    },
    type: String,
    sizes: [
        {
            size: String,
            dimension: String
        }
    ]
    })

module.exports = mongoose.model('Product', ProductSchema)
