// Given this input: ['A:1', 'A:1', 'B:3', 'A:5']
// return this output: 'A:7,B:3'

const searchingChallenge = strArr => {
    const obj = {};
    for(let i=0; i<strArr.length; i++){
        const [key, value] = strArr[i].split(':');
        
        obj[key] ? obj[key] +=  +value :
        obj[key] = +value;
    }
    return Object.entries(obj).sort().map(arr => arr.join(':')).join(',');
}

console.log(typeof searchingChallenge(['Z:8',  'A:1', 'Y:12', 'A:1', 'B:3', 'A:-5']));