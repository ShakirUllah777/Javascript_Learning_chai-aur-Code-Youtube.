// Condition in the javascript

// 1 - if...else statement
let age = 20;
if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


// 2 - else if statement
let score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}


// 3 - switch statement
let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Another day");
}

// 4- for loops 

for (let i = 0; i < 5; i++) {
  console.log(i);
}

// 5 - while loops
// while loop 
let count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// do...while loop
let num = 0;
do {
  console.log(num);
  num++;
} while (num < 5);

