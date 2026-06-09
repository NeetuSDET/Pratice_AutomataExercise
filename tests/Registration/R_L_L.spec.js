import { test } from '@playwright/test';
import { RegistrationPage } from '../../pages/RegistrationPage.js';
import { LoginPage } from '../../pages/LoginPage.js';
import { LogoutPage } from '../../pages/LogoutPage.js';
import registrationData from '../../testdata/registration.json';

test('E2E registration login logout', async ({ page }) => {

  const registrationPage = new RegistrationPage(page);
  const loginPage = new LoginPage(page);
  const logoutPage = new LogoutPage(page);

  await registrationPage.launch(registrationData.url);
  await registrationPage.clickSignupLogin();

  let user = await registrationPage.enterSignupDetails();

  await registrationPage.fillAccountInformation(
    registrationData.password,
    registrationData.day,
    registrationData.month,
    registrationData.year
  );

  await registrationPage.fillAddressInformation(
    registrationData.firstname,
    registrationData.lastname,
    registrationData.address,
    registrationData.country,
    registrationData.state,
    registrationData.city,
    registrationData.zipcode,
    registrationData.mobile
  );

  await registrationPage.clickCreateAccount();
  await registrationPage.verifyAccountCreated();
  await registrationPage.clickContinue();

  await registrationPage.verifyUsernameDisplayed(user.username);

  await logoutPage.logout();

  await loginPage.clickSignupLogin();
  await loginPage.login(user.useremail, registrationData.password);
  await loginPage.verifyLogin();

  await logoutPage.logout();
  await logoutPage.verifyLogout();
});