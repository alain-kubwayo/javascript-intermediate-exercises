/*
Algorithm to reverse an integer: -51 becomes -15, -900 becomes -9
*/

const reverseInteger = number => {
    const arr = number.toString().split('');
    return arr[0] === '-' ? 
        -(parseInt(arr.slice(1).reverse().join(''))) : parseInt(arr.reverse('').join(''));
}