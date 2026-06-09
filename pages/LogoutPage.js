export class LogoutPage {

    constructor(page) {
      this.page = page;
      this.logoutLink = page.locator('//a[@href="/logout"]');
      this.signupLoginLink = page.locator('//a[@href="/login"]');
    }
  
    async logout() {
      await this.logoutLink.click();
    }
  
    async verifyLogout() {
      let url = this.page.url();
  
      if (url === 'https://automationexercise.com/login') {
        console.log('Logout successful');
      }
    }
  
    async verifySessionCleared() {
      let visible = await this.signupLoginLink.isVisible();
  
      if (visible) {
        console.log('Session cleared successfully');
      }
    }
  }