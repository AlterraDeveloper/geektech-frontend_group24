//3) Boolean - логический

// логические операторы - && (AND) || (OR) !(NOT)
// операторы сравнения - > < >= <= == === != !==

//4) Undefined - неопределенный

var birthDate;

console.log(birthDate);
console.log(typeof birthDate);

//5) null - нулевой

var customerAddress = null;

console.log(customerAddress);
console.log(typeof customerAddress); // Баг JavaScript

// 6) Object - объектный (комплексный)

var customer = {
  name: "Eugene",
  surname: "Kiselev",
  fatherName: "Dmitrievich",
  isResident: true,
  id: 0,
  birthDate: null,
  passport: {
    series: "ID",
    documentNo: "12345",
    expiryDate: "01-01-2025",
    issueDate: "01-01-2015",
  },
  getFullName: function () {
    return this.surname + " " + this.name + " " + this.fatherName;
  },
  phoneNumbers: ["+996555111222", "+996700111222", "+79051112233"],
  isMobileBankingUser: true,
};

console.log(customer);
console.log(typeof customer);

console.log("Customer ID = ", customer.id);
console.log(
  "Customer passport expiration date = ",
  customer.passport.expiryDate
);
console.log("Customer full name = ", customer.getFullName());

// ------------------------------

function getConversionSum(sum, currency) {
  var sumN = 0;
  //   if (currency === "KGS") {
  //     sumN = sum * 1;
  //   } else if (currency === "USD") {
  //     sumN = sum * 85.9;
  //   } else if (currency === "EUR") {
  //     sumN = sum * 101.5;
  //   }

  switch (currency) {
    case "KGS":
      sumN = sum * 1;
      break;
    case "USD":
      sumN = sum * 85.9;
      break;
    case "EUR":
      sumN = sum * 101.5;
      break;
  }

  return sumN;
}

var loanRequestSum = 900;
var loanRequestSumCurrency = "EUR";

if (
  customer.isResident ||
  getConversionSum(loanRequestSum, loanRequestSumCurrency) <= 100_000
) {
  console.log("Loan request allowed");
} else {
  console.warn("Loan request rejected (Cause: customer not resident)");
}

console.log(typeof getConversionSum); // Баг JavaScript

// Операторы
// 1) Унарные: ! - +
// 2) Бинарные: + - * / % ** && ||
// 3) Тернарный оператор

var allowPersonalDataProcessing = true;

console.log(
  "С обработкой персональных данных",
  allowPersonalDataProcessing ? "согласен" : "не согласен"
);

console.log(
  "Статус клиента:",
  customer.isResident ? "Резидент" : "Не резидент"
);

var text = "Статус клиента:";
if (customer.isResident) {
  console.log(text, "Резидент");
} else {
  console.log(text, "Не резидент");
}

console.log(customer.id === 0 ? "Новый" : "Существующий", "клиент");

function isKgPhone(phoneNumber) {
  return phoneNumber.startsWith("+996");
}

function sendSMS(phoneNumber, text) {
  console.log("On number", phoneNumber, 'successfully sended SMS "', text, '"');
}

var smsText = "We offered new deposit product!!!";
for (var customerPhone of customer.phoneNumbers) {
  if (!isKgPhone(customerPhone)) continue;
  sendSMS(customerPhone, smsText);
  break;
}

var transfer = {
  from: "Eugene Kiselev",
  to: "Chirkov Aleksei",
  countryFrom: "KG",
  countryTo: "RU",
  amount: 100,
  amountCurrency: "USD",
  moneySystem: "Zolotaya corona",
};

function sendTransfer(transfer) {
  switch (transfer.moneySystem) {
    case "Golden crown":
    case "Zolotaya corona":
      console.log("Money transfered by Golden Crown");
      break;
    case "Contact":
      console.log("Money transfered by Contact");
      break;
    case "Unistream":
      console.log("Money transfered by Unistream");
      break;
  }
}

sendTransfer(transfer);

var childrenYears = [
  2012, 2015, 2020, 1999, 2017, 2012, 2021, 2023, 2022, 2015, 2014, 2013,
];

var giftCount = 0;

for (var childYear of childrenYears) {
  var childAge = 2023 - childYear;
  if (childAge >= 3 && childAge < 13) {
    // giftCount = giftCount + 1;
    // giftCount += 1;
    giftCount++;
  }
}

console.log("Gift count:", giftCount, "of", childrenYears.length, " children");
