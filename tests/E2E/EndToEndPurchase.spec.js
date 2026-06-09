import { test } from '@playwright/test';
import { E2EPurchasePage } from '../../pages/E2EPurchasePage.js';
import cardData from '../../testdata/card_details.json';

test('End To End Purchase Flow', async ({ page }) => {

    const purchase = new E2EPurchasePage(page);

    const email = 'neetu' + Date.now() + '@gmail.com';

    await purchase.launch();

    await purchase.registerUser(email);

    await purchase.searchProduct();

    await purchase.addProductsToCart();

    await purchase.checkout();

    await purchase.enterPayment(cardData);

    await purchase.verifyOrderSuccess();

    await purchase.logoutUser();
});

// import { test, expect } from '@playwright/test';
// import login_details from '../../testdata/login.json';
// import card_details from '../../testdata/card_details.json';

// test('End-to-End Purchase Flow', async ({ page }) => {

//     let email = 'neetu' + Date.now() + '@gmail.com';

//     // --- STEP 1: Register New User ---
//     await page.goto('https://automationexercise.com/');
//     await page.locator('//a[@href="/login"]').click();
//     await page.getByPlaceholder('Name').fill('neetu');
//     await page.locator('//input[@data-qa="signup-email"]').fill(email);
//     await page.getByRole('button', { name: 'Signup' }).click();

//     await page.locator('#id_gender1').click();
//     await page.locator('#password').fill('pwd12345');
//     await page.locator('#days').selectOption('9');
//     await page.locator('#months').selectOption('3');
//     await page.locator('#years').selectOption('2000');
//     await page.locator('#first_name').fill('Nirav');
//     await page.locator('#last_name').fill('Yadav');
//     await page.locator('#company').fill('A Company');
//     await page.locator('#address1').fill('JSS Madison');
//     await page.locator('#address2').fill('Near Wholefood');
//     await page.locator('#country').selectOption('India');
//     await page.locator('#state').fill('Maharashtra');
//     await page.locator('#city').fill('Pune');
//     await page.locator('#zipcode').fill('400000');
//     await page.locator('#mobile_number').fill('9876543212');
    
//     await page.getByRole('button', { name: 'Create Account' }).click();
//     await page.getByRole('link', { name: 'Continue' }).click();
//     console.log('User registered successfully');


//     // --- STEP 2: Search Product ---
//     // Added force: true to product link clicks due to known ad-overlays on this site
//     await page.locator('(//a[contains(text(),"Products")])[1]').click({ force: true });
//     await page.locator('#search_product').fill('Tshirt');
//     await page.locator('#submit_search').click();

//     // Assertion: Verify search result title is correct
//     const searchTitle = page.locator('.title');
//     await expect(searchTitle).toContainText('Searched Products');


//     // --- STEP 3: Add Multiple Products to Cart ---
//     await page.locator('(//a[contains(text(),"Add to cart")])[1]').click({ force: true });
//     await page.getByRole('button', { name: 'Continue Shopping' }).click();
//     await page.locator('(//a[contains(text(),"Add to cart")])[3]').click({ force: true });
//     await page.getByRole('link', { name: 'View Cart' }).click();

//     // Assertion: Verify multiple products exist in the cart table
//     const cartProductRows = page.locator('//tr[contains(@id,"product")]');
//     await expect(cartProductRows).toHaveCount(2); 


//     // --- STEP 4: Proceed to Checkout ---
//     await page.locator('//a[contains(text(),"Proceed To Checkout")]').click();

//     // Assertion: Verify delivery address card is visible and populated
//     const deliveryAddress = page.locator('#address_delivery');
//     await expect(deliveryAddress).toBeVisible();
//     await expect(deliveryAddress).not.toBeEmpty();

//     await page.locator('//textarea[@name="message"]').fill('Please deliver fast');
//     await page.locator('//a[contains(text(),"Place Order")]').click();


//     // --- STEP 5: Enter Payment Details ---
//     await page.locator('//input[@name="name_on_card"]').fill('Nirav Yadav');
//     await page.locator('//input[@name="card_number"]').fill('1234567890123456');
//     await page.locator('//input[@name="cvc"]').fill('123');
//     await page.locator('//input[@name="expiry_month"]').fill('12');
//     await page.locator('//input[@name="expiry_year"]').fill('2030');
//     await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();


//     // --- STEP 6: Verify Order Success ---
//     const successMsg = page.locator('//p[contains(text(),"Congratulations")]');
    
//     // Assertion: Checks that the success message banner appears
//     await expect(successMsg).toBeVisible();
//     await expect(successMsg).toContainText('Congratulations');


//     // --- STEP 7: Logout & Verify Redirection ---
//     await page.locator('//a[@href="/logout"]').click();

//     // Assertion: Verify the URL has transitioned back to the login page route
//     await expect(page).toHaveURL(/.*login/);
//     console.log('Logout successful');
// });