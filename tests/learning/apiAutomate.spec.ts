import { test, expect } from '@playwright/test'


// API Method POST
test('api create user', async ({ playwright }) => {
    //playwright.request.newContext คือการยิง API method POST
    const request = await playwright.request.newContext({
        baseURL: 'https://fakestoreapi.com',
    });
    //await request.post คือการใส่ path และ body ที่เตรียมไว้
    const response = await request.post('/users', {
        data: {
            "id": 100,
            "username": "Supper Maxnum",
            "email": "suppermaxnum.test.api.user@gmail.com",
            "password": "Mmmaxnum#11234567"
        }
    })
    expect(response.status()).toBe(201);
    // สามารถดึงค่า json ออกมาได้ตรงๆเลย
    //ดึง json เก็บไว้ที่ตัวแปร body
    const bodyResponse = await response.json()
    expect(bodyResponse.id).toBe(11)

})


test('API Get User', async ({ playwright }) => {
    const request = await playwright.request.newContext({
        baseURL: 'https://fakestoreapi.com'
    })
    const response = await request.get('/users/1')

    expect(response.status()).toBe(200)
    const res = await response.json();
    expect(res).toHaveProperty('id');
    expect(res).toHaveProperty('username');
    expect(res).toHaveProperty('email');
    expect(res).toHaveProperty('password');
})


