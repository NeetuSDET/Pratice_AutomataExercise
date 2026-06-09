import { test as base } from './login.js'
import { SearchProductPage } from '../pages/SearchProductPage.js'
import {ContactUsPage} from '../pages/ContactUsPage.js' 
import { E2EPurchasePage } from '../pages/E2EPurchasePage.js';

export const test = base.extend({
    searchProductPage: async ({ loginpage }, use) => {
        const obj = new SearchProductPage(loginpage)
        await use(obj)
    },
    contactUsPage: async ({ loginpage }, use) => {
        const obj = new ContactUsPage(loginpage)
        await use(obj)
    }
    ,
    // e2ePurchasePage: async ({ loginpage }, use) => {
    //     const obj = new E2EPurchasePage(loginpage);
    //     await use(obj);
    // }
})
