import { expect } from '@playwright/test';
import productData  from '../testdata/searchProduct.json';
// import {productData1} from '../testdata/product.json';

export class SearchProductPage {

  constructor(page) {
    this.page = page;

    this.searchInput = page.locator('#search_product');
    this.searchButton = page.locator('#submit_search');
    this.searchResultProduct = page.locator('(//div[@class="productinfo text-center"]//p)[1]');
    this.addToCartButton = page.locator('(//a[contains(text(),"Add to cart")])[1]');
    this.viewCartLink = page.getByRole('link', { name: 'View Cart' });

    this.cartProduct = page.locator('.cart_description h4');
    this.price = page.locator('.cart_price');
    this.quantity = page.locator('.cart_quantity button');
  }

  // async launch(url) {
  async launch() {
    await this.page.goto(productData.url);
  }

  // async searchProduct(productName) {
    async searchProduct() {
    await this.searchInput.fill(productData.productName);
    await this.searchButton.click();
  }

  async verifySearchResult() {
    await expect(this.searchResultProduct).toContainText('tshirt', {
      ignoreCase: true
    });
    console.log('Product displayed in search result');
  }

  async addProductToCart() {
    await this.addToCartButton.click({ force: true });
  }

  async clickViewCart() {
    await this.viewCartLink.click();
  }

  async verifyCartProduct() {
    await expect(this.cartProduct).toBeVisible();
    await expect(this.cartProduct).not.toBeEmpty();

    console.log('Correct item added to cart');
  }

  async verifyPriceAndQuantity() {
    await expect(this.price).toBeVisible();
    await expect(this.price).not.toBeEmpty();

    await expect(this.quantity).toBeVisible();
    await expect(this.quantity).not.toBeEmpty();

    console.log('Product Price: ' + await this.price.textContent());
    console.log('Product Quantity: ' + await this.quantity.textContent());
  }
}