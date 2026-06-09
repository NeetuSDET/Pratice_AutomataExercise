import { test } from '@playwright/test';
import { CheckoutPage } from '../../pages/CheckoutPage.js';
import paymentData from '../../testdata/card_details.json'
test('Complete Checkout Flow using POM', async ({ page }) => {

  const checkout = new CheckoutPage(page);

  await checkout.openUrl();

  await checkout.login(
    'neetu1779763359477@gmail.com',
    'pwd12345'
  );

  await checkout.addProduct();

  await checkout.proceedToCheckout();

  await checkout.placeOrderWithMessage('Please deliver fast');

  await checkout.enterPaymentDetails(paymentData.nameoncard,paymentData.cardnumber,paymentData.cvc,paymentData.expirymonth,paymentData.expiryyear);

  await checkout.confirmOrder();
});

// import { test, expect } from '@playwright/test';

// test('Complete Checkout Flow', async ({ page }) => {

//   await page.goto('https://automationexercise.com/');

//   // --- Login ---
//   await page.locator('//a[@href="/login"]').click();
//   await page.locator('//input[@data-qa="login-email"]').fill('neetu1779763359477@gmail.com');
//   await page.locator('//input[@data-qa="login-password"]').fill('pwd12345');
//   await page.getByRole('button', { name: 'Login' }).click();

//   // Assertion: Replaces manual waitForSelector. Automatically ensures login succeeded.
//   await expect(page.locator('text=Logged in as')).toBeVisible();
//   console.log('Login successful');

//   // --- Add product to cart ---
//   // Added force: true to bypass potential Google Ad overlays frequent on this site
//   await page.locator('(//a[contains(text(),"Add to cart")])[1]').click({ force: true });

//   // Click View Cart from popup modal
//   await page.locator('#cartModal a:has-text("View Cart")').click();

//   // --- Proceed to checkout ---
//   await page.locator('//a[contains(text(),"Proceed To Checkout")]').click();


//   // --- VALIDATION: Address details displayed ---
//   const addressDelivery = page.locator('#address_delivery');
  
//   // Asserts that the delivery container is visible and has populated text
//   await expect(addressDelivery).toBeVisible();
//   await expect(addressDelivery).not.toBeEmpty();


//   // --- Place order ---
//   await page.locator('//textarea[@name="message"]').fill('Please deliver fast');
//   await page.getByRole('link', { name: 'Place Order' }).click();

//   // --- Enter payment details ---
//   await page.locator('//input[@name="name_on_card"]').fill('neetu');
//   await page.locator('//input[@name="card_number"]').fill('1234567890123456');
//   await page.locator('//input[@name="cvc"]').fill('123');
//   await page.locator('//input[@name="expiry_month"]').fill('12');
//   await page.locator('//input[@name="expiry_year"]').fill('2030');

//   // Confirm order
//   await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();


//   // --- VALIDATION: Order placed successfully ---
//   const successMsg = page.locator('//p[contains(text(),"Congratulations")]');

//   // Playwright polls the page automatically until this banner appears and reads the string
//   await expect(successMsg).toBeVisible();
//   await expect(successMsg).toContainText('Congratulations');

//   // Optional: Debug logging using clean text content extraction after the test confirms success
//   console.log('Success Message confirmed: ' + await successMsg.textContent());
// });