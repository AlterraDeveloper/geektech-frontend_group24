//ECMAScript 6 - ES 6

//ES5: var
//ES6: let, const
//Hoisting: всплытие, поднятие
var _var;

 var _var = 5;

var _var = "qwerty";

// console.log(_var);

// console.log(_const);

let _let = 5;
const _const = 5;

_let = "qwerty";
// _const++; // _const = _const + 1

console.log(_let);

const me = {
    surname: "Kiselev",
    name: "Evgenii",
}
console.log(me);
me.FatherName = "Dmitrivich";
me.name = "Artem";

me = {}

console.log(me);

const numbers = [1,2,3,4];
console.log(numbers);
numbers.push(5);
console.log(numbers);

