import { test } from '@playwright/test';
import { SearchProductPage } from '../../pages/SearchProductPage.js';
import searchProductData from '../../testdata/searchProduct.json'

test('Search Product and Add to Cart', async ({page }) => {

  const searchProductPage = new SearchProductPage(page);

  await searchProductPage.launch(searchProductData.url);
  await searchProductPage.searchProduct(searchProductData.productName);
  await searchProductPage.verifySearchResult();
  await searchProductPage.addProductToCart();
  await searchProductPage.clickViewCart();
  await searchProductPage.verifyCartProduct();
  await searchProductPage.verifyPriceAndQuantity();

});






// import { test, expect } from '@playwright/test';

// test('Search Product and Add to Cart', async ({ page }) => {

//     // Open Products page
//     await page.goto('https://automationexercise.com/products');

//     // Search product name
//     await page.locator('#search_product').fill('Tshirt');
//     await page.locator('#submit_search').click();


//     // --- VALIDATION: Product appears in search results ---
//     const searchResultProduct = page.locator('(//div[@class="productinfo text-center"]//p)[1]');
    
//     // Automatically waits, retrieves text, and ignores case differences (Tshirt vs t-shirt/T-Shirt)
//     await expect(searchResultProduct).toContainText('tshirt', { ignoreCase: true });


//     // Add product to cart (using force: true to bypass potential Google Ads overlays)
//     await page.locator('(//a[contains(text(),"Add to cart")])[1]').click({ force: true });

//     // Click View Cart
//     await page.getByRole('link', { name: 'View Cart' }).click();


//     // --- VALIDATION: Correct item added to cart ---
//     const cartProduct = page.locator('.cart_description h4');
    
//     // Asserts that the cart item heading element is visible and contains actual text
//     await expect(cartProduct).toBeVisible();
//     await expect(cartProduct).not.toBeEmpty();


//     // --- VALIDATION: Quantity and price displayed correctly ---
//     const price = page.locator('.cart_price');
//     const quantity = page.locator('.cart_quantity button');

//     // Asserts both elements exist, are visible, and are populated with layout content
//     await expect(price).toBeVisible();
//     await expect(price).not.toBeEmpty();

//     await expect(quantity).toBeVisible();
//     await expect(quantity).not.toBeEmpty();

//     // Optional: Kept your debug logging using modern textContent retrieval
//     console.log('Product Price: ' + await price.textContent());
//     console.log('Product Quantity: ' + await quantity.textContent());
// });