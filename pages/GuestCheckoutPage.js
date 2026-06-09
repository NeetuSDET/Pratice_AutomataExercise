import { expect } from '@playwright/test';

export class GuestCheckoutPage {

  constructor(page) {
    this.page = page;

    this.addToCartBtn = page.locator('(//a[contains(text(),"Add to cart")])[1]');
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
    this.proceedCheckoutBtn = page.locator('//a[contains(text(),"Proceed To Checkout")]');

    this.loginRegisterLink = page.locator('//u[contains(text(),"Register / Login")]');
  }

  async openProductsPage() {
    await this.page.goto('https://automationexercise.com/products');
  }

  async addProductToCart() {
    await this.addToCartBtn.click({ force: true });
  }

  async openCart() {
    await this.viewCartLink.click();
  }

  async proceedToCheckout() {
    await this.proceedCheckoutBtn.click();
  }

  async verifyLoginRegisterPopup() {
    await expect(this.loginRegisterLink).toBeVisible();
    await expect(this.loginRegisterLink).toContainText('Register / Login');
    console.log('Register / Login link displayed');
  }

  async clickRegisterLogin() {
    await this.loginRegisterLink.click();
  }

  async verifyRedirectedToLoginPage() {
    await expect(this.page).toHaveURL(/.*login/);
    console.log('Successfully redirected to login/signup page');
  }
}