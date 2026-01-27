import { test, expect } from '@playwright/test';
import { createUser, getAllUser, createUserFailed } from '../src/fixtures/createUser';
import bodyRequest from '../src/dataTest/createUser.json';
import bodyRequestFailed from '../src/dataTest/createUserFailed.json'
import responseGetAllUser from '../src/dataTest/responseGetAllProduct.json'


test.describe('Test Case API', () => {
    test('TC:001 สร้าง user ใหม่ API will return 200', async ({ request }) => {
        // สร้างตัวแปร resp เพื่อเรียกใช้ค่า function createUser ที่เตรียมไว้
        //หลังจากนั้นทำการยิง api 
        const resp = await createUser(request, bodyRequest)
        // เก็บค่า response ไว้ที่ตัวแปร body
        const body = await resp.json();
        // เอาค่า response มาเทียบกับค่าตามที่ TC กำหนด
        expect(body).toHaveProperty('id');
        // expect(typmฟปืีeof body.id).toBe('number');  
        expect(body.id).toBeGreaterThan(0);
    })


    test('TC2: Get All user', async ({ request }) => {
        const paramter = await getAllUser(request)
        expect(paramter.status()).toBe(200);
        const response = await paramter.json()
        expect(response).toEqual(responseGetAllUser)

    })

    test('TC3: Create User Failed', async ({ request }) => {
        const verifyFailed = await createUserFailed(request, bodyRequestFailed)
        expect(verifyFailed.status()).toBe(404)

    })
})
