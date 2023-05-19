/*
Find a palindrome: palindrome('abba') === true since abba === abba
palindrome('abcdefg') === false since abcdefg !== gfedcba
*/

const palindrome = str => {
    return str.split('').reverse().join('').toLowerCase() === str.toLowerCase();
}

console.log(palindrome('Abba')); // true
console.log(palindrome('abcdefg')); // false