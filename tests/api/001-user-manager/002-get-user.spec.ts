import { test } from '../../../fixtures'; 
import { expect } from '@playwright/test';

test.describe('Verify API Method: Get/Users', () => {
    test('TC001: Verify get all user should success', async ({ userManager }) => {
        const request = await userManager.getUser();
        expect(request.status()).toBe(200);
        const response = await request.json();
        expect (response).toBeTruthy();

    });

    test('TC002: Verify get user by Id should success', async ({ userManager }) => {
        const request = await userManager.getUserById('1');
        expect(request.status()).toBe(200);
        const response = request.json()
        expect(response).toBeTruthy();

    });

    test('TC003: Verify get user by invalid data should failed', async ({ userManager }) => {
        const request = await userManager.getUserById('1xx');
        expect(request.status()).toBe(400 )
    })
})
