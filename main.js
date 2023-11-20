// let obj = {age: 34}

// obj.__proto__.SayName = function(name){
//         console.log(name)
//     }
//     // Bu setter deyiladi ya'ni prototypega yangi property qo'shish
    
    
//     obj.__proto__.SayName('Sadriddin')
//     //Bu getter deyiladi
    
    
// let obj = {age: 34}
// let obj2 = {}
// obj.__proto__.SayName = function(name){
//         console.log(name)
//     }

// obj2.__proto__.SayName('Sadriddin')

// //BU holatda biz birinchi Objectga yangi prototype qo'shsak
// //faqat bitta object uchun emas hamma Object uchun qo'shiladi
// //Biz xohlagancha ishlatsak bo'ladi


// Biz faqat funksiya emas xohlagan ma'lumot turini qo'sha olamiz va prototypeni ko'ra olamiz

let str = new String('Sadriddin')
console.log(str) //BU stringni prototypeni ko'rsatib beradi
// biz bunga number ha qo'shishimiz mumkin

str.__proto__.num = 32

console.log(str.__proto__.num) // 32 chiqadi