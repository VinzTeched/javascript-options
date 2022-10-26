const grades = [75, 95, 90, 85, 80, 85];
let gradesSum = 0;

for (var i = 0; i < grades.length; i++) {
    gradesSum += grades[i];
}

console.log(gradesSum / grades.length);