let storedusername = "admin";
let password = "1234";
let res = storedusername === "admin" && password === "1234";
console.log(res);

let isLoggedIn = true;
let hasPermission = true;
let canAccessPage = isLoggedIn && hasPermission;
console.log(canAccessPage);

let inStock = true;
let price = 800;
let canBuy = inStock && price < 1000;
console.log(canBuy);

let marks = 75;
let attendance = 80;
let isPassed = marks > 65 && attendance > 70;
console.log("Student passed:", isPassed);

let isWeekend = true;
let isHoliday = false;
let party = isWeekend && isHoliday;
console.log("Party happens:", party);

let a = 0;
let b = 10;
let resultA = a && b;
console.log(resultA);
// 0

let x = 5;
let y = 10;
let resultB = (x > 3 && y) || 0;
console.log(resultB);
//  10

let p = "Hello";
let q = "";
let r = "World";
let resultAnd = p && q && r;
console.log(resultAnd);
// ""

let val = 5;
let condition = val && (val = 0);
console.log(condition);
console.log(val);

// 0
// 0

let x2 = 10;
let y2 = 20;
let finalResult = (x2 && y2) && (x2 > y2);
console.log(finalResult);
// false

let passwordCorrect = true;
let otpValid = false;
let loginAllowed = passwordCorrect || otpValid;
console.log("Login allowed:", loginAllowed); 

let isMember = false;
let hasCoupon = true;
let discountApplies = isMember || hasCoupon;
console.log("Discount applies:", discountApplies); 

let age = 16;
let height = 155;
let entryAllowed = age > 18 || height > 150;
console.log("Entry allowed:", entryAllowed); 

let emailGiven = true;
let phoneGiven = false;
let formValid = emailGiven || phoneGiven;
console.log("Form valid:", formValid); 

let score = 900;
let timeBonus = true;
let levelOpens = score > 1000 || timeBonus;
console.log("Level opens:", levelOpens); 

let a2 = 0;
let b2 = false;
let c2 = "";
let d2 = null;
let e2 = 42;
let resultOr = a2 || b2 || c2 || d2 || e2;
console.log(resultOr);

