import { test, expect } from '@playwright/test'



test('API GET', async ({request}) => {
    const response1 = await request.get('https://fakestoreapi.com/products')
    console.log(await response1.json())
})


