import loginData from '../testdata/login.json';

// import { random } from '../utils/random_number.js'
export class LoginPage {

    constructor(page) {
      this.page = page;
      this.signupLoginLink = page.locator('//a[@href="/login"]');
      this.emailInput = page.locator('//input[@data-qa="login-email"]');
      this.passwordInput = page.locator('//input[@data-qa="login-password"]');
      this.loginButton = page.getByRole('button', { name: 'Login' });
      this.loggedInText = page.locator('text=Logged in as');
    }
  
    async launch() {//////
      await this.page.goto(loginData.url);//////
    }
  
    async clickSignupLogin() {
      await this.signupLoginLink.click();
    }
  
    async login() {
      await this.emailInput.fill(loginData.username);
      await this.passwordInput.fill(loginData.password);
      await this.loginButton.click();
    }


  //   async login() {
  //     let random_number = random()
  //     let usernameEmail =loginData.username +random_number
  //     await this.emailInput.fill(usernameEmail)
  //     await this.passwordInput.fill(loginData.password)//fro  json
  //     await this.loginButton.click()

  // }
  
    async verifyLogin() {
      let text = await this.loggedInText.textContent();
  
      if (text.includes('Logged in as')) {
        console.log('Successful login');
      }
    }
  
    async verifyHomePage() {
      let url = this.page.url();
  
      if (url === 'https://automationexercise.com/') {
        console.log('Homepage displayed successfully');
      }
    }
  }