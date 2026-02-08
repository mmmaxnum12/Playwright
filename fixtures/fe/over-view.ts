import { Page, Locator } from '@playwright/test'

export class ConfirmOrders  {
    readonly page: Page;
    readonly finish: Locator;
    readonly cancelOrder: Locator;
  
    constructor(page: Page) {
        this.page = page;
        this.finish = this.page.locator('#finish');
        this.cancelOrder = this.page.locator('#cancel');

    }

    //confirmed
    async confirmedOrder(){
        await this.finish.click();
    }
    //cancel order
    async cancelPayOrder(){
        await this.cancelOrder.click();
    }

}