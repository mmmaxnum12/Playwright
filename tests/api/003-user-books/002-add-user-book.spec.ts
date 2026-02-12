import { test } from '../../../fixtures';
import { expect } from '@playwright/test';

test.describe('Verify API Method: POST/BookStore/Books', () => {
    test('TC001: Verify add new book', async ({ bookStore }) => {
        const userId = '95e35b6c-0d9b-45c8-ae4d-7a64175edbe9';
        const isbn = '9781449337711';

        const response = await bookStore.addBookToUser({
            userId,
            collectionOfIsbns: [{ isbn }],
        });

        expect(response.status()).toBe(200);
    });
})
