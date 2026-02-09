import { test as base } from '@playwright/test';
import { UserManager } from './api/user-manager'; 
import { BookStore } from './api/book-store'; 

type Service = {
  userManager: UserManager;
  bookStore: BookStore;
};

export const test = base.extend<Service>({
  userManager: async ({ request }, use) => {
    await use(new UserManager({ request }));
  },
  bookStore: async ({ request }, use) => {
    await use(new BookStore({ request }));
  },
});
