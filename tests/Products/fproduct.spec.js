import {test} from '../../fixture/ekart.js'
import searchProductData from '../../testdata/searchProduct.json'

test('pro',async({searchProductPage})=>{
    await searchProductPage.launch(searchProductData.url)
    await searchProductPage.searchProduct()
    await searchProductPage.verifySearchResult()
    await searchProductPage.addProductToCart()
    await searchProductPage.clickViewCart()
    await searchProductPage.verifyCartProduct()
    await searchProductPage.verifyPriceAndQuantity()

}) 