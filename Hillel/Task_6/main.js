let arr = [1,2,3,4,5,6,7,8,9,10];
/*1*/
function sum(...theArgs){
    return theArgs.reduce(function(prev, curr){
        return prev + curr;
    })
}
console.log(`Sum of actual elements of the array is: ${sum(1,2,3,4,7,10,15)}`);

/*2*/
function center(array){
    let res = new Array;
        if(array.length % 2 === 0){
            res.push(array.length / 2, (array.length / 2) + 1);
        }
        if(array.length % 2 != 0){
            res.push(Math.ceil(array.length / 2));
        }
    return res;
}
console.log(`Central elements of the array ${arr} is: ${center(arr)}`);

/*3,4*/
function doFunc(num1, num2, func){
    return func(num1, num2);
};

function power(num, pow){
    let res = 1;
    for(let i = 0; i < pow; i++){res *= num};
    return res;
};
function sum(num, num1){
    return num + num1;
};
function mul(num, num1){
    return num * num1;
};
function div(num, num1){
    return num - num1;
};

console.log(`2 + 5 is: ${doFunc(2,5,sum)}`);
console.log(`2 to the power of 5 is: ${doFunc(2,5,power)}`);

/*5,6*/
function arrcopy(array, func){
    let res = array.slice();
    if (func !== undefined){console.log(`Copied & reversed array: ${func(res)}`)}
    return `Original array: ${array}`;
}
function reverse(arr2){
    let res = [];
    for(let i = 1; i <= arr2.length; i++){
        res.push(arr2[arr2.length - i]);
    }
    return res;
}
console.log(arrcopy(arr,reverse));
