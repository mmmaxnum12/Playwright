import { test, expect } from '@playwright/test'


test('Verify empty book' ,async ({page}) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('id=userName', 'Mmmaxnum');
    await page.fill('#password', 'Maxnum#123456');
    await page.click('#login');
})