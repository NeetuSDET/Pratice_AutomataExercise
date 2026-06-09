export class CartRemovePage {
 
    constructor(page) {
        this.page = page;
        this.firstAddToCartButton = page.locator('(//a[contains(text(),"Add to cart")])[1]');
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' });
        this.deleteProductButton = page.locator('.cart_quantity_delete');
        this.cartProductRows = page.locator('//tr[contains(@id,"product")]');
        this.emptyCartMessage = page.locator('//b[text()="Cart is empty!"]');
    }

    async navigateToProducts(url) {
        await this.page.goto(url);
    }

    async addFirstProductToCart() {
        // await this.firstAddToCartButton.click({ force: true });
        await this.firstAddToCartButton.click({ force: true });
    }

    async openCart() {
        await this.viewCartLink.click();
    }

    async removeProduct() {
        await this.deleteProductButton.click();
    }
}