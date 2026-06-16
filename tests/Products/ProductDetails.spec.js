import { test, expect } from '@playwright/test';

test('Verify Product Details', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // await page.route('**/*google*/**', route => route.abort());
  // await page.route('**/*adsbygoogle*/**', route => route.abort());

  
  // await page.locator('text=Close').click({ force: true });

  // Click Products (using force click here too just in case an ad blocks it)
  await page.locator('//a[@href="/products"]').click({ force: true });

  // Click first View Product using Playwright's native locator and a forced click
  await page.locator('(//a[text()="View Product"])[1]').click();

  // Define locators
  const productName = page.locator('//div[@class="product-information"]/h2');
  const price = page.locator('//span[contains(text(),"Rs")]');

  // Web-first assertions (automatically handles any loading delays after the click)
  await expect(productName).toBeVisible();
  await expect(productName).not.toBeEmpty();
  
  await expect(price).toBeVisible();

  console.log('Product Name: ' + await productName.textContent());
});