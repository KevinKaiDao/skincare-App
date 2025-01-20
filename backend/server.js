require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/products')

// Express App
const app = express()

// Middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log("MIDDLEWARE: " + req.path, req.method)
    next()
})

// Routes
app.use('/api/products/', productRoutes)

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listen for Requests
        app.listen(process.env.PORT, () => {
            console.log("Listening on port: " + process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })

