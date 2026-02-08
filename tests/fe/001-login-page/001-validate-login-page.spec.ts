import { test, expect } from '@playwright/test'
import { LoginPage } from '../../../fixtures/fe/login-page';

test.describe('Validate login page and logout', () => {
    test('TC001: Login with valid username and password', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginPage = new LoginPage(page);
        await loginPage.login('standard_user', 'secret_sauce')
        await expect(page).toHaveURL(/inventory/);
        await expect(page.getByText('Products')).toBeVisible();
    })

    test('TC002: Login with invalid username and password', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginPage = new LoginPage(page);
        await loginPage.login('standard_user1', 'secret_sauce1')
        await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible
    })

    test('TC003: Verify Login page should show an error message if log in without a username', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginPage = new LoginPage(page);
        await loginPage.login('', 'secret_sauce');
        await expect(page.getByText('Epic sadface: Username is required')).toBeVisible
    })

    test('TC004: Verify Login page should show an error message if log in without a password', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginPage = new LoginPage(page);
        await loginPage.login('secret_sauce', '')
        await expect(page.getByText('Epic sadface: Password is required')).toBeVisible
    })

    test('TC005: Should logged in successfully with valid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginPage = new LoginPage(page);
        await loginPage.login('', '')
        await expect(page.getByText('Epic sadface: Username is required')).toBeVisible
    })

    test('TC006: Should logged in fails with an error message when using invalid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginPage = new LoginPage(page);
        await loginPage.login('locked_out_user', 'secret_sauce')
        await expect(page.getByText('Epic sadface: Sorry, this user has been locked out.')).toBeVisible
    })
})
