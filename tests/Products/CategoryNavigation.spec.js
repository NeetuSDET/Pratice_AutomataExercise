import { test, expect } from '@playwright/test';

test('Verify Category Navigation - Women Dress', async ({ page }) => {

    await page.goto('https://automationexercise.com/');

    // Click on the Women category accordion
    await page.locator('//a[@href="#Women"]').click();

    // Click on the Dress sub-category link
    await page.locator('//a[contains(@href,"/category_products/1")]').click();

    // --- VALIDATION: Correct category page opened ---
    const pageTitle = page.locator('.title');
    
    // Automatically waits and asserts that the title text contains "Women"
    await expect(pageTitle).toContainText('Women');


    // --- VALIDATION: Products are displayed ---
    const productItems = page.locator('.features_items .product-image-wrapper');

    // Asserts that the product count is greater than 0 (not empty)
    await expect(productItems).not.toHaveCount(0);
    
    // Optional: Log the count to the console for visibility during execution
    console.log(`Number of Women Dress products displayed: ${await productItems.count()}`);
});