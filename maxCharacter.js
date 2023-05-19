/*
Find the character that appears the most and how many times it appears.
E.g. 
32eddseew3
#%he3#33ll#l#o
*/

const maxChar = str => {
    let obj = {};
    for(let char of str) {
        !obj[char] ? obj[char] = 1 : obj[char]++;
    }
    let maximumNumber = 0;
    let mostFrequentCharacter = '';
    for(let key in obj){
        if(obj[key] >= maximumNumber){
            maximumNumber = obj[key];
            mostFrequentCharacter = key;
        }
    }
    console.log(`The character ${mostFrequentCharacter} appears the most: ${maximumNumber} times`);
}

maxChar('#%he3#33ll#l#o'); // The character # appears the most: 4 times
maxChar('4w w $ $_ 3pw'); // The character   appears the most: 4 times
