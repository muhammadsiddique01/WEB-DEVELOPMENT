/* 1. City name check */
// var city = prompt("Enter your city name:");
// if (city.toLowerCase() === "karachi") {
//   document.write("Welcome to city of lights<br><br>");
// }

/* 2. Gender greeting */
// var gender = prompt("Enter your gender (male/female):");
// if (gender.toLowerCase() === "male") {
//   document.write("Good Morning Sir.<br><br>");
// } else if (gender.toLowerCase() === "female") {
//   document.write("Good Morning Ma’am.<br><br>");
// } else {
//   document.write("Good Morning!<br><br>");
// }

/* 3. Fuel check */
// var fuel = parseFloat(prompt("Enter remaining fuel in litres:"));
// if (fuel < 0.25) {
//   document.write("Please refill the fuel in your car<br><br>");
// } else {
//   document.write("Fuel level is sufficient<br><br>");
// }

/* 4. Alert condition checks */
// a.
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }

// b.
// var b = 82;
// if (b++ === 83) {
//   alert("given condition for variable b is true");
// }

// c.
// var c = 12;
// if (c++ === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if(c === 14) {
//   alert("condition 4 is true");
// }

// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }

// e.
// if (true) {
//   alert("True");
// }
// if (false) {
//   alert("False");
// }

// f.
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

/* 5. Guess game */
// var secret = 7;
// var guess = parseInt(prompt("Guess the secret number (1-10):"));
// if (guess === secret) {
//   document.write("Bingo! Correct answer<br><br>");
// } else if (guess + 1 === secret) {
//   document.write("Close enough to the correct answer<br><br>");
// } else {
//   document.write("Try again!<br><br>");
// }

/* 6. Divisible by 3 */
// var number = parseInt(prompt("Enter a number to check if divisible by 3:"));
// if (number % 3 === 0) {
//   document.write(number + " is divisible by 3<br><br>");
// } else {
//   document.write(number + " is not divisible by 3<br><br>");
// }

/* 7. Even or Odd */
// var num = parseInt(prompt("Enter a number to check even or odd:"));
// if (num % 2 === 0) {
//   document.write(num + " is an even number<br><br>");
// } else {
//   document.write(num + " is an odd number<br><br>");
// }

/* 8. Temperature conditions */
// var temp = parseFloat(prompt("Enter temperature:"));
// if (temp > 40) {
//   document.write("It is too hot outside.<br><br>");
// } else if (temp > 30) {
//   document.write("The Weather today is Normal.<br><br>");
// } else if (temp > 20) {
//   document.write("Today’s Weather is cool.<br><br>");
// } else if (temp > 10) {
//   document.write("OMG! Today’s weather is so Cool.<br><br>");
// } else {
//   document.write("It's very cold!<br><br>");
// }

/* 9. Simple Calculator */
var num1 = parseFloat(prompt("Enter first number:"));
var num2 = parseFloat(prompt("Enter second number:"));
var operation = prompt("Enter operation (+, -, *, /, %):");
var result;

if (operation === "+") {
  result = num1 + num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
} else {
  result = "Invalid operation!";
}

document.write("Result of calculation: " + result + "<br><br>");