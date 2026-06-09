import { test, expect } from '@playwright/test';

test('Verify Brand Filtering', async ({ page }) => {

    await page.goto('https://automationexercise.com/products');

    // Click on the Polo brand link
    await page.locator('//a[contains(@href,"/brand_products/Polo")]').click();

    // --- VALIDATION: Correct brand page opened ---
    const pageTitle = page.locator('.title');
    
    // Automatically waits and asserts that the text contains "Polo"
    await expect(pageTitle).toContainText('Polo');


    // --- VALIDATION: Products are displayed ---
    const productItems = page.locator('.features_items .product-image-wrapper');

    // Asserts that there is at least 1 (greater than 0) product item visible on the page
    await expect(productItems).not.toHaveCount(0);
    
    // Optional: If you want to log the exact number of products found
    console.log(`Number of Polo products displayed: ${await productItems.count()}`);
});