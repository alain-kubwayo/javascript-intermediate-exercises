/*
Write a program to print to the screen numbers 1 to n. For multiples of 3, print 'fizz', for multiples of 5, print 'buzz', for multiples of both 3 and 5, print 'fizzbuzz'
*/

const fizzBuzz = n => {
    for(let i=1; i <= n; i++) {
        if(i%3 === 0 && i%5 === 0){
            console.log('fizzbuzz');
        }else if(i%3 === 0){
            console.log('fizz');
        }else if(i%5 === 0){
            console.log('buzz');
        }else{
            console.log(i);
        }
    }
}