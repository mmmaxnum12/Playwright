import { test, expect } from '@playwright/test'
import { LoginPage } from '../../../fixtures/fe/login-page'
import { ItemsProduct } from '../../../fixtures/fe/products';
import { BillPayment } from '../../../fixtures/fe/checkout-order';
import { ConfirmOrders } from '../../../fixtures/fe/over-view';

test.describe('Add New Product', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        const loginPage = new LoginPage(page);
        await loginPage.login('standard_user', 'secret_sauce');
    });

    test('TC001: Verify system can add all products', async ({ page }) => {
        const itemsProduct = new ItemsProduct(page);
        await itemsProduct.addAllProducts();
        expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('6')
    });

    test('TC002: Verify system can some products', async ({ page }) => {
        const itemsProduct = new ItemsProduct(page);
        await itemsProduct.addBackPack();
        await itemsProduct.addBikeLight();
        expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText('2')
    });

    test('TC003: Verify system can remove products after clicked', async ({ page }) => {
        const itemsProduct = new ItemsProduct(page);
        await itemsProduct.addAllProducts();
        await itemsProduct.removeProducts();
        expect(page.locator(`#shopping_cart_container`)).toHaveText("")
    });

    test('TC004: Verify system can click filter list', async ({ page }) => {
        const itemsProduct = new ItemsProduct(page);
        await itemsProduct.selectFilterList('az');
        expect(itemsProduct.filterList).toHaveValue('az');
        await itemsProduct.selectFilterList('za');
        expect(itemsProduct.filterList).toHaveValue('za');
        await itemsProduct.selectFilterList('lohi');
        expect(itemsProduct.filterList).toHaveValue('lohi');
        await itemsProduct.selectFilterList('hilo');
        expect(itemsProduct.filterList).toHaveValue('hilo');
    });

    test('TC005: Verify system when the user checkout order', async ({ page }) => {
        const itemsProduct = new ItemsProduct(page);
        await itemsProduct.addAllProducts();
        await itemsProduct.summaryOrder();
        await itemsProduct.payOrder();

        const billPayment = new BillPayment(page);
        await billPayment.addressBilling('Max', 'Num', 10600);
        await billPayment.continue();

        const confirmOrders = new ConfirmOrders(page);
        await confirmOrders.confirmedOrder();
        expect(page.locator('[data-test="complete-header"]')).toContainText('Thank you for your order!')
    });
})