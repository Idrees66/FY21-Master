const OrderCompleted = require('../models/OrderCompleted')

const orderCompleted = async (req, res, next) => {


    try {

        


        next()
    } catch (error) {
        res.json({
            succes: false, 
            msg: "error in completing order"
        })
    }
    
   

    
}


module.exports = { orderCompleted }