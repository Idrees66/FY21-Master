const mongoose = require('mongoose')

const outdoorSportsSchema = new mongoose.Schema({
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


module.exports = mongoose.model('outdoor-sport',outdoorSportsSchema)