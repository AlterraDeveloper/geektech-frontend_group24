// console.log(a);

// var a = 5;

// //declaration
// function sum(a, b) {
//     return a + b;
// }

// //expression
// var sum2 = function (a, b) {
//     return a + b;
// };

// console.log(sum2(5,5));

console.log();

const radioBtns = document.querySelectorAll("input[type=radio]");

const highlightWord = (word) => `<span>${word}</span>`;

function highlightText(btnId) {
  const text = document.querySelector("p");
  const words = text.innerText.split(" ");

  const highlightedText = [];

  for (const word of words) {
    switch (btnId) {
      case "radio1":
        highlightedText.push(word.length > 8 ? highlightWord(word) : word);
        break;
      case "radio2":
        highlightedText.push(["а", "я", "у", "и"].includes(word[0].toLowerCase()) 
                            && word.length > 2
          ? highlightWord(word)
          : word);
        break;
      case "radio3":
        highlightedText.push(
          word.endsWith("тся") || word.endsWith("тся")
            ? highlightWord(word)
            : word);
        break;
    }

    text.innerHTML = highlightedText.join(" ");
  }
}

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener("change", (event) => {
    const btnId = event.target.id;
    highlightText(btnId);
  });
});


const clickMe = document.getElementById('clickMe');

clickMe.onclick = () => {
    const color = chroma.random();
    document.body.style.backgroundColor = color;
}

let timer = document.getElementById('timer');
document.querySelector('.square').classList.add("rotating")
const counterCancelToken = setInterval(() => {
  console.log(`${timer.innerText--}...`);
}, 1000); //1 sec

setTimeout(() => {
  clearInterval(counterCancelToken);
  document.querySelector('.square').classList.remove("rotating")
}, 10_000); //60 sec