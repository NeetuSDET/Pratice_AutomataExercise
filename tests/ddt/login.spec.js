import { test } from '@playwright/test'
import login_details from '../../testdata/login.json'

test('',async ({page}) => {
    await page.goto(login_details.url)
})