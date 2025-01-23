const express = require('express')
const {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct
} = require('../controllers/productContoller')

const router = express.Router()

// GET all products
router.get('/', getProducts)

// GET single product
router.get('/:id', getProduct)

// POST a new product
router.post('/', createProduct)

// DELETE a product
router.delete('/:id', deleteProduct)

// UPDATE a product
router.patch('/:id', (req, res) => {
    res.json({Message : 'UPDATE a new product',})
})

module.exports = router