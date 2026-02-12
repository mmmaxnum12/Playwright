import { test } from '../../../fixtures';
import { expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Verify API Method: POST/Carts', () => {
    test('TC001: Verify add new product should success', async ({ productItems }) => {
        const request = await productItems.addNewProduct({
            id: 1,
            userId: 202,
            products: [
                {
                    id: 10,
                    title: 'SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s',
                    price: 109,
                    description: faker.person.jobDescriptor(),
                    category: 'electronics',
                    image: 'https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_t.png',
                },
            ],
        });

        expect(request.status()).toBe(201);
        const response = await request.json();
        expect(response).toBeTruthy();
    });
});

