const passwordResultElement = document.querySelector("#result");
const passwordLengthElement = document.querySelector("#length");
const uppercaseRuleElement = document.querySelector("#uppercase");
const lowercaseRuleElement = document.querySelector("#lowercase");
const numbersRuleElement = document.querySelector("#numbers");
const symbolsRuleElement = document.querySelector("#symbols");
const generateButton = document.querySelector("#generate");

function generatePassword(rules) {
  let password = "";
  while (password.length < rules.length) {
    for (const rule in rules) {
      if (rule === "length" || !rules[rule]) continue;
      switch (rule) {
        case "uppercase":
          password = password.concat(getRandomUppercase());
          break;
        case "lowercase":
          password = password.concat(getRandomLowercase());
          break;
        case "numbers":
          password = password.concat(getRandomNumber());
          break;
        case "symbols":
          password = password.concat(getRandomSymbol());
          break;
      }
    }
  }
  return password.substring(0, rules.length);
}

generateButton.onclick = () => {
  const rules = {
    length: 0,
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false,
  };

  rules.length = Number(passwordLengthElement.value);
  rules.lowercase = lowercaseRuleElement.checked;
  rules.uppercase = uppercaseRuleElement.checked;
  rules.numbers = numbersRuleElement.checked;
  rules.symbols = symbolsRuleElement.checked;

  const password = generatePassword(rules);
  passwordResultElement.innerText = password;
};

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomUppercase = () => String.fromCharCode(getRandomInt(65, 90)); // A-Z
const getRandomLowercase = () => String.fromCharCode(getRandomInt(97, 122)); //a-z
const getRandomNumber = () => getRandomInt(0, 9).toString();
const getRandomSymbol = () => {
  const specialSymbols = [
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "-",
    "+",
  ];
  const randomIndex = getRandomInt(0, specialSymbols.length - 1);
  return specialSymbols[randomIndex];
};

const clipboardButton = document.querySelector("#clipboard");
clipboardButton.onclick = () => {
  const password = passwordResultElement.innerText;
  navigator.clipboard.writeText(password);
  alert("Copied!");
};

//SCM - Source Code Management
//VCS - Version Control System
