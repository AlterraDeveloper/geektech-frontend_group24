const number = 4;
for (let i = 1; i <= 10; i++) {
  console.log(`${number} * ${i} = ${number * i}`);
}

const customer = "Иванова Галина";
const accountNo = "632784782364786234762";
const currency = "EUR";
const customerSex = false;

const getNameEnding = (customerSex) => (customerSex ? "ый" : "ая");

const openAccountAgreement = `Уважаем${getNameEnding(customerSex)} ${customer}. 
Вам был открыт счет ${accountNo} (${currency}).
Спасибо что выбираете наш банк.`;

console.log(openAccountAgreement);
