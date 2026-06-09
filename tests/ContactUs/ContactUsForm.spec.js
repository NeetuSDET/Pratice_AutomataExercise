import { test } from '@playwright/test';
import { ContactUsPage } from '../../pages/ContactUsPage';
import contactData from '../../testdata/contactinfo.json' assert { type: 'json' };

test('Contact Us Form Submission', async ({ page }) => {

    const contactUs = new ContactUsPage(page);

    await contactUs.openApplication();

    await contactUs.clickContactUs();

    await contactUs.fillContactForm(contactData);

    await contactUs.uploadFile();

    await contactUs.submitForm();

    await contactUs.verifySuccessMessage();
});

// import { test, expect } from '@playwright/test';

// test('Contact Us Form Submission', async ({ page }) => {

//     // Open Contact Us page
//     await page.goto('https://automationexercise.com/');
//     await page.locator('//a[contains(text(),"Contact us")]').click({ force: true });

//     // Fill all fields
//     await page.locator('//input[@name="name"]').fill('Nirav');
//     await page.locator('//input[@name="email"]').fill('nirav@gmail.com');
//     await page.locator('//input[@name="subject"]').fill('Testing');
//     await page.locator('#message').fill('This is automation testing');

//     // Upload file
//     await page.locator('//input[@name="upload_file"]').setInputFiles('/Users/rajnishkhatri/Downloads/file2.txt');

//     // --- SETUP DIALOG LISTENER ---
//     page.once('dialog', async dialog => {
//         console.log('Dialog opened with message:', dialog.message());
//         await dialog.accept(); 
//     });

//     // --- SUBMIT AND WAIT FOR REFRESH ---
//     // We wrap the click and the page reload navigation together
//     await Promise.all([
//         page.waitForNavigation({ waitUntil: 'networkidle' }), 
//         page.locator('//input[@name="submit"]').click({ force: true })
//     ]);

//     // --- VALIDATION: Success message displayed ---
//     const successAlert = page.locator('//div[@class="status alert alert-success"]');

//     // Now that the page has finished reloading, we check the text directly
//     await expect(successAlert).toBeVisible();
//     await expect(successAlert).toContainText('Success');

//     console.log('Test execution verified successfully.');
// });
