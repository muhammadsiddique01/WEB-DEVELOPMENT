// Q1 Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser: 
// let a = 10;

// document.write("The value of a is: " + a + "<br>");
// document.write("...........................................<br><br>");

// document.write("The value of ++a is: " + (++a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a++ is: " + (a++) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of --a is: " + (--a) + "<br>");
// document.write("Now the value of a is: " + a + "<br><br>");

// document.write("The value of a-- is: " + (a--) + "<br>");
// document.write("Now the value of a is: " + a + "<br>");

// Q2

//  // Initial values
//   var a = 2, b = 1;

//   // Stage 1: --a
//   // a is pre-decremented, so a becomes 1
//   // value of --a is 1
//   var step1 = --a; // a = 1

//   // Stage 2: --a - --b
//   // a is already 1
//   // b is pre-decremented, so b becomes 0
//   // value = 1 - 0 = 1
//   a = 1; b = 1; // Reset for demonstration
//   var step2 = --a - --b; // a = 1, b = 0, result = 1

//   // Stage 3: --a - --b + ++b
//   // a = 2, b = 1 again
//   a = 2; b = 1;
//   var step3 = --a - --b + ++b;
//   // --a = 1, --b = 0, ++b = 1 => 1 - 0 + 1 = 2

//   // Final expression: --a - --b + ++b + b--
//   a = 2; b = 1;
//   var result = --a - --b + ++b + b--;
//   // --a = 1
//   // --b = 0
//   // ++b = 1
//   // b-- = 1 (use first, then b becomes 0)
//   // Expression: 1 - 0 + 1 + 1 = 3

//   document.write("<b>Final values after expression execution:</b><br>");
//   document.write("a = " + a + "<br>");
//   document.write("b = " + b + "<br>");
//   document.write("result = " + result + "<br><br>");

//   // Displaying all steps
//   document.write("<b>Step-by-step breakdown:</b><br>");
//   document.write("Step 1 ( --a ): a = 2 → " + step1 + "<br>");
//   document.write("Step 2 ( --a - --b ): result = " + step2 + "<br>");
//   document.write("Step 3 ( --a - --b + ++b ): result = " + step3 + "<br>");
//   document.write("Step 4 ( --a - --b + ++b + b-- ): result = " + result + "<br>");

// Q 3
//  var userName = prompt("Enter your name:");
//   document.write("<h3>Hello, " + userName + "! Welcome!</h3>");

// Q4
// var number = prompt("Enter a number to display its multiplication table:");
//   if (number === null || number === "" || isNaN(number)) {
//     number = 5; // default value
//   } else {
//     number = parseInt(number);
//   }

//   document.write("<h3>Multiplication Table of " + number + "</h3>");
//   for (var i = 1; i <= 10; i++) {
//     document.write(number + " x " + i + " = " + (number * i) + "<br>");
//   }

// Q5
 // a) Take three subject names
  var subject1 = prompt("Enter name of Subject 1:");
  var subject2 = prompt("Enter name of Subject 2:");
  var subject3 = prompt("Enter name of Subject 3:");

  // b) Total marks for each subject
  var totalMarksPerSubject = 100;

  // c) Get obtained marks
  var marks1 = parseFloat(prompt("Enter obtained marks for " + subject1 + ":"));
  var marks2 = parseFloat(prompt("Enter obtained marks for " + subject2 + ":"));
  var marks3 = parseFloat(prompt("Enter obtained marks for " + subject3 + ":"));

  // d) Calculate total and percentage
  var totalObtained = marks1 + marks2 + marks3;
  var totalMarks = totalMarksPerSubject * 3;
  var percentage = (totalObtained / totalMarks) * 100;

  // e) Show result
  document.write("<h3>Result Summary</h3>");
  document.write("<table border='1' cellpadding='5'>");
  document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
  document.write("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
  document.write("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
  document.write("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
  document.write("</table><br>");
  document.write("Total Marks: " + totalMarks + "<br>");
  document.write("Marks Obtained: " + totalObtained + "<br>");
  document.write("Percentage: " + percentage.toFixed(2) + "%");