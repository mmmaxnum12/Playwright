import { test, expect } from '@playwright/test';

test('Login with valida username and password should redirect to profile page' ,async ({page}) => {
    await page.goto('https://playwright.dev/');
    await page.locator('//*[@class="navbar__item dropdown dropdown--hoverable"]').hover()
    await page.click('//a[text()="Python"]')
})