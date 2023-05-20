/*
Write a function 'chunk(arr, n)' that returns chunked array of size n at the least. For example:
Given: [1, 4, 12, 3, 2, 6, -9, 0], n=3 return [[1, 4, 12], [3, 2, 6], [-9, 0]]
Given: [1, 4, 12, 3, 2, 6, -9, 0], n=4 return [[1, 4, 12, 3], [2, 6, -9, 0]]
Given: [1, 4, 12, 3, 2, 6, -9, 0], n=7 return [[1, 4, 12, 3, 2, 6, -9], [0]]
*/

const chunks = (arr, n) => {
    const chunked = [];
    while(arr.length > 0){
        chunked.push(arr.splice(0, n));
    }
    return chunked;
}

console.log(chunks([1, 4, 12, 3, 2, 6, -9, 0], 8));
