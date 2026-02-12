import { test } from '../../../fixtures';
import { expect } from '@playwright/test';

test.describe('Verify API Method: GET/BookStore/Books', () => {
    test('TC001: Verify get book', async({bookStore}) => {
        const request = await bookStore.getBooks();
        console.log(await request.json());
        expect(request.status()).toBe(200);
    });
    
})