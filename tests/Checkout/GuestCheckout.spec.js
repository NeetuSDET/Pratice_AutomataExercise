import { test } from '@playwright/test';
import { GuestCheckoutPage } from '../../pages/GuestCheckoutPage.js';

test('Guest Checkout Validation using POM', async ({ page }) => {

  const guestCheckout = new GuestCheckoutPage(page);

  await guestCheckout.openProductsPage();

  await guestCheckout.addProductToCart();

  await guestCheckout.openCart();

  await guestCheckout.proceedToCheckout();

  await guestCheckout.verifyLoginRegisterPopup();

  await guestCheckout.clickRegisterLogin();

  await guestCheckout.verifyRedirectedToLoginPage();
});


// import { test, expect } from '@playwright/test';

// test('Guest Checkout Validation', async ({ page }) => {

//     // Add product to cart without login
//     await page.goto('https://automationexercise.com/products');

//     // Force click added to bypass potential Google Ad overlays common on this site
//     await page.locator('(//a[contains(text(),"Add to cart")])[1]').click({ force: true });

//     // Open cart
//     await page.getByRole('link', { name: 'View Cart' }).click();

//     // Click Proceed to Checkout
//     await page.locator('//a[contains(text(),"Proceed To Checkout")]').click();


//     // --- VALIDATION: Login/Signup modal link is displayed ---
//     const loginRegisterLink = page.locator('//u[contains(text(),"Register / Login")]');
    
//     // Web-first assertion: Automatically waits for the modal element to appear and contain the text
//     await expect(loginRegisterLink).toBeVisible();
//     await expect(loginRegisterLink).toContainText('Register / Login');


//     // Click Register/Login modal link
//     await loginRegisterLink.click();


//     // --- VALIDATION: Redirected to login/signup page ---
//     // Web-first assertion: Tracks the browser window URL asynchronously until it matches the regex pattern
//     await expect(page).toHaveURL(/.*login/);
    
//     console.log('Successfully redirected to login/signup page');
// });