import dotenv from 'dotenv';
dotenv.config({ quiet: true });

export namespace Env {
  export const userManagerURL = process.env.USERMANAGER_URL ?? '';
  export const bookStoreURL = process.env.BOOKSTORE_URL ?? '';
  export const accountURL = process.env.ACCOUNT_URL ?? '';
  export const cartURL = process.env.CARTURL_URL ?? '';
  export const bookStoreCredential = {
    username: process.env.BOOKSTORE_USERNAME ?? '',
    password: process.env.BOOKSTORE_PASSWORD ?? '',
  };


  export const bookStoreToken = process.env.BOOKSTORE_TOKEN ?? '';
}
