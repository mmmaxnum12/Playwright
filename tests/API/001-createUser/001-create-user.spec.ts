import { test } from '../../../fixtures'; 
import { expect } from '@playwright/test';

test.describe('Test Case API', () => {
    test('TC001: Verify Create New User should success', async ({ userManager }) => {
        const request = await userManager.createUser({
            id: '1',
            username: 'max',
            email: 'testmmm112@gmail.com',
            password: 'test123'
        });
        expect(request.status()).toBe(201);
        const response = await request.json();
        expect(response).toBeTruthy();
    })
})
