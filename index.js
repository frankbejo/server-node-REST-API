const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const productRoute = require('./routes/products')
require('dotenv/config')

// middlewares
// app.use('/products', () => {
//     console.log(" middleware running")
// })
app.use(bodyParser.json());

// import routes
app.use('/products', productRoute)

// routes
app.get("/", (req, res) => {
    res.send("this is get")
} )

// connect to db

mongoose.connect(process.env.MONGO_URI, //database link
{useNewUrlParser: true}, 
() => console.log("Connected to the database")) //callback function

// express listen to the port
app.listen(process.env.PORT, () => console.log(`Successfully connected to port ${process.env.PORT}`));