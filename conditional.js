
let number = 25;
if (number % 5 === 0) {
  console.log("Divisible by 5");
}


let age = 65;
if (age >= 60) {
  console.log("Senior Citizen");
}


let num = 150;
if (num > 100) {
  console.log("Big Number");
}


let temperature = 8;
if (temperature < 10) {
  console.log("Very Cold");
}

let score = 100;
if (score === 100) {
  console.log("Perfect Score");
}

let negativeNumber = -7;
if (negativeNumber < 0) {
  console.log("Negative Number");
}


let input = "";
if (input === "") {
  console.log("No input provided");
}


let year = 2000;
if (year % 100 === 0) {
  console.log("Century Year");
}


let positiveEvenNumber = 14;
if (positiveEvenNumber > 0 && positiveEvenNumber % 2 === 0) {
  console.log("Positive Even Number");
}


let marks = 75;
if (marks >= 35 && marks <= 100) {
  console.log("Valid Marks");
}


let number1 = 13;
if (number1 % 2 === 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}


let age2 = 20;
if (age2 >= 18) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}


let number3 = -5;
if (number3 > 0) {
  console.log("Positive");
} else {
  console.log("Negative");
}


let marks2 = 40;
if (marks2 >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}


let ch = "M";
if (ch >= "A" && ch <= "Z") {
  console.log("Uppercase Letter");
} else {
  console.log("Not an Uppercase Letter");
}


let number6 = 12;
if (number6 % 3 === 0) {
  console.log("Divisible by 3");
} else {
  console.log("Not Divisible by 3");
}


const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter password: ", (password) => {
  if (password === "admin123") {
    console.log("Login Successful");
  } else {
    console.log("Incorrect Password");
  }
  rl.close();
});


let year2 = 2024;
if (year2 % 4 === 0) {
  console.log("Leap Year");
} else {
  console.log("Not a Leap Year");
}


let a = 18;
let b = 25;
if (a > b) {
  console.log("Greater number is " + a);
} else {
  console.log("Greater number is " + b);
}

let number10 = 0;
if (number10 > 0) {
  console.log("Positive");
} else if (number10 < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

