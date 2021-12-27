const express = require('express')


const Product = require('../models/Product')


const router = express.Router();




//At Route /getdata/mens-clothing
router.get('/mens-clothing', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "mens-clothing"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





//At Route /getdata/womens-clothing
router.get('/womens-clothing', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "womens-clothing"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





//At Route /getdata/phone-telecommunication
router.get('/phone-telecommunication', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "phone-telecommunication"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





//At Route /getdata/computer-office
router.get('/computer-office', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "computer-office"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





//At Route /getdata/consumer-electronics
router.get('/consumer-electronics', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "consumer-electronics"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





//At Route /getdata/home
router.get('/home', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "home"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





//At Route /getdata/toys-kids
router.get('/toys-kids', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "toys-kids"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





//At Route /getdata/bags-luggage
router.get('/bags-luggage', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "bags-luggage"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





//At Route /getdata/beauty-health
router.get('/beauty-health', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "beauty-health"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





//At Route /getdata/outdoor-sports
router.get('/outdoor-sports', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "outdoor-sports"})
        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 







 





//At Route /getdata/watches
router.get('/watches', async (req, res) => {
    try {

        const products = await Product.find({ productCategory: "watches"})        


        res.json({
            success: true,
            total: products.length,
            products: products
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 





module.exports = router