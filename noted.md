username Mmmaxnum
pass Maxnum#123456
url  https://demoqa.com/register

Async ไม่ได้หมายถึง “ทำงานเป็นลำดับ” แต่หมายถึง “ฟังก์ชันนี้รองรับการทำงานแบบ รออย่างไม่บล็อก”
Await คือคำสั่งที่ทำให้โค้ด “เหมือนทำงานทีละขั้น” เพราะมันจะหยุดรอ Promise ให้เสร็จก่อน

Async → ใช้กับฟังก์ชันเพื่อบอกว่า “ฟังก์ชันนี้จะทำงานแบบไม่ปกติ (asynchronous)” และมันจะ return เป็น Promise เสมอ

Await → ใช้รอผลลัพธ์ของ Promise “จนกว่าจะเสร็จ” ก่อนจะไปทำบรรทัดต่อไป


Element Selectors
ตอนที่ใช้ id = aeait page.fill('id=user', 'value')

วิธีหา locator 
CSS Seletors ใช้
$$('')

Xpath Seletors ใช้
$x('')

ID ใช้
documnt.getElementById('ID')

Mouse Hover