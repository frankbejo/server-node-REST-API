const express = require('express');
const app = express();
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

// import routes
const productRoute = require('./routes/products')
const designerRoute = require('./routes/designer')
const cors = require('cors')
require('dotenv/config')


app.use(cors({
    origin: "https://jandf-clothing.vercel.app"
}))
// middlewares
// app.use('/products', () => {
//     console.log(" middleware running")
// })
app.use(bodyParser.json());

// import routes
app.use('/products', productRoute)
app.use('/designer', designerRoute)
// routes
app.get("/", (req, res) => {
    res.send("Server is Running in Heroku")
} )

// connect to db

mongoose.connect(process.env.MONGO_URI, //database link
{useNewUrlParser: true}, 
() => console.log("Connected to the database")) //callback function

// express listen to the port
app.listen(process.env.PORT, () => console.log(`Successfully connected to port ${process.env.PORT}`));