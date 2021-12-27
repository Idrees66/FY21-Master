const express = require('express')
require('dotenv').config({ path: './config/.env' })
const connectDB = require('./config/mongoDb')

//getting Routes
const getScrapingDataRoute = require('./routes/getScrapingData')
const getDataRoute = require('./routes/getData')
const orderRoute = require('./routes/order')
const orderCompletedRoute = require('./routes/orderCompleted')
const userRoute = require('./routes/user')
const productRoute = require('./routes/product')
const deleteProductRoute = require('./routes/delete/onlineProducts')



const app = express()

connectDB();//connect database


app.use(express.json())




//Routes
app.use('/scraping', getScrapingDataRoute)
app.use('/getdata', getDataRoute)
app.use('/order', orderRoute)
app.use('/ordercompleted', orderCompletedRoute)
app.use('/users', userRoute)
app.use('/create', productRoute)
app.use('/delete/onlineproduct', deleteProductRoute)




process.on('unhandledRejection', error => {
    // Will print "unhandledRejection err is not defined"
    console.log('unhandledRejection', error.message);
});




// server static assets if in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))  // set static folder 
    //returning frontend for any route other than api 
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build',
            'index.html'));
    });
}



app.listen(process.env.PORT || 5000, () => {
    console.log('server started listening at port 5000')
})
