import type { APIRequestContext } from '@playwright/test';
import { Env } from '../../utils/env';

export class BookStore {
  private readonly request: APIRequestContext;
  private readonly serviceURL = Env.bookStoreURL;

  private header = {
    'Content-Type': 'application/json',
    'X-API-Version': '1',
  };

  constructor(data: { request: APIRequestContext }) {
    this.request = data.request;
  }

  async getBooks() {
    return this.request.get(`${this.serviceURL}/Books`, {
      headers: this.header,
    });
  }

  async getBookByIsbn(isbn: string) {
    return this.request.get(`${this.serviceURL}/Books`, {
      headers: this.header,
      params: { ISBN: isbn },
    });
  }
}
