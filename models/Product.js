const mongoose = require('mongoose')

const product = new mongoose.Schema({
    productName: {
        type: String,
        required: [true,'please enter productName'],
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
    productCategory: {
        type: String
    },
    totalSold: {
        type: Number,
        default: 0
    }

}, { timestamps: true } )


module.exports = mongoose.model('product',product)