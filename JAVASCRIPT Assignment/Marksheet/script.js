// Total marks for both subjects combined
const totalMarks = 200;

// Empty array to store student data
let students = [];

// Prompt user for how many students they want to enter
const numberOfStudents = parseInt(prompt("Enter number of students:"));

// Loop for each student
for (let i = 0; i < numberOfStudents; i++) {
  // Get student name
  const name = prompt(`Enter name of student ${i + 1}:`);

  // Get science marks and convert to number
  const scienceMarks = parseInt(prompt(`Enter Science marks for ${name} (out of 100):`));

  // Get English marks and convert to number
  const englishMarks = parseInt(prompt(`Enter English marks for ${name} (out of 100):`));

  // Store the student data in the array
  students.push({ name, scienceMarks, englishMarks });
}

// Function to calculate total, percentage, and pass/fail
function calculateResult(student) {
  const obtained = student.scienceMarks + student.englishMarks;
  const percentage = (obtained / totalMarks) * 100;
  const status = percentage >= 40 ? "PASSED" : "FAILED";

  return {
    name: student.name,
    science: student.scienceMarks,
    english: student.englishMarks,
    total: obtained,
    percentage: percentage.toFixed(2),
    status
  };
}

// Function to render student data in the table
function renderMarksheet(results) {
  const tbody = document.getElementById("marksheetBody");

  results.forEach(result => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td class="px-4 py-2 font-medium">${result.name}</td>
      <td class="px-4 py-2">${result.science}</td>
      <td class="px-4 py-2">${result.english}</td>
      <td class="px-4 py-2">${result.total}/${totalMarks}</td>
      <td class="px-4 py-2">${result.percentage}%</td>
      <td class="px-4 py-2 font-semibold ${result.status === "PASSED" ? "text-green-600" : "text-red-600"}">${result.status}</td>
    `;

    tbody.appendChild(row);
  });
}

// Calculate and render all results
const results = students.map(calculateResult);
renderMarksheet(results);
