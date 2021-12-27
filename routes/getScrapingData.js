const express = require('express')
const getData = require('../util/getData')
const cheerio = require('cheerio');


console.log("Scraping here")




const router = express.Router();

//1
//At Route /scraping/mens-clothing
router.get('/mens-clothing', async (req, res) => {
    try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/100003070/men-clothing.html"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2,
                }
                products.push(obj) 
                console.log(obj)

            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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




//2
        // const url = "https://www.aliexpress.com/category/100003109/women-clothing.html"
//At Route /getdata/womens-clothing
router.get('/womens-clothing', async (req, res) => {
    try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/100003109/women-clothing.html"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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







//3
        // const url = "https://www.aliexpress.com/category/509/cellphones-telecommunications.html?spm=a2g0o.productlist.103.1.264a443faxzYMD"
//At Route /getdata/phone-telecommunication
router.get('/phone-telecommunication', async (req, res) => {
    try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/509/cellphones-telecommunications.html?spm=a2g0o.productlist.103.1.264a443faxzYMD"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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










//4
        // const url = "https://www.aliexpress.com/category/7/computer-office.html?spm=a2g0o.productlist.104.1.8dd5bbfaFewdf9"
//At Route /getdata/computer-office
router.get('/computer-office', async (req, res) => {
    try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/7/computer-office.html?spm=a2g0o.productlist.104.1.8dd5bbfaFewdf9"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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












//5
        // const url = "https://www.aliexpress.com/category/44/consumer-electronics.html?spm=a2g0o.productlist.105.1.b08d3043hpaxNh"
//At Route /getdata/consumer-electronics
router.get('/consumer-electronics', async (req, res) => {
    try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/44/consumer-electronics.html?spm=a2g0o.productlist.105.1.b08d3043hpaxNh"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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















//6
//    const url = "https://www.aliexpress.com/category/1511/watches.html?spm=a2g0o.productlist.106.2.2a732abekNd6bL&isCates=y"
//At Route /getdata/watches
router.get('/watches', async (req, res) => {
    try {

        // const url = req.body.url
       const url = "https://www.aliexpress.com/category/1511/watches.html?spm=a2g0o.productlist.106.2.2a732abekNd6bL&isCates=y"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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




























//7
    // const url = "https://www.aliexpress.com/category/15/home-garden.html?spm=a2g0o.productlist.0.0.3c5d13ebkzczl6"
//At Route /getdata/home
router.get('/home', async (req, res) => {
    try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/15/home-garden.html?spm=a2g0o.productlist.0.0.3c5d13ebkzczl6"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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



















//8
    // const url = "https://www.aliexpress.com/category/1501/mother-kids.html?spm=a2g0o.productlist.109.2.6d6843deXxboXn"
//At Route /getdata/toys-kids
router.get('/toys-kids', async (req, res) => {
    try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/1501/mother-kids.html?spm=a2g0o.productlist.109.2.6d6843deXxboXn"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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





















//9
    // const url = "https://www.aliexpress.com/category/1524/luggage-bags.html?spm=a2g0o.productlist.108.1.4dcb2dcbQFXMW8"
//At Route /getdata/bags-luggage
router.get('/bags-luggage', async (req, res) => {
    try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/1524/luggage-bags.html?spm=a2g0o.productlist.108.1.4dcb2dcbQFXMW8"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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
























//10
    // const url = "https://www.aliexpress.com/category/66/beauty-health.html"
//At Route /getdata/beauty-health
router.get('/beauty-health', async (req, res) => {

    try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/66/beauty-health.html"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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



























//11
    // const url = "https://www.aliexpress.com/category/18/sports-entertainment.html?spm=a2g0o.productlist.110.1.3a4f6af78TjIkg"
//At Route /getdata/outdoor-sports
router.get('/outdoor-sports', async (req, res) => {

try {

        // const url = req.body.url
        const url = "https://www.aliexpress.com/category/18/sports-entertainment.html?spm=a2g0o.productlist.110.1.3a4f6af78TjIkg"
        // console.log(url)

        const productsHtml = await getData(url)
        // console.log('in route html array', productsHtmlArray)

        //prductsHtmlArray have all products html so we will split it in array of products
        var newstringreplaced = productsHtml.toString().replace(/<a class="_3KNwG _2f4Ho/gi, `fyp87<a class="_3KNwG _2f4Ho`);
        productsHtmlArray = newstringreplaced.split("fyp87");
        // console.log('products array', productsHtmlArray)

        const products = []

        // await console.log(productsHtmlArray)
        await productsHtmlArray.forEach(productHtml => {
            $ = cheerio.load(productHtml)

            let productName = $('div[class="KbYAZ Vgu6S"] > h1').text().trim();
            let productUrl = $('a[class="_3KNwG _2f4Ho"]').attr('href'); 
            let productImage = $('div[class="_1XDHC gYJvK"] img').attr('src');
            let productPrice = $('div[class="_13_ga _37W_B"] ').text();
            let productRating = $('span[class="ZwoRt"] ').text();

            // console.log(productHtml)
            let price = productPrice.split("$")[1]


            if (parseFloat(price) < 13) {
                obj = {
                    productName,
                    productUrl: "https://www.aliexpress.com" + productUrl,
                    productImage,
                    productRating,
                    productPrice: parseInt(price)+2        }
                products.push(obj)


            }

        });

        // await MensClothing.deleteMany({});
        
        // products.forEach( async(product) => {
        //     //Now we will save the each products in mongo db
        //     await MensClothing.create(product);

        // });





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