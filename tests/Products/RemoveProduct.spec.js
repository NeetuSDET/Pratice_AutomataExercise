import { test, expect } from '@playwright/test';
import { CartRemovePage } from '../../pages/CartRemovePage.js';

test('Remove Product from Cart', async ({ page }) => {
    const cartRemovePage = new CartRemovePage(page);

    await cartRemovePage.navigateToProducts('https://automationexercise.com/products');
    await cartRemovePage.addFirstProductToCart();
    await cartRemovePage.openCart();
    // console.log('Before remove count: ' + await cartRemovePage.cartProductRows.count());
    await cartRemovePage.removeProduct();
    await expect(page.locator('#submit-btn')).toBeVisible();
    await expect(page.locator('.loading-spinner')).toBeHidden();
    await expect(page.locator('#username')).toBeEnabled();
    await expect(page.locator('#submit-action')).toBeDisabled();

});








    // await expect(cartRemovePage.cartProductRows).toHaveCount(0);
    // await expect(cartRemovePage.emptyCartMessage).toBeVisible();
    // console.log('After remove count: ' + await cartRemovePage.cartProductRows.count());



// import { test, expect } from '@playwright/test';

// test('Remove Product from Cart', async ({ page }) => {

//     // Open products page
//     await page.goto('https://automationexercise.com/products');

//     // Add first product (using force click to bypass Google Ads overlays if present)
//     await page.locator('(//a[contains(text(),"Add to cart")])[1]').click({ force: true });

//     // Open cart
//     await page.getByRole('link', { name: 'View Cart' }).click();

//     // Define locators for tracking the product rows and the empty cart message
//     const cartProducts = page.locator('//tr[contains(@id,"product")]');
//     const emptyCartMessage = page.locator('//b[text()="Cart is empty!"]');

//     // --- OPTIONAL LOGGING ---
//     // Count product before removing (Should be 1)
//     console.log('Before remove count: ' + await cartProducts.count());


//     // --- ACTION: Remove Product ---
//     // Click remove/delete button
//     await page.locator('.cart_quantity_delete').click();


//     // --- VALIDATION: Product removed successfully & Cart updated correctly ---
    
//     // 1. Playwright will automatically retry until the product row count becomes 0
//     await expect(cartProducts).toHaveCount(0);

//     // 2. Playwright will automatically wait until the "Cart is empty!" banner is visible
//     await expect(emptyCartMessage).toBeVisible();

    
//     // --- OPTIONAL LOGGING ---
//     // Count product after removing (Should be 0)
//     console.log('After remove count: ' + await cartProducts.count());
// });