/*
Given a string, reverse it. E.g. reverse('apple') === 'elppa'
*/

const reverseString = str => {
    const strArray = str.split('');
    let strReversed = '';
    for(let i=strArray.length-1; i>=0; i--){
        strReversed += strArray[i];
    }
    return strReversed;
}

const result = reverseString('greetings!');
console.log(result);