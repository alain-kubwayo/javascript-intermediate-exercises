/*
Given a string, reverse it. E.g. reverse('apple') === 'elppa'
*/

const reverseString = str => {
    return str.split('').reverse().join('');
}

const result = reverseString('apple');
console.log(result);