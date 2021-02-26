let num = (prompt('Enter a random number'));
let pow = (prompt('Enter a random power'));
let result = 1;
function factorial(num){
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}
function power(num, pow){
    let powresult = num;
    for(let i = 1; i < pow; i++){
        powresult *= num;
    }
    return powresult;
}
function fibonacci(num){
    let arr = [1,0];
    let fibResult = 0
    for(let i = 0; i <= num; i++){
        fibResult = arr[0] + arr[1];
        arr.unshift(fibResult);
    };
    arr.reverse()
    console.log(arr)
    return arr[num-1];
}
document.write(`The factorial of ${num} is ${factorial(num)}`);
document.write(`<p>Number ${result} to the power of ${pow} is equal to ${power(result, pow)}</p>`);
document.write(`<p>Sequence fibonacci number ${num} is equal to ${fibonacci(num)}</p>`);




