import { test, expect } from '@playwright/test';

test('Login with valida username and password should redirect to profile page' ,async ({page}) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('id=userName', 'Mmmaxnum123');
    await page.fill('id=password', 'Maxnum#1123456');
    await page.click('id=login');
    await expect(page.locator('id=userName-value')).toHaveText('Mmmaxnum123')
})