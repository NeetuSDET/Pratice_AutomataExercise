// import { test } from '@playwright/test';
// import { SessionPersistencePage } from '../../pages/SessionPersistencePage.js';
// import loginData from '../../testdata/login.json' assert { type: 'json' };

// test('15. Session Persistence Scenario using POM', async ({ page }) => {

//     const sessionPage = new SessionPersistencePage(page);
//     await sessionPage.openApplication();
//     const productName = await sessionPage.addProductWithoutLogin();
//     await sessionPage.login(loginData.email, loginData.password);
//     await sessionPage.openCart();
//     await sessionPage.verifyProductRetained(productName);
// });











// const { test, expect } = require('@playwright/test');

// test('15. Session Persistence Scenario', async ({ page }) => {

//     // Open website
//     await page.goto('https://automationexercise.com/');

//     // Open products page (using force click to bypass potential Google Ad overlays)
//     await page.locator('a[href="/products"]').click({ force: true });

//     // Wait for products page layout to settle
//     await page.waitForLoadState('domcontentloaded');

//     // Get first product name
//     let productName = await page.locator('.productinfo p').first().textContent();
//     productName = productName.trim();
//     console.log('Selected Product:', productName);

//     // Hover on first product
//     await page.locator('.product-image-wrapper').first().hover();

//     // Click Add to cart
//     await page.locator('(//a[contains(text(),"Add to cart")])[1]').click({ force: true });

//     // Wait for cart modal
//     await page.locator('#cartModal').waitFor({ state: 'visible' });

//     // Click Continue Shopping
//     await page.locator('button:has-text("Continue Shopping")').click();

//     // Open login page
//     await page.locator('a[href="/login"]').click({ force: true });

//     // Login
//     await page.locator('input[data-qa="login-email"]').fill('YOUR_EMAIL@gmail.com');
//     await page.locator('input[data-qa="login-password"]').fill('YOUR_PASSWORD');
//     await page.locator('button[data-qa="login-button"]').click();

//     // Open cart (Playwright auto-waits for navigation/login state to process here)
//     await page.locator('a[href="/view_cart"]').click({ force: true });


//     // --- VALIDATION: Product retained after login ---
//     const cartDescription = page.locator('.cart_description');

//     // Web-first assertion: Playwright will wait up to 5 seconds for the cart 
//     // container description to dynamically load and match your target product name.
//     await expect(cartDescription).toContainText(productName);
// });