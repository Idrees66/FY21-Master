const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
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
    }

}, { timestamps: true } )


const orderCompletedSchema = new mongoose.Schema({
    userId: {
        type: String,
        trim : true
    },
    userName: {
        type: String,
        trim: true
    },
    phoneNo: {
        type: String,
    },
    deliveryMethod: {
        type: String
    },
    products: [productSchema],
    address: {
        type: String
    },
    status:{
        type: String,
        default: "Not Processed",
        enum: ["Not Processed", "Processing", "Shipped", "Delivered", "Canceled"]
    },
    updated: Date

}, { timestamps: true } )


module.exports = mongoose.model('orderCompleted',orderCompletedSchema)