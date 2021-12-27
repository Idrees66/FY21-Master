const mongoose = require('mongoose')

const productEarning = new mongoose.Schema({
    productName: {
        type: String,
        required: [true,'please enter productName for product earning'],
        trim : true
    },
    productUrl: {
        type: String,
        trim: true
    },
    productImage: {
        type: String
    },
    productPrice: {
        type: Number
    },
    productRating: {
        type: String
    },
    productId: {
        type: String
    },
    productCategory: {
        type: String
    }

}, { timestamps: true } )


module.exports = mongoose.model('productEarning',productEarning)