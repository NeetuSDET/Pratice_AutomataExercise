import { expect } from '@playwright/test';
import cardData from '../testdata/card_details.json'

export class E2EPurchasePage {

    constructor(page) {

        this.page = page;

        this.loginLink = page.locator('//a[@href="/login"]');

        this.name = page.getByPlaceholder('Name');
        this.signupEmail = page.locator('//input[@data-qa="signup-email"]');
        this.signupBtn = page.getByRole('button', { name: 'Signup' });

        this.gender = page.locator('#id_gender1');
        this.password = page.locator('#password');

        this.days = page.locator('#days');
        this.months = page.locator('#months');
        this.years = page.locator('#years');

        this.firstName = page.locator('#first_name');
        this.lastName = page.locator('#last_name');
        this.company = page.locator('#company');
        this.address1 = page.locator('#address1');
        this.address2 = page.locator('#address2');
        this.country = page.locator('#country');
        this.state = page.locator('#state');
        this.city = page.locator('#city');
        this.zipcode = page.locator('#zipcode');
        this.mobile = page.locator('#mobile_number');

        this.createAccount = page.getByRole('button', { name: 'Create Account' });
        this.continueBtn = page.getByRole('link', { name: 'Continue' });

        this.productsLink = page.locator('(//a[contains(text(),"Products")])[1]');
        this.searchBox = page.locator('#search_product');
        this.searchBtn = page.locator('#submit_search');

        this.searchTitle = page.locator('.title');

        this.addProduct1 = page.locator('(//a[contains(text(),"Add to cart")])[1]');
        this.addProduct2 = page.locator('(//a[contains(text(),"Add to cart")])[3]');

        this.continueShopping = page.getByRole('button', { name: 'Continue Shopping' });
        this.viewCart = page.getByRole('link', { name: 'View Cart' });

        this.cartRows = page.locator('//tr[contains(@id,"product")]');

        this.checkoutBtn = page.locator('//a[contains(text(),"Proceed To Checkout")]');
        this.deliveryAddress = page.locator('#address_delivery');

        this.message = page.locator('//textarea[@name="message"]');
        this.placeOrder = page.locator('//a[contains(text(),"Place Order")]');

        this.nameOnCard = page.locator('//input[@name="name_on_card"]');
        this.cardNumber = page.locator('//input[@name="card_number"]');
        this.cvc = page.locator('//input[@name="cvc"]');
        this.expiryMonth = page.locator('//input[@name="expiry_month"]');
        this.expiryYear = page.locator('//input[@name="expiry_year"]');

        this.payButton = page.getByRole('button', { name: 'Pay and Confirm Order' });

        this.successMsg = page.locator('//p[contains(text(),"Congratulations")]');

        this.logout = page.locator('//a[@href="/logout"]');
    }

    async launch() {
        await this.page.goto('https://automationexercise.com/');
    }

    async registerUser(email) {

        await this.loginLink.click();

        await this.name.fill('neetu');
        await this.signupEmail.fill(email);
        await this.signupBtn.click();

        await this.gender.click();
        await this.password.fill('pwd12345');

        await this.days.selectOption('9');
        await this.months.selectOption('3');
        await this.years.selectOption('2000');

        await this.firstName.fill('Neetu');
        await this.lastName.fill('Khatri');

        await this.company.fill('ABC Company');
        await this.address1.fill('Chicago');
        await this.address2.fill('Illinois');

        await this.country.selectOption('India');

        await this.state.fill('Maharashtra');
        await this.city.fill('Pune');
        await this.zipcode.fill('400000');
        await this.mobile.fill('9876543212');

        await this.createAccount.click();
        await this.continueBtn.click();

        console.log('User registered successfully');
    }

    async searchProduct() {

        await this.productsLink.click({ force: true });

        await this.searchBox.fill('Tshirt');
        await this.searchBtn.click();

        await expect(this.searchTitle).toContainText('Searched Products');
    }

    async addProductsToCart() {

        await this.addProduct1.click({ force: true });

        await this.continueShopping.click();

        await this.addProduct2.click({ force: true });

        await this.viewCart.click();

        await expect(this.cartRows).toHaveCount(2);
    }

    async checkout() {

        await this.checkoutBtn.click();

        await expect(this.deliveryAddress).toBeVisible();

        await this.message.fill('Please deliver fast');

        await this.placeOrder.click();
    }

    async enterPayment(cardData) {

        await this.nameOnCard.fill(cardData.nameoncard);
        await this.cardNumber.fill(cardData.cardnumber);
        await this.cvc.fill(cardData.cvc);
        await this.expiryMonth.fill(cardData.expirymonth);
        await this.expiryYear.fill(cardData.expiryyear);

        await this.payButton.click();
    }

    async verifyOrderSuccess() {

        await expect(this.successMsg).toBeVisible();

        console.log('Order placed successfully');
    }

    async logoutUser() {

        await this.logout.click();

        await expect(this.page).toHaveURL(/.*login/);

        console.log('Logout successful');
    }
}