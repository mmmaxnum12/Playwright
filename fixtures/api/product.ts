import type { APIRequestContext } from '@playwright/test';
import { Env } from '../../utils/env';

export class ProductItems {
    private readonly request: APIRequestContext;
    private readonly serviceURL = Env.cartURL;

    private headers: { [key: string]: string } = {
        'Content-Type': 'application/json',
        'X-API-Version': '1',
    };

    constructor(data: { request: APIRequestContext }) {
        this.request = data.request;
    }

    async addNewProduct(params: {
        id: number;
        userId: number;
        products: {
            id: number;
            title: string;
            price: number;
            description: string;
            category: string;
            image: string;
        }[];
    }) {
        return await this.request.post(`${this.serviceURL}/carts`, {
            headers: this.headers,
            data: params,
        });
    }


}
