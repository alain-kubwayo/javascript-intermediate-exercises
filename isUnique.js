/*
Implement an algorithm to determine if a string has all unique characters
*/

const isUnique = str => {
    return str.length === new Set(str).size;
}

console.log(isUnique('hello')); // false
console.log(isUnique('hola')); // true
