import { expect } from '@playwright/test';

export class SessionPersistencePage {

    constructor(page) {
        this.page = page;

        this.productsLink = page.locator('a[href="/products"]');
        this.firstProductName = page.locator('.productinfo p').first();
        this.firstProductCard = page.locator('.product-image-wrapper').first();
        this.addToCartBtn = page.locator('(//a[contains(text(),"Add to cart")])[1]');

        this.cartModal = page.locator('#cartModal');
        this.continueShoppingBtn = page.locator('button:has-text("Continue Shopping")');

        this.loginLink = page.locator('a[href="/login"]');
        this.emailInput = page.locator('input[data-qa="login-email"]');
        this.passwordInput = page.locator('input[data-qa="login-password"]');
        this.loginBtn = page.locator('button[data-qa="login-button"]');

        this.cartLink = page.locator('a[href="/view_cart"]');
        this.cartDescription = page.locator('.cart_description');
    }

    async openApplication() {
        await this.page.goto('https://automationexercise.com/');
    }

    async addProductWithoutLogin() {
        await this.productsLink.click({ force: true });
        await this.page.waitForLoadState('domcontentloaded');

        let productName = await this.firstProductName.textContent();
        productName = productName.trim();

        console.log('Selected Product: ' + productName);

        await this.firstProductCard.hover();
        await this.addToCartBtn.click({ force: true });

        await this.cartModal.waitFor({ state: 'visible' });

        await this.continueShoppingBtn.click();

        return productName;
    }

    async login(email, password) {
        await this.loginLink.click({ force: true });

        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginBtn.click();

        console.log('Login successful');
    }

    async openCart() {
        await this.cartLink.click({ force: true });
    }

    async verifyProductRetained(productName) {
        await expect(this.cartDescription).toContainText(productName);

        console.log('Product retained after login: ' + productName);
    }
}