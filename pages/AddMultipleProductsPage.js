import { expect } from '@playwright/test';

export class AddMultipleProductsPage {

  constructor(page) {
    this.page = page;

    this.continueShoppingBtn = page.getByRole('button', { name: 'Continue Shopping' });
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });

    this.product1 = page.locator('(//td[@class="cart_description"]//a)[1]');
    this.product2 = page.locator('(//td[@class="cart_description"]//a)[2]');

    this.total1 = page.locator('(//p[@class="cart_total_price"])[1]');
    this.total2 = page.locator('(//p[@class="cart_total_price"])[2]');
  }

  async launch() {
    await this.page.goto('https://automationexercise.com/products');
  }

  async addFirstProduct() {
    await this.page.locator('(//a[contains(text(),"Add to cart")])[1]').click({ force: true });
  }

  async continueShopping() {
    await this.continueShoppingBtn.click();
  }

  async addSecondProduct() {
    await this.page.locator('(//a[contains(text(),"Add to cart")])[3]').click({ force: true });
  }

  async clickViewCart() {
    await this.viewCartLink.click();
  }

  async verifyProductsDisplayed() {
    await expect(this.product1).toBeVisible();
    await expect(this.product1).not.toBeEmpty();

    await expect(this.product2).toBeVisible();
    await expect(this.product2).not.toBeEmpty();

    console.log('Both products displayed in cart');
  }

  async verifyTotalPrice() {
    await expect(this.total1).toBeVisible();
    await expect(this.total1).not.toBeEmpty();

    await expect(this.total2).toBeVisible();
    await expect(this.total2).not.toBeEmpty();

    console.log('First Product Total: ' + await this.total1.textContent());
    console.log('Second Product Total: ' + await this.total2.textContent());
  }
}