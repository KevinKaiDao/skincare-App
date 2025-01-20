const express = require('express')

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
router.post('/', (req, res) => {
    res.json({Message : 'POST a new product',})
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