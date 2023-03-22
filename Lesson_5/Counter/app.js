const counterValueElement = document.getElementById("value");

const increaseButton = document.querySelector("#increase");
const resetButton = document.querySelector("#reset");
const decreaseButton = document.querySelector("#decrease");

let counterValue = 0;

increaseButton.addEventListener("click", () => {
  counterValue++;
  setCounter(counterValue);
});

resetButton.addEventListener("click", () => {
  counterValue = 0;
  setCounter(counterValue);
});

decreaseButton.addEventListener("click", () => {
  counterValue--;
  setCounter(counterValue);
});

//function declaration - определение функции
// function setCounter(value){
//     counterValue = value;
//     if(value > 0){
//         counterValue.style.color = "green";
//     }else if(value === 0){
//         counterValue.style.color = "gray";
//     }else{
//         counterValue.style.color = "red";
//     }
// }

//function expression - функциональное выражение
const setCounter = (value) => {
  counterValueElement.innerText = counterValue;
  if (value > 0) {
    counterValueElement.style.color = "green";
  } else if (value === 0) {
    counterValueElement.style.color = "gray";
  } else {
    counterValueElement.style.color = "red";
  }
};
