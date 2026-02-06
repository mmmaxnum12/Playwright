import type { APIRequestContext } from '@playwright/test';


export class UserManager {
    private readonly request: APIRequestContext;
    private readonly baseURL: string;
    private header: { [key: string]: string } = {
        'Content-Type': 'application/json',
        'X-API-Version': '1'
    };

    constructor(data: {baseURL: string;  request: APIRequestContext;}) {
        this.baseURL = data.baseURL;
        this.request = data.request;
    };

    //Create User
    async createUser(params: {
        id: string;
        username: string;
        email: string;
        password: string
    }) {
        return await this.request.post(`${this.baseURL}/users`, {
            headers: this.header,
            data: params,
        })
    }

    //Get User All
    async getUser(){
        return await this.request.get(`${this.baseURL}/users`, {
            headers: this.header
        })
    }

    //Get User by Id
    async getUserById(id: string) {
        return await this.request.get(`${this.baseURL}/users/${id}`, {
            headers: this.header
        })
    }


}