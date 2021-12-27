const express = require('express')



const router = express.Router();



// const MensClothing = require('../../models/Mens-clothing')
// const WomensClothing = require('../../models/Womens-clothing')
// const BeautyHealth = require('../../models/Beauty-health')
// const ComputerOffice = require('../../models/Computer-office')
// const ConsumerElectronics = require('../../models/Consumer-electronics')
// const Home = require('../../models/Home')
// const OutdoorSports = require('../../models/Outdoor-sports')
// const Phone = require('../../models/Phone-telecommunication')
// const ToysKids = require('../../models/Toys-kids')
// const Watches = require('../../models/Watches')
// const BagsLuggage = require('../../models/Bags-luggage')

const Product = require('../../models/Product')





//At Route /delete/onlineproduct/mens-clothing/:id
router.delete('/mens-clothing/:id', async (req, res) => {
    try {

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "mens-clothing"})
        


        res.json({
            success: true,
            msg: "Online Product Deleted"
        })
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            error: error
        })
    }

})


 







//2

//for deleting product in mongoDb
//At Route /delete/onlineproduct/womens-clothing
router.delete('/womens-clothing/:id', async (req, res) => {
    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "womens-clothing"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }
   

})







//3

//for deleting product in mongoDb
//At Route /delete/onlineproduct/phone-telecommunication
router.delete('/phone-telecommunication/:id', async (req, res) => {
    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "phone-telecommunication"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }
   

})










//4

//for deleting product in mongoDb
//At Route /delete/onlineproduct/computer-office
router.delete('/computer-office/:id', async (req, res) => {
   
    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "computer-office"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }


})












//5

//for deleting product in mongoDb
//At Route /delete/onlineproduct/consumer-electronics
router.delete('/consumer-electronics/:id', async (req, res) => {
    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "consumer-electronics"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }

})















//6

//for deleting product in mongoDb
//At Route /delete/onlineproduct/watches
router.delete('/watches/:id', async (req, res) => {
    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "watches"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }
   

})




























//7

//for deleting product in mongoDb
//At Route /delete/onlineproduct/home
router.delete('/home/:id', async (req, res) => {
    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "home"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }
   
})



















//8

//for deleting product in mongoDb
//At Route /delete/onlineproduct/toys-kids
router.delete('/toys-kids/:id', async (req, res) => {
    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "toys-kids"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }
   

})





















//9

//for deleting product in mongoDb
//At Route /delete/onlineproduct/bags-luggage
router.delete('/bags-luggage/:id', async (req, res) => {
    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "bags-luggage"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }
   

})
























//10

//for deleting product in mongoDb
//At Route /delete/onlineproduct/beauty-health
router.delete('/beauty-health/:id', async (req, res) => {

    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "beauty-health"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }
   

})



























//11

//for deleting product in mongoDb
//At Route /delete/onlineproduct/outdoor-sports
router.delete('/outdoor-sports/:id', async (req, res) => {
    try {

       

        const products = await Product.findOneAndDelete({ _id: req.params.id, productCategory: "outdoor-sports"})


       res.json({
           success: true,
           msg: "Online Product Deleted"
       })
   } catch (error) {
       res.json({
           success: false,
           error
       })
   }
   
})























module.exports = router