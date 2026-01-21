import { test } from '@playwright/test';
import {Student} from '../../models/studen';

// let steing
test('Learning TypeScript: String', async () => {
    let msg: string = "Hi! I'm Max is not Mag"
    console.log(msg)
})

//ตัวแปร Array
test('Learning TypeScript: Array', async () => {
    let msg: string[] = ['Banana', 'orange2', 'orange1']
    console.log(msg[1])
})

//ตัวแปร Boolen
test('Learning TypeScript: Boolen', async () => {
    const msg: boolean = true;
    console.log(msg)
})




//if else
test('first if else', async () => {
    let myExamResult : number = 50;
    if(myExamResult === 100){
        console.log('A+')
    }else if (myExamResult >= 80) {
        console.log('A')
    }else if (myExamResult >= 60) {
        console.log('B')
    }else{
        console.log('สอบตกไม่เริ่ด')
    }
})

// loop for
test('For Loop Statement', async () => {
    for (let i = 0; i < 5; i++) {
        console.log('Hi')
    }
})

// loop for of วนทีละค่า ใน myArray แล้วทำการ “ผูกค่าปัจจุบันไว้กับตัวแปร” ที่ประกาศในลูป arrayList ไม่ได้ กำหนดค่าให้ตัวแปรอื่นอัตโนมัติ เราเพียงได้ค่ามาเก็บในตัวแปรนั้น
test('Loop for of Statemnt', async() => {
    const myArray : string[] = ['Max', 'Num', 'Hi']
    for(let arrayList of myArray) {
        console.log(arrayList)
    }
})


// loop for in จะได้ “index (key)” ไม่ใช่ “ค่า” ของอาเรย์
test('Loop for in Statemnt', async() => {
    const myArray : string[] = ['Max', 'Num', 'Hi']
    for(let arrayList in myArray) {
        console.log(arrayList)
    }
})


//function
test('function', async() => {
    helloWorld('Maxnum')
})

function helloWorld(username: string) {
    console.log('Hello World ' + username)
}

test('function is return value', async () => {
    const result = multiplyByTwo(4)
    console.log(result)
})

function multiplyByTwo(input: number) {
    return input * 2
}


//Class
test('basic class name Studen', () => {
    let studentA = new Student('Max','Num',20,5);
    const fullnameA = studentA.getFullName();
    const age = studentA.getAge();
    console.log(fullnameA)
    // console.log(age)
    console.log(studentA.age)
    
})

//Aysnc/Await
// Aysnc ทใช้กับฟังก์ชันเพื่อบอกว่า “ฟังก์ชันนี้จะทำงานแบบไม่ปกติ (asynchronous)” และมันจะ return เป็น Promise เสมอ
// Await ใช้รอผลลัพธ์ของ Promise “จนกว่าจะเสร็จ” ก่อนจะไปทำบรรทัดต่อไป
