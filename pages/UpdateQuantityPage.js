export class UpdateQuantityPage {

    constructor(page) {
        this.page = page;

        this.viewProduct = page.locator('(//a[contains(text(),"View Product")])[1]');
        this.quantityBox = page.locator('#quantity');
        this.addToCartBtn = page.getByRole('button', { name: 'Add to cart' });
        this.viewCartLink = page.getByRole('link', { name: 'View Cart' });

        this.cartQuantity = page.locator('//button[@class="disabled"]');
        this.price = page.locator('.cart_price');
        this.totalPrice = page.locator('.cart_total_price');
    }

    async launch() {
        await this.page.goto('https://automationexercise.com/products');
    }

    async openProductDetails() {
        await this.viewProduct.click();
    }

    async updateQuantity(quantity) {
        await this.quantityBox.waitFor();
        await this.quantityBox.fill(quantity.toString());
    }

    async addToCart() {
        await this.addToCartBtn.click();
    }

    async openCart() {
        await this.viewCartLink.click();
    }

    async verifyQuantity(expectedQty) {

        let actualQty = await this.cartQuantity.textContent();

        if (actualQty.trim() === expectedQty) {
            console.log('Quantity updated successfully');
        }
        else {
            console.log('Quantity not updated');
        }
    }

    async verifyTotalAmount(expectedQty) {

        let priceText = await this.price.textContent();
        let totalText = await this.totalPrice.textContent();

        let price = Number(
            priceText.replace('Rs.', '').trim()
        );

        let total = Number(
            totalText.replace('Rs.', '').trim()
        );

        if (total === price * Number(expectedQty)) {
            console.log('Total amount recalculated correctly');
        }
        else {
            console.log('Total amount wrong');
        }
    }
}