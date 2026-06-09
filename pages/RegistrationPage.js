import { register } from 'module';
import { random } from '../utils/random_number.js'
import registrationData from '../testdata/registration.json'
export class RegistrationPage {

  constructor(page) {

    // let email = 'neetu' + Date.now() + '@gmail.com';
    this.page = page;

    this.signupLoginLink = page.locator('//a[@href="/login"]');
    this.nameInput = page.getByPlaceholder('Name');
    this.signupEmailInput = page.locator('//input[@data-qa="signup-email"]');
    this.signupButton = page.getByRole('button', { name: 'Signup' });

    this.genderFemale = page.locator('#id_gender2');
    this.passwordInput = page.locator('#password');
    this.dayDropdown = page.locator('#days');
    this.monthDropdown = page.locator('#months');
    this.yearDropdown = page.locator('#years');

    this.firstNameInput = page.locator('#first_name');
    this.lastNameInput = page.locator('#last_name');
    this.addressInput = page.locator('#address1');
    this.countryDropdown = page.locator('#country');
    this.stateInput = page.locator('#state');
    this.cityInput = page.locator('#city');
    this.zipcodeInput = page.locator('#zipcode');
    this.mobileInput = page.locator('#mobile_number');

    this.createAccountButton = page.getByRole('button', { name: 'Create Account' });
    this.accountCreatedText = page.locator('h2 b');
    this.continueButton = page.getByRole('link', { name: 'Continue' });
    this.loggedInText = page.locator('text=Logged in as');
    this.logoutLink = page.locator('//a[@href="/logout"]');
  }

  async launch(url) {
    await this.page.goto(url);
  }

  async clickSignupLogin() {
    await this.signupLoginLink.click();
  }

  //   async enterSignupDetails(name, email) {
  //     await this.nameInput.fill(name);
  //     await this.signupEmailInput.fill(email);
  //     await this.signupButton.click();
  // }

  // async enterSignupDetails() {
  //   let random_number = random()
  //   let username = registrationData.name + random_number//
  //   await this.nameInput.fill(username)
  //   let useremail = registrationData.name + random_number + '@gmail.com';
  //   await this.signupEmailInput.fill(useremail);
  //   // await this.password.fill(registration.password)//from  json
  //   await this.signupButton.click()
  // }

  async enterSignupDetails() {
    let random_number = random();
  
    let username = registrationData.name + random_number;
    let useremail = registrationData.name + random_number + '@gmail.com';
  
    await this.nameInput.fill(username);
    await this.signupEmailInput.fill(useremail);
    await this.signupButton.click();
  
    return { username, useremail };
  }

  async fillAccountInformation(password, day, month, year) {
    await this.genderFemale.click();
    await this.passwordInput.fill(password);
    await this.dayDropdown.selectOption(day);
    await this.monthDropdown.selectOption(month);
    await this.yearDropdown.selectOption(year);
  }

  async fillAddressInformation(firstname, lastname, address, country, state, city, zipcode, mobile) {
    await this.firstNameInput.fill(firstname);
    await this.lastNameInput.fill(lastname);
    await this.addressInput.fill(address);
    await this.countryDropdown.selectOption(country);
    await this.stateInput.fill(state);
    await this.cityInput.fill(city);
    await this.zipcodeInput.fill(zipcode);
    await this.mobileInput.fill(mobile);
  }

  async clickCreateAccount() {
    await this.createAccountButton.click();
  }

  async verifyAccountCreated() {
    await this.page.waitForSelector('h2 b');

    let accountText = await this.accountCreatedText.textContent();
    accountText = accountText.trim();

    console.log(accountText);

    if (accountText === 'ACCOUNT CREATED!') {
      console.log('Account created successfully');
    }
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  async verifyUsernameDisplayed(username) {
    let loggedInText = await this.loggedInText.textContent();

    if (loggedInText.includes(username)) {
      console.log('Username displayed after login');
    } else {
      console.log('Username not displayed');
    }
  }

  async logout() {
    await this.logoutLink.click();
  }

  async verifyLogout() {
    let logoutUrl = this.page.url();

    if (logoutUrl === 'https://automationexercise.com/login') {
      console.log('User logged out successfully');
    } else {
      console.log('Logout failed');
    }
  }
}