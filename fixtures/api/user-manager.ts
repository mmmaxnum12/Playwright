import type { APIRequestContext } from '@playwright/test';
import { Env } from '../../utils/env';

export class UserManager {
    private readonly request: APIRequestContext;
    private readonly serviceURL = Env.userManagerURL;

    private header = {
        'Content-Type': 'application/json',
        'X-API-Version': '1',
    };

    constructor(data: { request: APIRequestContext }) {
        this.request = data.request;
    }

    async createUser(params: { id: number; username: string; email: string; password: string }) {
        return this.request.post(`${this.serviceURL}/users`, {
            headers: this.header,
            data: params,
        });
    }

    async getUser() {
        return this.request.get(`${this.serviceURL}/users`, {
            headers: this.header,
        });
    }

    async getUserById(id: string) {
        return this.request.get(`${this.serviceURL}/users/${id}`, {
            headers: this.header,
        });
    }

    async updateUserById(
        id: string,
        param: { id: number; username: string; email: string; password: string }
    ) {
        return this.request.put(`${this.serviceURL}/users/${id}`, {
            headers: this.header,
            data: param,
        });
    }

    async deleteUserById(id: string) {
        return this.request.delete(`${this.serviceURL}/users/${id}`, {
            headers: this.header,
        });
    }
}
