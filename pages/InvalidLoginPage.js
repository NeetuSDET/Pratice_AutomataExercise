export class InvalidLoginPage {

    constructor(page) {
      this.page = page;
  
      this.signupLoginLink = page.locator('//a[@href="/login"]');
      this.emailInput = page.locator('//input[@data-qa="login-email"]');
      this.passwordInput = page.locator('//input[@data-qa="login-password"]');
      this.loginButton = page.getByRole('button', { name: 'Login' });
      this.errorMessage = page.locator('//p[contains(text(),"incorrect")]');
    }
  
    async launch(url) {
      await this.page.goto(url);
    }
  
    async clickSignupLogin() {
      await this.signupLoginLink.click();
    }
  
    async enterInvalidCredentials(email, password) {
      await this.emailInput.fill(email);
      await this.passwordInput.fill(password);
    }
  
    async clickLogin() {
      await this.loginButton.click();
    }
  
    async verifyErrorMessage() {
      let errorMsg = await this.errorMessage.textContent();
  
      if (errorMsg.includes('incorrect')) {
        console.log('Error message displayed');
      } else {
        console.log('Error message not displayed');
      }
    }
  
    async verifyUserRemainsOnLoginPage() {
      let url = this.page.url();
  
      if (url.includes('/login')) {
        console.log('User remains on login page');
      } else {
        console.log('User redirected to another page');
      }
    }
  }