
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
  rl.question("Enter month number (1-12): ", (monthInput) => {
    const month = Number(monthInput);
    if (!Number.isInteger(month) || month < 1 || month > 12) {
      console.log("Invalid month number");
    } else if (month === 12 || month === 1 || month === 2) {
      console.log("Winter");
    } else if (month >= 3 && month <= 5) {
      console.log("Summer");
    } else if (month >= 6 && month <= 8) {
      console.log("Monsoon");
    } else {
      console.log("Autumn");
    }
    rl.close();
  });
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

let income = 500000;
let taxAmount;
if (income < 300000) {
  taxAmount = 0;
} else if (income <= 700000) {
  taxAmount = income * 0.05;
} else if (income <= 1000000) {
  taxAmount = income * 0.10;
} else {
  taxAmount = income * 0.15;
}
console.log("Tax amount: " + taxAmount);

let studentScore = 85;
if (studentScore >= 90) {
  console.log("Outstanding");
} else if (studentScore >= 70) {
  console.log("Good");
} else if (studentScore >= 40) {
  console.log("Average");
} else {
  console.log("Needs Improvement");
}


let vehicleSpeed = 60;
if (vehicleSpeed < 40) {
  console.log("Slow");
} else if (vehicleSpeed <= 80) {
  console.log("Normal");
} else {
  console.log("Fast");
}

let personHeight = 165;
if (personHeight < 150) {
  console.log("Short");
} else if (personHeight <= 170) {
  console.log("Average");
} else {
  console.log("Tall");
}

let dayNumber = 6;
if (dayNumber >= 1 && dayNumber <= 5) {
  console.log("Weekday");
} else if (dayNumber === 6 || dayNumber === 7) {
  console.log("Weekend");
} else {
  console.log("Invalid day number");
}

let electricityUnits = 120;
let electricityRate;
if (electricityUnits <= 50) {
  electricityRate = 2;
} else if (electricityUnits <= 150) {
  electricityRate = 4;
} else {
  electricityRate = 6;
}
let electricityBill = electricityUnits * electricityRate;
console.log("Total electricity bill: ₹" + electricityBill);

let attendancePercentage = 82;
if (attendancePercentage >= 90) {
  console.log("Excellent");
} else if (attendancePercentage >= 75) {
  console.log("Good");
} else if (attendancePercentage >= 50) {
  console.log("Satisfactory");
} else {
  console.log("Poor");
}

let subjectMark1 = 78;
let subjectMark2 = 92;
let subjectMark3 = 85;
if (subjectMark1 >= subjectMark2 && subjectMark1 >= subjectMark3) {
  console.log("Highest mark: " + subjectMark1);
} else if (subjectMark2 >= subjectMark1 && subjectMark2 >= subjectMark3) {
  console.log("Highest mark: " + subjectMark2);
} else {
  console.log("Highest mark: " + subjectMark3);
}

let checkedNumber = -7;
if (checkedNumber > 0 && checkedNumber % 2 === 0) {
  console.log("Positive Even");
} else if (checkedNumber > 0) {
  console.log("Positive Odd");
} else if (checkedNumber < 0 && checkedNumber % 2 === 0) {
  console.log("Negative Even");
} else if (checkedNumber < 0) {
  console.log("Negative Odd");
} else {
  console.log("Zero");
}


let nestedNumber = 15;
if (nestedNumber > 10) {
  if (nestedNumber % 3 === 0) {
    console.log("Greater than 10 and divisible by 3");
  } else {
    console.log("Greater than 10 but not divisible by 3");
  }
} else {
  console.log("Number is not greater than 10");
}


let voterAge = 20;
let hasVoterId = true;
if (voterAge >= 18) {
  if (hasVoterId) {
    console.log("Can Vote");
  } else {
    console.log("Voter ID is required");
  }
} else {
  console.log("Must be at least 18 to vote");
}

let nestedStudentScore = 85;
if (nestedStudentScore >= 40) {
  if (nestedStudentScore >= 80) {
    console.log("Passed with Distinction");
  } else {
    console.log("Passed");
  }
} else {
  console.log("Failed");
}

let enteredPin = 1234;
let correctPin = 1234;
let accountBalance = 5000;
let withdrawalAmount = 1500;
if (enteredPin === correctPin) {
  if (accountBalance >= withdrawalAmount) {
    console.log("Withdrawal approved");
  } else {
    console.log("Insufficient balance");
  }
} else {
  console.log("Incorrect PIN");
}


let checkedYear = 2024;
if (checkedYear % 4 === 0) {
  if (checkedYear % 100 === 0) {
    if (checkedYear % 400 === 0) {
      console.log("Leap Year");
    } else {
      console.log("Not a Leap Year");
    }
  } else {
    console.log("Leap Year");
  }
} else {
  console.log("Not a Leap Year");
}


let checkedEmail = "student@example.com";
if (checkedEmail.includes("@")) {
  if (checkedEmail.endsWith(".com")) {
    if (checkedEmail.length > 10) {
      console.log("Valid Email");
    } else {
      console.log("Email must be longer than 10 characters");
    }
  } else {
    console.log("Email must end with .com");
  }
} else {
  console.log("Email must contain @");
}


let cartTotal = 1500;
let isPremiumMember = true;
let finalAmount = cartTotal;
if (cartTotal >= 1000) {
  if (isPremiumMember) {
    finalAmount = cartTotal * 0.8;
  } else {
    finalAmount = cartTotal * 0.9;
  }
}
console.log("Final amount: ₹" + finalAmount);


let positiveCheckNumber = 16;
if (positiveCheckNumber > 0) {
  if (positiveCheckNumber % 2 === 0) {
    if (positiveCheckNumber % 4 === 0) {
      console.log("Positive Even and Divisible by 4");
    }
  }
}


let candidateAge = 25;
let hasGraduationDegree = true;
let yearsOfExperience = 3;
if (candidateAge >= 21 && candidateAge <= 30) {
  if (hasGraduationDegree) {
    if (yearsOfExperience >= 2) {
      console.log("Eligible for Interview");
    }
  }
}


let isStudentPresent = true;
let internalMarks = 35;
let externalMarks = 40;
if (isStudentPresent) {
  if (internalMarks >= 30) {
    if (externalMarks >= 35) {
      console.log("Eligible for Final Exam");
    }
  }
}

