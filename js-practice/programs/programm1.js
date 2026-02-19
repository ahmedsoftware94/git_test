// Simple Student Grade Manager (50 lines)

console.log("Student Grade Manager");

function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return grades.length ? sum / grades.length : 0;
}

function getGradeLevel(avg) {
  if (avg >= 90) return "Excellent";
  if (avg >= 75) return "Very Good";
  if (avg >= 60) return "Good";
  return "Needs Improvement";
}

let students = [
  { name: "Ali", grades: [90, 85, 88] },
  { name: "Sara", grades: [70, 75, 72] },
  { name: "Omar", grades: [95, 92, 98] }
];

for (let i = 0; i < students.length; i++) {
  let avg = calculateAverage(students[i].grades);
  let level = getGradeLevel(avg);
  console.log("Name:", students[i].name);
  console.log("Average:", avg.toFixed(2));
  console.log("Level:", level);
  console.log("-------------------");
}

function addStudent(name, grades) {
  students.push({ name: name, grades: grades });
}

addStudent("Lina", [80, 82, 79]);

console.log("Updated List:");
students.forEach(s => {
  let avg = calculateAverage(s.grades);
  console.log(s.name + " -> " + avg.toFixed(1));
});

console.log("Program Finished");
