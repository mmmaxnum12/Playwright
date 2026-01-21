
/*
---> Class / React Component / Interface / Type / Enum → ใช้ PascalCase (หรือ UpperCamelCase)
---> function / method / ตัวแปรทั่วไป → ใช้ camelCase
---> ค่าคงที่ระดับคอนฟิกจริง ๆ (เช่น ค่าที่เปลี่ยนไม่ได้/คีย์ environment) → นิยม UPPER_SNAKE_CASE
---> ตัวอย่าง: API_BASE_URL, MAX_RETRY
---> ชื่อไฟล์ (ทั่วไป) → มักใช้ kebab-case เช่น user-service.ts


*/ 
export class Student {
    firstname: string;
    lastname: string;
    age: number;
    grade: number;

    constructor(firstname: string, lastname: string, age: number, grade: number) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.grade = grade;
    }
    public getFullName() {
        return this.firstname+' '+this.lastname
    }
    public getAge() {
        return this.age
    }
    public getGrade() {
        return this.grade
    }
}