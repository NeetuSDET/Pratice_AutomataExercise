import { expect } from '@playwright/test';
import contactData from '../testdata/contactinfo.json'

export class ContactUsPage {

    constructor(page) {
        this.page = page;

        this.contactUsLink = page.locator('//a[contains(text(),"Contact us")]');

        this.nameInput = page.locator('//input[@name="name"]');
        this.emailInput = page.locator('//input[@name="email"]');
        this.subjectInput = page.locator('//input[@name="subject"]');
        this.messageInput = page.locator('#message');

        this.uploadFileInput = page.locator('//input[@name="upload_file"]');
        this.submitButton = page.locator('//input[@name="submit"]');

        this.successMessage = page.locator('//div[@class="status alert alert-success"]');
    }

    async openApplication() {
        await this.page.goto('https://automationexercise.com/');
    }

    async clickContactUs() {
        await this.contactUsLink.click({ force: true });
    }

    // async fillContactForm(contactData) {
    async fillContactForm() {
        await this.nameInput.fill(contactData.name);
        await this.emailInput.fill(contactData.email);
        await this.subjectInput.fill(contactData.subject);
        await this.messageInput.fill(contactData.message);
    }

    async uploadFile() {
        await this.uploadFileInput.setInputFiles(
            '/Users/rajnishkhatri/Downloads/file2.txt'
        );
    }
    async submitForm() {

        this.page.once('dialog', async dialog => {
            console.log('Dialog Message: ' + dialog.message());
            await dialog.accept();
        });
    
        await this.submitButton.click({ force: true });
    
        await this.page.waitForLoadState('load');
    }

    // async submitForm() {

    //     this.page.once('dialog', async dialog => {
    //         console.log('Dialog Message: ' + dialog.message());
    //         await dialog.accept();
    //     });

    //     await Promise.all([
    //         this.page.waitForNavigation({ waitUntil: 'networkidle' }),
    //         this.submitButton.click({ force: true })
    //     ]);
    // }

    async verifySuccessMessage() {

        const successText = await this.successMessage.textContent();
    
        if (successText.includes('Success')) {
            console.log('Contact Us form submitted successfully');
        } else {
            console.log('Success message not displayed');
        }
    }
}