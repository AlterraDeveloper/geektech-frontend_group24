

let count = 10;
const counterCancelToken = setInterval(() => {
  console.log(`${count--}...`);
}, 1000); //1 sec

setTimeout(() => {
  clearInterval(counterCancelToken);
}, 10_000); //10 sec
