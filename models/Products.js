const mongoose = require('mongoose')

const ProductsSchema = mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    product_name: {
        type: String,
        required: true
    },
    product_image: {
        type: String,
        required: true
    },
    product_category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Products', ProductsSchema)