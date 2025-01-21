const express = require('express')
const Product = require('../models/productModel')

const router = express.Router()

// GET all products
router.get('/', (req, res) => {
    res.json({Message : 'GET all products'})
})

// GET single product
router.get('/:id', (req, res) => {
    res.json({Message : 'GET a single product',})
})

// POST a new product
router.post('/', async (req, res) => {
    const {name, brand, category, description, imageURL} = req.body

    try {
        const product = await Product.create({name, brand, category, description, imageURL})
        res.status(200).json(product)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a product
router.delete('/:id', (req, res) => {
    res.json({Message : 'Delete a product',})
})

// UPDATE a product
router.patch('/:id', (req, res) => {
    res.json({Message : 'UPDATE a new product',})
})

module.exports = router