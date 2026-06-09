import { test } from '@playwright/test';
import { AddMultipleProductsPage } from '../../pages/AddMultipleProductsPage.js';

test('Add Multiple Products to Cart', async ({ page }) => {

  const addProductsPage = new AddMultipleProductsPage(page);

  await addProductsPage.launch();

  await addProductsPage.addFirstProduct();

  await addProductsPage.continueShopping();

  await addProductsPage.addSecondProduct();

  await addProductsPage.clickViewCart();

  await addProductsPage.verifyProductsDisplayed();

  await addProductsPage.verifyTotalPrice();

});


// import { test, expect } from '@playwright/test';

// test('Add Multiple Products to Cart', async ({ page }) => {

//     // Open products page
//     await page.goto('https://automationexercise.com/products');

//     // Add first product
//     await page.locator('(//a[contains(text(),"Add to cart")])[1]').click();

//     // Continue shopping
//     await page.getByRole('button', { name: 'Continue Shopping' }).click();

//     // Add second product
//     await page.locator('(//a[contains(text(),"Add to cart")])[3]').click();

//     // Open cart
//     await page.getByRole('link', { name: 'View Cart' }).click();

//     // --- VALIDATION: Both products displayed ---
//     const product1 = page.locator('(//td[@class="cart_description"]//a)[1]');
//     const product2 = page.locator('(//td[@class="cart_description"]//a)[2]');

//     // Web-first assertions: Ensures elements are visible and contain text
//     await expect(product1).toBeVisible();
//     await expect(product1).not.toBeEmpty();
    
//     await expect(product2).toBeVisible();
//     await expect(product2).not.toBeEmpty();


//     // --- VALIDATION: Correct total price ---
//     const total1 = page.locator('(//p[@class="cart_total_price"])[1]');
//     const total2 = page.locator('(//p[@class="cart_total_price"])[2]');

//     // Ensures total price elements are visible and have content
//     await expect(total1).toBeVisible();
//     await expect(total1).not.toBeEmpty();

//     await expect(total2).toBeVisible();
//     await expect(total2).not.toBeEmpty();

//     // Optional: Print the actual values to the console for your debugging
//     console.log('First Product Total: ' + await total1.textContent());
//     console.log('Second Product Total: ' + await total2.textContent());
// });