import { test } from '@playwright/test';

test('Complete Checkout Flow', async ({ page }) => {

    // Login
    await page.goto('https://automationexercise.com/');

    await page.locator('//a[@href="/login"]').click();

    await page.locator('//input[@data-qa="login-email"]').fill('neetu1779763359477@gmail.com');

    await page.locator('//input[@data-qa="login-password"]').fill('pwd12345');

    await page.getByRole('button', { name: 'Login' }).click();

//
// Add product to cart
await page.locator('(//a[contains(text(),"Add to cart")])[1]').click();

// Wait for popup
await page.waitForTimeout(2000);

// Click View Cart from popup
await page.getByRole('link', { name: 'View Cart' }).click();

// Proceed to checkout
await page.locator('//a[contains(text(),"Proceed To Checkout")]').click();

await page.locator('//a[contains(text(),"Proceed To Checkout")]').click({ force: true });

await page.waitForLoadState('load');

await page.getByRole('link', { name: 'View Cart' }).click();

await page.waitForLoadState('load');

await page.locator('//a[contains(text(),"Proceed To Checkout")]').click({ force: true });


/*
    // Add product to cart
    await page.locator('(//a[contains(text(),"Products")])[1]').click();

    await page.locator('(//a[contains(text(),"Add to cart")])[1]').click();

    await page.getByRole('link', { name: 'View Cart' }).click();

    // Proceed to checkout
    await page.getByRole('link', { name: 'Proceed To Checkout' }).click();
*/
    // Verify address details
    let address = await page.locator('#address_delivery').textContent();

    if(address.length > 0){

        console.log('Address details displayed');

    }
    else{

        console.log('Address details missing');

    }

    // Place order
    await page.locator('//textarea[@name="message"]').fill('Please deliver fast');

    await page.getByRole('link', { name: 'Place Order' }).click();

    // Enter payment details
    await page.locator('//input[@name="name_on_card"]').fill('Nirav');

    await page.locator('//input[@name="card_number"]').fill('1234567890123456');

    await page.locator('//input[@name="cvc"]').fill('123');

    await page.locator('//input[@name="expiry_month"]').fill('12');

    await page.locator('//input[@name="expiry_year"]').fill('2030');

    // Confirm order
    await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();

    // Validation - Order placed successfully
    let successMsg = await page.locator('//p[contains(text(),"Congratulations")]').textContent();

    if(successMsg.includes('Congratulations')){

        console.log('Order placed successfully');

    }
    else{

        console.log('Order placement failed');

    }

    // Confirmation message displayed
    console.log(successMsg);

});

/*
// Add product to cart
await page.locator('(//a[contains(text(),"Add to cart")])[1]').click();

// Wait for popup
await page.waitForTimeout(2000);

// Click View Cart from popup
await page.getByRole('link', { name: 'View Cart' }).click();

// Proceed to checkout
await page.locator('//a[contains(text(),"Proceed To Checkout")]').click();

await page.locator('//a[contains(text(),"Proceed To Checkout")]').click({ force: true });

await page.waitForLoadState('load');

await page.getByRole('link', { name: 'View Cart' }).click();

await page.waitForLoadState('load');

await page.locator('//a[contains(text(),"Proceed To Checkout")]').click({ force: true });
*/