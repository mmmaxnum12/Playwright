import { test, Page, Locator } from '@playwright/test'

export class LoginPage {
    readonly page: Page;
    readonly userNameLocator: Locator;
    readonly passwordLocator: Locator;
    readonly loginBtnLocator: Locator;

    constructor(page: Page) {
        this.page = page;
        this.userNameLocator = this.page.locator('#user-name');
        this.passwordLocator = this.page.locator('#password');
        this.loginBtnLocator = this.page.locator('#login-button')
    }

    async login(username: string, password: string) {
        await this.userNameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.loginBtnLocator.click();
    }
}