import { test } from '@playwright/test';
import { UpdateQuantityPage } from '../../pages/UpdateQuantityPage.js';

test('Update Quantity in Cart', async ({ page }) => {

    let updateQty = new UpdateQuantityPage(page);
    
    await updateQty.launch();
    await updateQty.openProductDetails();
    await updateQty.updateQuantity('4');
    await updateQty.addToCart();
    await updateQty.openCart();
    await updateQty.verifyQuantity('4');
    await updateQty.verifyTotalAmount('4');

});




// import { test } from '@playwright/test';

// test('Update Quantity in Cart', async ({ page }) => {

//     await page.goto('https://automationexercise.com/products');

//     await page.locator('(//a[contains(text(),"View Product")])[1]').click();

//     // clear not needed
//     await page.locator('#quantity').fill('4');

//     await page.getByRole('button', { name: 'Add to cart' }).click();

//     await page.getByRole('link', { name: 'View Cart' }).click();

//     let quantity = await page.locator('//button[@class="disabled"]').textContent();

//     if(quantity.trim() == '4'){
//         console.log('Quantity updated successfully');
//     }
//     else{
//         console.log('Quantity not updated');
//     }

//     let priceText = await page.locator('.cart_price').textContent();
//     let totalText = await page.locator('.cart_total_price').textContent();

//     let price = Number(priceText.replace('Rs.', '').trim());
//     let total = Number(totalText.replace('Rs.', '').trim());

//     if(total == price * 4){
//         console.log('Total amount recalculated correctly');
//     }
//     else{
//         console.log('Total amount wrong');
//     }
// });

// /*
// await page.locator('#quantity').click();

// await page.keyboard.press('Control+A');

// await page.keyboard.press('Backspace');

// await page.locator('#quantity').type('4');

// await page.keyboard.press('Meta+A');


// await page.locator('(//a[contains(text(),"View Product")])[1]').click();

// await page.locator('#quantity').click();

// await page.keyboard.press('Meta+A');

// await page.keyboard.press('Backspace');

// await page.locator('#quantity').type('4');
//  */