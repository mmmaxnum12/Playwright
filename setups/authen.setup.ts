import { test as setup, expect } from '@playwright/test';
import { Env } from '../utils/env';

setup('Auth BookStore', async ({ request }) => {
  const { username, password } = Env.bookStoreCredential;

  const res = await request.post(`${Env.accountURL}/GenerateToken`, {
    data: {
      userName: username,
      password: password,
    },
  });

  await expect(res).toBeOK();

  const body = await res.json();
  const token = body.token;

  expect(token).toBeTruthy();

  process.env.BOOKSTORE_TOKEN = `Bearer ${token}`;
});
