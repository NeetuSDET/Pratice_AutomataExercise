import { test } from '@playwright/test';
import { InvalidLoginPage } from '../../pages/InvalidLoginPage.js';
import invalidLoginData from '../../testData/invalidLogin.json';

test('Invalid Login', async ({ page }) => {

  const invalidLoginPage = new InvalidLoginPage(page);

  await invalidLoginPage.launch(invalidLoginData.url);
  await invalidLoginPage.clickSignupLogin();
  await invalidLoginPage.enterInvalidCredentials(invalidLoginData.email,invalidLoginData.password);
  await invalidLoginPage.clickLogin();
  await invalidLoginPage.verifyErrorMessage();
  await invalidLoginPage.verifyUserRemainsOnLoginPage();

});




// import { test } from '@playwright/test';

// test('Invalid Login', async ({ page }) => {

//     // Navigate to login page
//     await page.goto('https://automationexercise.com/');

//     await page.locator('//a[@href="/login"]').click();

//     // Enter invalid credentials
//     await page.locator('//input[@data-qa="login-email"]').fill('wrong@gmail.com');

//     await page.locator('//input[@data-qa="login-password"]').fill('wrong123');

//     // Click Login
//     await page.getByRole('button', { name: 'Login' }).click();

//     // Validation - Error message displayed
//     let errorMsg = await page.locator('//p[contains(text(),"incorrect")]').textContent();

//     if(errorMsg.includes('incorrect')){

//         console.log('Error message displayed');

//     }
//     else{

//         console.log('Error message not displayed');

//     }

//     // Validation - User remains on login page
//     let url = page.url();

//     if(url.includes('/login')){

//         console.log('User remains on login page');

//     }
//     else{

//         console.log('User redirected to another page');

//     }

// });