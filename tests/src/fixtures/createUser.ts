import type { APIRequestContext } from '@playwright/test';
import { expect } from '@playwright/test';

//createUser: passed
export const createUser = async (api: APIRequestContext, bodyRequest: any) => {
  const resp = await api.post('/users', { data: bodyRequest });
  expect(resp.status()).toBe(201);
  return resp;
};
//createFailed
export const createUserFailed = async (api: APIRequestContext, bodyRequest: any) => {
  const response = await api.post('/user', { data: bodyRequest})
  return response;
}




//getUser passed
export const getAllUser = async (api: APIRequestContext) => {
  const resp = await api.get('/products')
  return resp
}