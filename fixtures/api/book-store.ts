import type { APIRequestContext } from '@playwright/test';
import { Env } from '../../utils/env';

export class BookStore {
  private readonly request: APIRequestContext;
  private readonly serviceURL = Env.bookStoreURL;

  private headers: { [key: string]: string } = {
    'Content-Type': 'application/json',
    'X-API-Version': '1',
    Authorization: Env.bookStoreToken,
  };

  constructor(data: { request: APIRequestContext }) {
    this.request = data.request;
  }

  async getBooks() {
    return await this.request.get(`${this.serviceURL}/BookStore/v1/Books`, {
      headers: this.headers,
    });
  }

  async addBookToUser(params: {
    userId: string;
    collectionOfIsbns: { isbn: string }[];
  }) {
    return await this.request.post(`${this.serviceURL}/BookStore/v1/Books`, {
      headers: this.headers,
      data: params,
    });
  }

}
