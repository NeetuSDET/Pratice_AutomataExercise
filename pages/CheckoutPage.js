import { expect } from '@playwright/test';

export class CheckoutPage {

  constructor(page) {
    this.page = page;

    this.loginLink = page.locator('//a[@href="/login"]');
    this.email = page.locator('//input[@data-qa="login-email"]');
    this.password = page.locator('//input[@data-qa="login-password"]');
    this.loginBtn = page.getByRole('button', { name: 'Login' });

    this.loggedInText = page.locator('text=Logged in as');

    this.addToCart = page.locator('(//a[contains(text(),"Add to cart")])[1]');
    this.viewCart = page.locator('#cartModal a:has-text("View Cart")');

    this.proceedCheckout = page.locator('//a[contains(text(),"Proceed To Checkout")]');
    this.address = page.locator('#address_delivery');

    this.message = page.locator('//textarea[@name="message"]');
    this.placeOrder = page.getByRole('link', { name: 'Place Order' });

    this.nameOnCard = page.locator('//input[@name="name_on_card"]');
    this.cardNumber = page.locator('//input[@name="card_number"]');
    this.cvc = page.locator('//input[@name="cvc"]');
    this.expiryMonth = page.locator('//input[@name="expiry_month"]');
    this.expiryYear = page.locator('//input[@name="expiry_year"]');

    this.payConfirm = page.getByRole('button', { name: 'Pay and Confirm Order' });
    this.successMsg = page.locator('//p[contains(text(),"Congratulations")]');
  }

  async openUrl() {
    await this.page.goto('https://automationexercise.com/');
  }

  async login(email, password) {
    await this.loginLink.click();
    await this.email.fill(email);
    await this.password.fill(password);
    await this.loginBtn.click();

    await expect(this.loggedInText).toBeVisible();
    console.log('Login successful');
  }

  async addProduct() {
    await this.addToCart.click({ force: true });
    await this.viewCart.click();
  }

  async proceedToCheckout() {
    await this.proceedCheckout.click();

    await expect(this.address).toBeVisible();
    await expect(this.address).not.toBeEmpty();

    console.log('Address details displayed');
  }

  async placeOrderWithMessage(msg) {
    await this.message.fill(msg);
    await this.placeOrder.click();
  }

  async enterPaymentDetails(nameoncard,cardnumber,cvc,expirymonth,expiryyear) {
    await this.nameOnCard.fill(nameoncard);
    await this.cardNumber.fill(cardnumber);
    await this.cvc.fill(cvc);
    await this.expiryMonth.fill(expirymonth);
    await this.expiryYear.fill(expiryyear);
  }

  async confirmOrder() {
    await this.payConfirm.click();

    await expect(this.successMsg).toBeVisible();
    await expect(this.successMsg).toContainText('Congratulations');

    console.log('Success Message confirmed: ' + await this.successMsg.textContent());
  }
}