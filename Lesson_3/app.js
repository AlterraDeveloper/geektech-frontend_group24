// 6 8 40

var student = {
  name: "Eugene",
  surname: "Kiselev",
  group: "gt-f-24",
  homeworks: new Array(8).fill(0),
  standups: new Array(8).fill(0),
  visitings: new Array(8).fill(""),
};

var student2 = {
  name: "Atai",
  surname: "Sakeev",
  group: "gt-f-23",
  homeworks: new Array(8).fill(0),
  standups: new Array(8).fill(0),
  visitings: new Array(8).fill("0"),
};

function sum(a, b) {
  return a + b;
}

console.log(sum(5, 5));

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkHomework(student, hwNo) {
  console.group(student.name + " " + student.surname);
  console.log("Download zip archive...");
  console.log("Extract zip archive...");
  console.log("Open VS Code");
  console.log("Checking " + hwNo + " homework....");
  var grade = getRandomInt(1, 10);
  console.log("Mark grade in google table");
  console.log("Mark grade in personal chat");
  student.homeworks[hwNo - 1] = grade;
  console.groupEnd();
}

var numbers = [4, 5, 6];
//indexes      0,1,2

function markVisit(student, lessonNo) {
  var visit = getRandomInt(0, 2);
  switch (visit) {
    case 0:
      student.visitings[lessonNo - 1] = "0";
      break;
    case 1:
      student.visitings[lessonNo - 1] = "1";
      break;
    case 2:
      student.visitings[lessonNo - 1] = "online";
      break;
  }
}

function writeStandUp(student, lessonNo) {
  student.standups[lessonNo - 1] = getRandomInt(0, 1);
}

function getStudentStats(student) {
  var totals = {
    student: student.surname + " " + student.name,
    homeworkTotal: 0,
    visitingsTotal: 0,
    standupsTotal: 0,
  };

  for (var i = 1; i <= 8; i++) {
    markVisit(student, i);
    checkHomework(student, i);
    writeStandUp(student, i);
  }

  for (var i = 0; i < 8; i++) {
    // totals.homeworkTotal = totals.homeworkTotal + student.homeworks[i];
    totals.homeworkTotal += student.homeworks[i];
    totals.standupsTotal += student.standups[i];
    switch (student.visitings[i]) {
      case "0":
        break;
      case "1":
        totals.visitingsTotal += 1;
        break;
      case "online":
        totals.visitingsTotal += 0.5;
        break;
    }
  }
  return totals;
}

function isFreeRepeat(studentTotals) {
  var moreThan40 = studentTotals.homeworkTotal >= 40;
  var standups8 = studentTotals.standupsTotal === 8;
  var visitings6 = studentTotals.visitingsTotal >= 6;

  return moreThan40 || (standups8 && visitings6);
}

var studentStats = getStudentStats(student);
var studentStats2 = getStudentStats(student2);

console.log(studentStats);
console.log(studentStats2);

console.log(isFreeRepeat(studentStats) ? "Super, free repeat!!!" : "Pay 6000");
console.log(isFreeRepeat(studentStats2) ? "Super, free repeat!!!" : "Pay 6000");

//тернарный оператор
// условие ? действие_если_true : действие_если_false

var userName = prompt("What is your name?");
console.log("Welcome", userName);
console.log(typeof userName);
