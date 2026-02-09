import dotenv from 'dotenv';
dotenv.config({ quiet: true });

export class Env {
  static get baseURL(): string {
    return process.env.BASEURL!;
  }

  static get userManagerURL(): string {
    return process.env.USERMANAGER_URL!;
  }

  static get bookStoreURL(): string {
    return process.env.BOOKSTORE_URL!;
  }
}
