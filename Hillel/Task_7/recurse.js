/*1*/
function row(num){
    if (num > 0){
        if (num === 1){         
            return num;
        } else {
            return num + ' ' + row(num - 1);
        }
    }
    else if (num < 0){
        if (num === -1){         
            return num;
        } else {
            return num + ' ' + row(num + 1);
        }
    }
}
console.log(`Numbers from -7 to 1: ${row(-7)}`);

/*2*/
function sumTo(num){
    if (num === 1){         
        return num;
    } else {
        return num + sumTo(num - 1);
    }
}
console.log(`Sum from 7 to 0 is: ${sumTo(7)}`);

/*3*/
function factorial(num){
    if (num === 1){         
        return num;
    } else {
        return num * factorial(num - 1);
    }
}
console.log(`Facrorial of number 5 is: ${factorial(5)}`);