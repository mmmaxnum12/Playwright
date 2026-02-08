import { test } from '../../../fixtures';
import { expect } from '@playwright/test';

test.describe('Verify API Method: Delete/Users/ID', () => {
    test('TC001: Verify delete user by ID', async({userManager}) => {
        const request = await userManager.deleteUserById('1');
        expect(request.status()).toBe(200)
    });
    
})