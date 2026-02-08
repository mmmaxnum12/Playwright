import { Page, Locator } from '@playwright/test'

export class ItemsProduct {
    readonly page: Page;
    readonly backPack: Locator;
    readonly bikeLight: Locator;
    readonly tShirtBack: Locator;
    readonly tShirtRed: Locator;
    readonly fleeceJacket: Locator;
    readonly onesie: Locator;
    readonly removeBackPack: Locator;
    readonly removeBikeLight: Locator;
    readonly removeTShirtBack: Locator;
    readonly removeTShirtRed: Locator;
    readonly removeFleeceJacket: Locator;
    readonly removeOnesie: Locator;
    readonly filterList: Locator;
    readonly filterListAZ: Locator;
    readonly filterListZA: Locator;
    readonly filterListLohi: Locator;
    readonly filterListHilo: Locator;
    readonly checkOutOrder: Locator;
    readonly cartBtn: Locator;



    

  
    constructor(page: Page) {
        this.page = page;
        this.backPack = this.page.locator('#add-to-cart-sauce-labs-backpack');
        this.bikeLight = this.page.locator('#add-to-cart-sauce-labs-bike-light');
        this.tShirtBack = this.page.locator('#add-to-cart-sauce-labs-bolt-t-shirt');
        this.tShirtRed = this.page.locator('[id="add-to-cart-test.allthethings()-t-shirt-(red)"]');       
        this.fleeceJacket = this.page.locator('#add-to-cart-sauce-labs-fleece-jacket');
        this.onesie = this.page.locator('#add-to-cart-sauce-labs-onesie');
        this.removeBackPack = this.page.locator('#remove-sauce-labs-backpack');
        this.removeBikeLight = this.page.locator('#remove-sauce-labs-bike-light');
        this.removeTShirtBack = this.page.locator('#remove-sauce-labs-bolt-t-shirt');
        this.removeTShirtRed = this.page.locator('[id="remove-test.allthethings()-t-shirt-(red)"]');
        this.removeFleeceJacket = this.page.locator('#remove-sauce-labs-fleece-jacket');
        this.removeOnesie = this.page.locator('#remove-sauce-labs-onesie');
        this.filterList = this.page.locator('[data-test="product-sort-container"]');
        this.filterListAZ = this.page.getByText('Name (A to Z)', { exact: true });
        this.filterListZA = this.page.getByText('Name (Z to A)', { exact: true });
        this.filterListLohi = this.page.getByText('Price (low to high)', { exact: true });
        this.filterListHilo = this.page.getByText('Price (high to low)', { exact: true });
        this.checkOutOrder = this.page.locator('#checkout');
        this.cartBtn = this.page.locator('.shopping_cart_link');
        
    }

    //add products
    async addAllProducts(){
        await this.backPack.click();
        await this.bikeLight.click();
        await this.tShirtBack.click();
        await this.fleeceJacket.click();
        await this.onesie.click()
        await this.tShirtRed.click();
    }
    //add BackPack
    async addBackPack(){
        await this.backPack.click();
    }
    //add BikeLight
    async addBikeLight(){
        await this.bikeLight.click();
    }
    //remove all products
    async removeProducts(){
        await this.removeBackPack.click();
        await this.removeBikeLight.click();
        await this.removeFleeceJacket.click();
        await this.removeTShirtBack.click();
        await this.removeTShirtRed.click();
        await this.removeOnesie.click()
    }
    //select filter
    async selectFilterList(option: 'az' | 'za' | 'lohi' | 'hilo') {
        await this.filterList.selectOption(option);
    }
    //click cart
    async summaryOrder(){
        await this.cartBtn.click()
    }
    //checkout order
    async payOrder(){
        await this.checkOutOrder.click();
    }


}