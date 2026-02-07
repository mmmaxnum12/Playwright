import { test as base } from '@playwright/test';
import { UserManager } from './api/user-manager';

type Service = {
  userManager: UserManager;
};

const test = base.extend<Service>({
  userManager: async ({ request, baseURL }, use) => {
    const user = new UserManager({
      request,
      baseURL: baseURL!,
    });
    await use(user);
  },
});

export { test };
