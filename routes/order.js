const express = require('express')
const Order = require('../models/Order')
const OrderCompleted = require('../models/OrderCompleted')
const Product = require('../models/Product')
const ProductEarning = require('../models/ProductEarning')

const router = express.Router();


//At Route /order/create/:id
router.post('/create', async (req, res) => {

    try {

        const obj = {
            userId: req.params.id,
            userName: req.body.userName,
            products: req.body.products,
            address: req.body.address,
        }

        const order = await Order.create(req.body)


        res.json({
            success: true,
            msg: "order created"
        })
    } catch (error) {
        res.json({
            success: false,
            error
        })
    }

})




//At Route /order/all
router.get('/all', async (req, res) => {

    try {

        const order = await Order.find({});
        // console.log("order ",order)
        res.json({
            success: true,
            totalOrders: order.length,
            order
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            error
        })
    }

})






//At Route /order/check/:id
router.get('/check/:id', async (req, res) => {

    try {

        const order = await Order.find({ userId: req.params.id })

        res.json({
            success: true,
            totalOrders: order.length,
            order
        })
    } catch (error) {
        console.log(error)
        res.json({
            success: false,
            error
        })
    }

})


//At     GET    /order/get/status-values
router.get('/get/status-values', (req, res) => {
    res.json(Order.schema.path('status').enumValues);
})


//At     PUT    /order/update/order-status
router.put('/update/order-status', async (req, res) => {

    try {
        const response = await Order.findOneAndUpdate({ _id: req.body.orderId }, { status: req.body.status }, { new: true });

        // console.log( req.body.orderId  )
        res.json({
            msg: "order status updated",
            response
        })
    } catch (error) {
        console.log(error)
    }
})





//At     DELETE    /order/delete/:orderId
router.delete('/delete/:orderId', async (req, res) => {

    try {
        const order = await Order.findByIdAndDelete(req.params.orderId);


        // const orderCompleted = await OrderCompleted.findOne({ _id: `${response._id}` })


        // if(orderCompleted){
        //     const updated = await OrderCompleted.findOneAndUpdate( {_id: `${orderCompleted._id}` }, { $inc: {totalSold: +1, price: `${response.price}`} }, {new: true })
        //     const 

        //     // console.log(updated)

        // }
        // if(!orderCompleted){
        //     let obj = {
        //         productName: response.product,
        //         price: response.price, 
        //         productUrl: response.productUrl,
        //         image: response.image,
        //         totalSold: 1
        //     }
        //     OrderCompleted.create(response)
        // }
        
        
        // console.log(order)
        if(order){
            const products = order.products
            products.map(async (product) => {
                
                //Increase total sold quantity of Product
                await Product.findOneAndUpdate( {_id: product.productId }, { $inc: {totalSold: +1} }, {new: true })
                
                //increase earning of product
                const productEarning = await ProductEarning.find({ productId : `${product.productId}` })
                if(productEarning.length != 0){
                    console.log("inside if ")
                    const updated = await ProductEarning.findOneAndUpdate( { productId : product.productId  }, { $inc: { productPrice: +product.productPrice } }, {new: true })
                    console.log("update inside if ", updated)
                }else{
                    const obj = {
                        productName: product.productName,
                        productUrl: product.productUrl,
                        productImage: product.productImage,
                        productPrice: product.productPrice,
                        productId: product.productId,
                        totalSold: product.productSold
                    }
                    const createdProductEarning = await ProductEarning.create(obj)
                    
                }

            })
            
            



            const objCompletedOrder = {
                    userName: order.userName,
                    userId : order.userId,
                    phoneNo: order.phoneNo,
                    deliveryMethod: order.deliveryMethod,
                    products : order.products,
                    address : order.address      
            }
            const orderCompleted = OrderCompleted.create(objCompletedOrder)
        }


        // console.log( req.body.orderId  )
        res.json({
            msg: "Order Deleted"
        })
    } catch (error) {
        console.log(error)
    }
})




module.exports = router;