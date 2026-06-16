// import { test } from '@playwright/test';
// import {RegistrationPage} from '../../pages/RegistrationPage.js';
// import registrationData from '../../testdata/registration.json';

// test('registration', async ({ page }) => {

//   const registrationPage = new RegistrationPage(page);

  
/*
  // let email = 'neetu' + Date.now() + '@gmail.com';
  await registrationPage.launch(registrationData.url);
  await registrationPage.clickSignupLogin();
  await registrationPage.enterSignupDetails(registrationData.name,registrationData.email);
  await registrationPage.fillAccountInformation(registrationData.password,registrationData.day,registrationData.month,registrationData.year);
  await registrationPage.fillAddressInformation(registrationData.firstname,registrationData.lastname,registrationData.address,registrationData.country,registrationData.state,registrationData.city,registrationData.zipcode,registrationData.mobile);
  await registrationPage.clickCreateAccount();
  await registrationPage.verifyAccountCreated();
  await registrationPage.clickContinue();
  await registrationPage.verifyUsernameDisplayed(registrationData.name);
  await registrationPage.logout();
  await registrationPage.verifyLogout();
*/
// let user = await registrationPage.enterSignupDetails();

// await registrationPage.fillAccountInformation(registrationData.password,registrationData.day,registrationData.month,registrationData.year);
// await registrationPage.fillAddressInformation(registrationData.firstname,egistrationData.lastname,registrationData.address,registrationData.country,registrationData.state,registrationData.city,registrationData.zipcode,registrationData.mobile);
// await registrationPage.clickCreateAccount();
// await registrationPage.verifyAccountCreated();
// await registrationPage.clickContinue();
// await registrationPage.verifyUsernameDisplayed(user.username);
// });






// import { test } from '@playwright/test';

// test('registration', async ({ page }) => {

//   let username = 'Neetu';
//   let email = 'neetu' + Date.now() + '@gmail.com';
//   // let password = 'pwd@12345';
//   await page.goto('https://automationexercise.com/');
//   await page.locator('//a[@href="/login"]').click();
//   await page.getByPlaceholder('Name').fill(username);
//   // await page.getByPlaceholder('Name').fill('neetu');
//   await page.locator('//input[@data-qa="signup-email"]').fill(email);
//   // await page.locator('//input[@data-qa="signup-email"]').fill('neetu' + Date.now() + '@gmail.com');
//   await page.getByRole('button', { name: 'Signup' }).click();
//   await page.locator('#id_gender2').click();
//   await page.locator('#password').fill('pwd12345');
//   await page.locator('#days').selectOption('2');
//   await page.locator('#months').selectOption('February');
//   await page.locator('#years').selectOption('2010');
//   await page.locator('#first_name').fill('neetu');
//   await page.locator('#last_name').fill('K');
//   await page.locator('#address1').fill('Jayanagar');
//   await page.locator('#country').selectOption('India');
//   await page.locator('#state').fill('Karnataka');
//   await page.locator('#city').fill('Bengaluru');
//   await page.locator('#zipcode').fill('560040');
//   await page.locator('#mobile_number').fill('9123456789');
//   await page.getByRole('button', { name: 'Create Account' }).click();

//   await page.waitForSelector('h2 b');

//   let accountText = await page.locator('h2 b').textContent();
//   accountText = accountText.trim();

//   console.log(accountText);

//   if (accountText === 'ACCOUNT CREATED!') {
//     console.log('Account created successfully');
//   }
  
//   await page.getByRole('link', { name: 'Continue' }).click();
//   let loggedInText = await page.locator('text=Logged in as').textContent();

//   if (loggedInText.includes(username)) {
//     console.log('Username displayed after login');
//   } else {
//     console.log('Username not displayed');
//   }
//   await page.locator('//a[@href="/logout"]').click();
//   let logoutUrl = page.url();
//   if (logoutUrl === 'https://automationexercise.com/login') {
//     console.log('User logged out successfully');
//   } else {
//     console.log('Logout failed');
//   }
// });










// /*

// let username = 'Neetu';
// let email = 'neetu' + Date.now() + '@gmail.com';
// let password = 'Test@123';

// await page.locator('[data-qa="name"]').fill(username);
// await page.locator('[data-qa="signup-email"]').fill(email);
// await page.getByRole('button', { name: 'Signup' }).click();

// // after registration
// await page.getByRole('link', { name: 'Continue' }).click();

// let loggedInText = await page.locator('text=Logged in as').textContent();

// if (loggedInText.includes(username)) {
//   console.log('Username displayed after login');
// } else {
//   console.log('Username not displayed');
// }
//  */
