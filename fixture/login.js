import { test as base } from '@playwright/test'
import {LoginPage} from '../pages/LoginPage.js'//in {}this is class name of LoginPage.js

export let test=base.extend({
    loginpage:async({page},use)=>{
        let sign=new LoginPage(page)//class name of LoginPage.js
        await sign.launch()
        await sign.clickSignupLogin()
        await sign.login()

        await use(page)

    }
})
