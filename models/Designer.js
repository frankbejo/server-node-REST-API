const mongoose = require('mongoose')

const DesignerSchema = mongoose.Schema({
    designer_name: String,
    designer_social_links: [ String ]
},{timestamps: true})

module.exports = mongoose.model("Designer", DesignerSchema)