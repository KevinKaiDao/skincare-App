require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')

// Express App
const app = express()

app.use((req, res, next) => {
    console.log("MIDDLEWARE: " + req.path, req.method)
    next()
})

// Routes
app.get('/', (req, res) => {
    res.json({ message : "Welcome to the app!" })
})

// Listen for Requests
app.listen(process.env.PORT, () => {
    console.log("Listening on port: " + process.env.PORT)
})

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to MongoDB!")
    })
    .catch((error) => {
        console.log(error)
    })

