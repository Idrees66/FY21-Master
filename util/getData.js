const puppeteer = require('puppeteer');

// const url =  'https://www.aliexpress.com/category/100003109/women-clothing.html';
 getData = async (url) => {

    // console.log(url)
    const browser = await puppeteer.launch( {  args: ['--no-sandbox'] } )
    const page = await browser.newPage()

    // Configure the navigation timeout
    await page.setDefaultNavigationTimeout(0);

    //goto the given url
    await page.goto( url , { waitUntil: 'domcontentloaded'})

    //goto bottom of  page to get all the products
    await autoScroll(page);
    
    // console.log('getdata triggered')
    
    products = await page.evaluate( () => {
        const productElements = document.querySelectorAll('.JIIxO')
        const productElementsForUrl = document.querySelectorAll('#root > div > div > div.main-content > div.right-menu > div > div.JIIxO > a:nth-child(1)')
        // const productElementsForUrl = document.querySelectorAll('._3KNwG._2f4Ho').forEach(elem => console.log(elem.getAttribute('href')));
        // console.log('productElements', productElementsForUrl);
        
        const productList = []
        
        productElements.forEach( (product) => {
            
            // obj = {
            //     productName: product.innerHTML
            // }
            // console.log(product.innerHTML)
            productList.push(product.innerHTML)
        } )
        
        
        
        return productList
    } )
    urls = await page.evaluate( () => {
        const productElementsForUrl = document.querySelectorAll('#root > div > div > div.main-content > div.right-menu > div > div.JIIxO > a:nth-child(1)')
        // const productElementsForUrl = document.querySelectorAll('._3KNwG._2f4Ho').forEach(elem => console.log(elem.getAttribute('href')));
        console.log('productElements', productElementsForUrl);
        
        
        
        
    } )
    

    
    await page.waitForSelector('.next-btn.next-medium.next-btn-normal.next-pagination-item.next-current')
    
    
    // await console.log(products)
    // await console.log(products.length)


    //close browser after work is done
    await browser.close()
    
    return products
} 


//function defination for autoScroll()
async function autoScroll(page){
    await page.evaluate(async () => {
        await new Promise((resolve, reject) => {
            var totalHeight = 0;
            var distance = 100;
            var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight;
                window.scrollBy(0, distance);
                totalHeight += distance;

                if(totalHeight >= scrollHeight){
                    clearInterval(timer);
                    resolve();
                }
            }, 100);
        });
    });
}


module.exports = getData;