/* EXERCISE 1
 Write a piece of code to find the largest of  given two integers
*/

let num = 6;
let num1 = 12;
console.log("1,", num > num1 ? `${num} Is larger` : `${num1} Is larger`);

/* EXERCISE 2
  Write a piece of code to check: if  given an integer is NOT equal to 5 then display " not equal"
*/


console.log("2,", num !== 5 ? "not equal" : "equal");

/* EXERCISE 3
  Write a piece of code to check: if  given an integer is  divisible  by  5 then display "divisible by 5" (search for modulo operator)
*/
num = 10;
console.log("3,", num % 5 === 0 ? "divisible by 5" : "not divisible by 5");

/* EXERCISE 4
 Write a piece of code for checking if, given two integers, the value of one of them is 8 or if their addition or subtraction is equal to 8.
*/

num = 8;
num1 = 18;
console.log("4,", num === 8 || num1 - num1 === 8 ? true : false);

/* EXERCISE 5
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

let totalShoppingCart = 49;
let shipping = 10;
let total =
  totalShoppingCart > 50 ? totalShoppingCart : totalShoppingCart + shipping;
console.log("5,", total);

/* EXERCISE 6
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let discount = 0.2;
total = total - total * discount;
console.log("6,", total);

/* EXERCISE 7
Create three variables and assign a numerical value to each one of them. 
 Using a conditional statement, write a piece of code for sorting their values from highest to lowest.
 Display the result in the console.
*/
num1 = 10;
num2 = 2;
let num3 = 5;

if (num1 > num2 && num1 > num3) {
  console.log(`7, ${num1} is the highest`)
} else if (num2 > num2 && num2 > num3) {
  console.log(`7, ${num2} is the highest`)
} else {
  console.log(`7, ${num3} is the highest`)
}
if (num1 > num2 && num1 < num3) {
  console.log(`7, ${num1} is the second highest`)
} else if (num2 > num2 && num2 < num3) {
  console.log(`7, ${num2} is the second highest`)
} else {
  console.log(`7, ${num3} is the second highest`)
}
if (num1 < num2 && num1 < num3) {
  console.log(`7, ${num1} is the lowest`)
} else if (num2 < num1 && num2 < num3) {
  console.log(`7, ${num2} is the lowest`)
} else {
  console.log(`7, ${num3} is the lowest`)
}



//as ternary// 
// console.log(
//   "7,",
//   num1 > num2 && num1 > num3 ? num1 : num2 > num1 && num1 > num3 ? num2 : num3,
//   "Is the highest"
// );
// console.log(
//   "7,",
//   num1 > num2 && num1 < num3 ? num1 : num2 > num1 && num2 < num3 ? num2 : num3,
//   "Is the second highest"
// );
// console.log(
//   "7,",
//   num1 < num2 && num1 < num3 ? num1 : num2 < num1 && num2 < num3 ? num2 : num3,
//   "Is the lowest"
// );

/* EXERCISE 8
Write a piece of code for checking if a given value is a integer or not. (search for 'typeof')
*/

num = "1";

console.log("8,", typeof num === "number");

/* EXERCISE 9
 Write a piece of code for checking if a given number is even or odd. (search for modulo operator)
*/
num = parseInt(num);
console.log("9,", num % 2 === 0);

/* EXERCISE 10
Change the order of logic in the code so that it will return the correct statements in all cases.
let val = 7
if (val < 10) {
    console.log("Less than 10");
  } else if (val < 5) {
     console.log("Less than 5");
  } else {
    console.log("Greater than or equal to 10");
  }
*/
let val = 7;

if (val < 5) {
  console.log("10,", "Less than 5");
} else if (val < 10) {
  console.log("10,", "Less than 10");
} else {
  console.log("10,", "Greater than or equal to 10");
}

/*
EXERCISE 11
Write chained if/else if statements to fulfill the following conditions:
num < 5 - display Tiny
num < 10 - display Small
num < 15 - display Medium
num < 20 - display Large
num >= 20 - display Huge
*/
num = 12;
if (num < 5) {
  console.log("11,", "Tiny");
} else if (num < 10) {
  console.log("11,", "Small");
} else if (num < 15) {
  console.log("11,", "Medium");
} else if (num < 20) {
  console.log("11,", "Large");
} else {
  console.log("11,", "Huge");
}

/*  EXERCISE 12
Use a ternary operator to assign to a variable called gender the string values "male" or "female".
 The choice should be made based on the value of another variable called isMale.
*/

let isMale = true;
let gender = isMale ? "Male" : "Female";
console.log("12,", gender);

/* EXERCISE 13
Display the numbers 0 through 5 (inclusive) in acesnding order using a while loop.
*/

let i = 0;
while (i < 5) {
  console.log("13,", i);
  i++;
}

/* EXERCISE 14
Display the numbers 0 through 10 (inclusive) in acesnding order using a for loop.
*/
for (i = 0; i < 10; i++) {
  console.log("14,", i);
}

/* EXERCISE 15
Display the numbers 0 through 10 (inclusive) in acesnding order  but skip displaying 3 and 8.
*/
for (i = 0; i < 10; i++) {
  if (i === 3 || i === 8) {
    continue;
  }
  console.log("15,", i);
}

/* EXERCISE 16
 Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen
*/

for (i = 0; i < 15; i++) {
  console.log("16,", i, `is ${i % 2 === 0 ? "even" : "odd"}`);
}

/* EXERCISE 17
  Write a JavaScript program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz
 */
for (i = 0; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("17,", `${i} = FizzBuzz`);
  } else if (i % 3 === 0) {
    console.log("17,", `${i} = Fizz`);
  } else if (i % 5 === 0) {
    console.log("17,", `${i} = Buzz`);
  }
}

/* EXERCISE 18
  Write a piece of code to check the day of the week .  Usie  SWITCH - CASE  and given "day" variable with range from 1 to 7. 
  For example: if day value is equal to 1 display "Monday", if day value is equal to 3 display "Wednesday"

  */
let dayofweek;
switch (new Date().getDay()) {
  case 1:
    console.log("18, Monday");
    break;
  case 2:
    console.log("18, Tuesday");
    break;
  case 3:
    console.log("18, Wednesday");
    break;
  case 4:
    console.log("18, Thursday");
    break;
  case 5:
    console.log("18, Friday");
    break;
  case 6:
    console.log("18, Saturday");
    break;
  case 7:
    console.log("18, Sunday");
    break;
}
