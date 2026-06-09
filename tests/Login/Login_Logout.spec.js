import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage.js';
import { LogoutPage } from '../../pages/LogoutPage.js';
import loginData from '../../testdata/login.json';

// import { random } from '../../utils/random_number.js';

test('Verify existing user can login and logout', async ({ page }) => {

  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  await loginPage.launch(loginData.url);
  await loginPage.clickSignupLogin();
  await loginPage.login(loginData.username, loginData.password);
  await loginPage.verifyLogin();
  await loginPage.verifyHomePage();
  await logoutPage.logout();
  await logoutPage.verifyLogout();
  await logoutPage.verifySessionCleared();

});


// import { test } from '@playwright/test';

// test('Verify existing user can login and logout', async ({ page }) => {

//   await page.goto('https://automationexercise.com/');

//   // Click Signup/Login
//   await page.locator('//a[@href="/login"]').click();

//   await page.locator('//input[@data-qa="signup-email"]').fill('neetu' + Date.now() + '@gmail.com');
  
//   await page.locator('//input[@data-qa="login-email"]')
//     .fill('neetu1779763359477@gmail.com');
//   await page.locator('//input[@data-qa="login-password"]')
//     .fill('pwd12345');

//   // Click Login
//   await page.getByRole('button', { name: 'Login' }).click();

//   // Validation - Successful login
//   let loggedText = await page.locator('text=Logged in as').textContent();

//   if (loggedText.includes('Logged in as')) {
//     console.log('Successful login');
//   } else {
//     console.log('Login failed');
//   }

//   // Validation - Homepage displayed
//   let homeUrl = page.url();

//   if (homeUrl === 'https://automationexercise.com/') {
//     console.log('Homepage displayed successfully');
//   } else {
//     console.log('Homepage not displayed');
//   }

//   // Click Logout
//   await page.locator('//a[@href="/logout"]').click();

//   // Validation - Redirected to login page
//   let logoutUrl = page.url();

//   if (logoutUrl === 'https://automationexercise.com/login') {
//     console.log('Logout successful');
//   } else {
//     console.log('Logout failed');
//   }

//   // Validation - Session cleared
//   let loginButtonVisible = await page.locator('//a[@href="/login"]').isVisible();

//   if (loginButtonVisible) {
//     console.log('Session cleared successfully');
//   } else {
//     console.log('Session not cleared');
//   }

// });