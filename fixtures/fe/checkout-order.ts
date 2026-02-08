import { Page, Locator } from '@playwright/test'

export class BillPayment  {
    readonly page: Page;
    readonly fristName: Locator;
    readonly lastName: Locator;
    readonly zipCode: Locator;
    readonly continueBtn: Locator;
    readonly cancelBtn: Locator;
   
  
    constructor(page: Page) {
        this.page = page;
        this.fristName = this.page.locator('#first-name');
        this.lastName = this.page.locator('#last-name');
        this.zipCode = this.page.locator('#postal-code');
        this.continueBtn = this.page.locator('#continue');   
        this.cancelBtn = this.page.locator('#cancel');
    }

    //add products
    async addressBilling(fisrtName: string, lastName: string, zipCode: number){
        await this.fristName.fill('firstName');
        await this.lastName.fill('lastName');
        await this.zipCode.fill('zipCode');
    }
    //click continue
    async continue(){
        await this.continueBtn.click();
    }
    //cancel
    async cancel(){
        await this.cancelBtn.click();
    }
   

}