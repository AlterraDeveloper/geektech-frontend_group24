const passwordInput = document.querySelector("#password");

passwordInput.addEventListener("input", (event) => {
  const password = event.target.value;
  let passwordStrength = 0;
  passwordStrength += isPasswordHas8Length(password);
  passwordStrength += isPasswordHasLowerCase(password);
  passwordStrength += isPasswordHasUpperCase(password);
  passwordStrength += isPasswordHasDigits(password);
  passwordStrength += isPasswordHasSymbols(password);
  fillIndicators(passwordStrength);
});

//проверка, что в пароле не менее 8 символов
const isPasswordHas8Length = (password) => password.length >= 8;

//проверка, что в пароле есть строчные латинские буквы a-z
const isPasswordHasLowerCase = (password) => {
  for (const symbol of password) {
    if (symbol >= "a" && symbol <= "z") return true;
  }
  return false;
};

const isPasswordHasUpperCase = (password) => {
  for (const symbol of password) {
    if (symbol >= "A" && symbol <= "Z") return true;
  }
  return false;
};

const isPasswordHasDigits = (password) => {
  for (const symbol of password) {
    if (symbol >= "0" && symbol <= "9") return true;
  }
  return false;
};

const isPasswordHasSymbols = (password) => {
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
  for (const symbol of password) {
    if (specialSymbols.includes(symbol)) return true;
  }
  return false;
};

const fillIndicators = (passwordStrength) => {
  const indicatorsElements = document.querySelectorAll(".indicator");
  let color = "";
  switch (passwordStrength) {
    case 1:
      color = "#7e0b0b";
      break;
    case 2:
      color = "#c82727";
      break;
    case 3:
      color = "#d89433";
      break;
    case 4:
      color = "#cdd929";
      break;
    case 5:
      color = "#13a413";
      break;
  }

  //callback - функция обратного вызова
  indicatorsElements.forEach(function (indicator) {
    indicator.style.backgroundColor = "#b3b6b3";
  });

  for (let i = 0; i < passwordStrength; i++) {
    indicatorsElements[i].style.backgroundColor = color;
  }
};

const showPasswordIcon = document.querySelector("#showPassword");
showPasswordIcon.onclick = () => {
  const icon = showPasswordIcon.children[0];
  icon.classList.toggle("fa-eye");
  icon.classList.toggle("fa-eye-slash");
  if (icon.classList.contains("fa-eye")) {
    passwordInput.setAttribute("type", "password");
  } else {
    passwordInput.setAttribute("type", "text");
  }
};
