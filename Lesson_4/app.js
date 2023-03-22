//URL - Unified Resource Locator
//URI - Unified Resource Identifier
//https://youtube.com/live/7BRURYOW-CI?feature=share

//HTTP(S) - Hyper Text Transfer Protocol (Secure)
//HTML - Hyper Text Markup Language

//IP - Internet Protocol
//0.0.0.0 - 255.255.255.255
//15.41.78.25 -> yandex.ru
//DNS  - Domain Name Service

//Rendering
//Parsing HTML -> DOM
//DOM  - Document Object Model

// var DOM = {
//     head: {},
//     body: {
//         children: [
//             {
//                 tag: "div",
//                 classList: ["cardBlock"],
//                 children: [
//                     {
//                         tag: "input",
//                         type: "text",
//                         id: "cardNumberTextBox"
//                     }
//                 ]
//             }
//         ]
//     }
// }

var cardBlockElement = document.querySelector(".cardBlock");
var cardNumberInput = document.getElementById("cardNumberTextBox");
var cardNumberCheckResultTextElement =
  document.querySelector("#checkResultText");

//BIN - Bank Identification Number
//CVV  -Customer verification
//CVC - Customer verification code

//Luhn algorithm

function validateCardNumber(cardNumber) {
  var cardCheckSum = 0;
  var isSecond = false;
  //i -= 1 или i = i - 1
  for (var i = cardNumber.length - 1; i >= 0; i--) {
    var currentSymbol = cardNumber[i];
    if (isSecond) {
      var doubled = currentSymbol * 2;
      var doubledText = doubled.toString().padStart(2, "0");
      // 08 = 0 + 8 = 8
      // 16 = 1 + 6 = 7
      var result = Number(doubledText[0]) + Number(doubledText[1]);
      cardCheckSum += result;
    } else {
      cardCheckSum += Number(currentSymbol);
    }
    isSecond = !isSecond;
  }
  console.log(cardCheckSum);
  return cardCheckSum % 10 === 0;
}

validateCardNumber("4215890119971853");

cardNumberInput.addEventListener("input", function (event) {
  var cardNumber = event.target.value;
  event.target.classList = [];
  if (cardNumber.length !== 16) return;
  var cardNumberCheckResult = validateCardNumber(cardNumber);
  event.target.classList.add(cardNumberCheckResult ? "success" : "error");
  cardNumberCheckResultTextElement.innerText = cardNumberCheckResult
    ? "OK"
    : "ERROR";
});

var button = document.getElementById('clickme');
var counter = 0;
button.addEventListener('click', function(event){
    counter++;
    event.target.innerText = "Click me " + counter
})
