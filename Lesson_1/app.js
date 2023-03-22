// я однострочный комментарий
/* 
Я
многострочный
комментарий
*/

// alert("Hello World");

console.log("Hello World");

// Типы данных - Data types

//1) String - текстовый

var customerName = "Eugene";
var customerSurname = "Kiselev";
var customerFatherName = "Dmitrievich";

// Concatenation - конкатенация
var customerFullName =
  customerSurname + " " + customerName + " " + customerFatherName;

// alert(customerFullName);
console.log(customerFullName);

//2) Number - числовой

var customerSalary = 200_000;
var customerID = 25478;

var rateUsdToKgs = 85.59;

var oneTimeTransferLimit = 50_000;
var monthlyTransferLimit = 300_000;

console.log(customerSalary / 0);

// + - * / ** %

// Infinity, NaN (Not a Number)

console.log("NaN (Not a number) is", typeof NaN);

// 3) Boolean - логический

var isResident = false;
var personalDataProcessingAgree = false;

var loanRequestSum = 100_000;

//DRY -Don't repeat yourself

if (isResident || loanRequestSum <= 100_000) {
  console.log("Loan request allowed");
} else {
  console.warn("Loan request rejected (Cause: customer not resident)");
}

var depositPeriodInMonth = 100;

if (depositPeriodInMonth > 0 && depositPeriodInMonth < 24) {
  console.log("Short-term deposit");
} else if (depositPeriodInMonth >= 24 && depositPeriodInMonth < 60) {
  console.log("Middle-term deposit");
} else {
  console.log("Long-term deposit");
}

//Операторы сравнения: > < <= >= == === != !==
