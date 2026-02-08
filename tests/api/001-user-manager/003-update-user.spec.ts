import { test } from '../../../fixtures';
import { expect } from '@playwright/test';

test.describe('Verify API Method: PUT/Users/ID', () => {
    test('TC001: Verify update user with valid data should success', async ({ userManager }) => {
        const request = await userManager.updateUserById('1', {
            id: 1,
            username: 'max',
            email: 'mmmax@gmail.com',
            password: '1234'
        });
        expect(request.status()).toBe(200)
    })

        test('TC002: Verify update user with invalid data should success', async ({ userManager }) => {
        const request = await userManager.updateUserById('1xx', {
            id: 1,
            username: 'max',
            email: 'mmmax@gmail.com',
            password: '1234'
        });
        expect(request.status()).toBe(400)
    })
})