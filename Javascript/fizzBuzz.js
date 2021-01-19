function fizzBuzz(num){
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0){
            console.log(`${i}: fizzbuzz`);
        }
        else if (i % 3 === 0){
            console.log(`${i}: fizz`);
        }
        else if (i % 5 === 0){
            console.log(`${i}: buzz`);
        }
        else{
            console.log(i)
        }
    }
}

const x = 12;
fizzBuzz(x);

/*

- 'fizz' output instead of multiples of 3;
- 'buzz' output instead of multiples of 5;
- 'fizzbuzz' output instead of multiples of both 3 and 5.

*/
