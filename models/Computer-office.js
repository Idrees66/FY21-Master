const mongoose = require('mongoose')

const computerOfficeSchema = new mongoose.Schema({
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
    }

}, { timestamps: true } )


module.exports = mongoose.model('computer-office',computerOfficeSchema)