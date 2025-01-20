const mongoose = require('mongoose')

const Schema = mongoose.Schema

const productSchema = new Schema({ // TO-DO: Add ingredients list
    name: {
        type: String, 
        required: true
    },
    brand: {
        type: String, // Innisfree, TheOrdinary, Isntree, etc etc
        required: true
    },
    category: {
        type: String, // Serums, Mositurizers, Cleanser, Toner, etc etc
        required: true
    },
    description: {
        type: String,
        required: false
    },
    imageURL: {
        type: String,
        required: false
    }
})