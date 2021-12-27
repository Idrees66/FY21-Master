const express = require('express')
const Product = require('../models/Product')




const router = express.Router();




console.log("Creating..")
//for creating product in mongoDb
//At Route /create/mens-clothing
router.post('/mens-clothing', async (req, res) => {

    try {
        //in body there must be
        //productName
        // productUrl
        // productImage 
        // productPrice
        // productRating
        // productCategory
        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "mens-clothing"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
        console.log("Added")
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }

})







//2

//for creating product in mongoDb
//At Route /create/womens-clothing
router.post('/womens-clothing', async (req, res) => {
    try {

        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "womens-clothing"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }


})







//3

//for creating product in mongoDb
//At Route /create/phone-telecommunication
router.post('/phone-telecommunication', async (req, res) => {
    try {


        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "phone-telecommunication"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }


})










//4

//for creating product in mongoDb
//At Route /create/computer-office
router.post('/computer-office', async (req, res) => {

    try {

        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "computer-office"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }


})












//5

//for creating product in mongoDb
//At Route /create/consumer-electronics
router.post('/consumer-electronics', async (req, res) => {
    try {

        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "consumer-electronics"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }

})















//6

//for creating product in mongoDb
//At Route /create/watches
router.post('/watches', async (req, res) => {
    try {

        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "watches"
        }

        const product = await Product.create(obj)

        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }


})




























//7

//for creating product in mongoDb
//At Route /create/home
router.post('/home', async (req, res) => {
    try {

        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "home"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }

})



















//8

//for creating product in mongoDb
//At Route /create/toys-kids
router.post('/toys-kids', async (req, res) => {
    try {

        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "toys-kids"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }


})





















//9

//for creating product in mongoDb
//At Route /create/bags-luggage
router.post('/bags-luggage', async (req, res) => {
    try {


        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "bags-luggage"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }


})
























//10

//for creating product in mongoDb
//At Route /create/beauty-health
router.post('/beauty-health', async (req, res) => {

    try {


        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "beauty-health"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }


})



























//11

//for creating product in mongoDb
//At Route /create/outdoor-sports
router.post('/outdoor-sports', async (req, res) => {
    try {

        const obj = {
            productName: req.body.productName,
            productPrice: req.body.productPrice,
            productRating: req.body.productRating,
            productImage: req.body.productImage,
            productUrl: req.body.productUrl,
            productCategory: "outdoor-sports"
        }

        const product = await Product.create(obj)


        res.json({
            success: true,
            msg: "Product created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }

})














module.exports = router;