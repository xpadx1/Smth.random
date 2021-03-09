/*1*/
function random(max){
    let result = new Array;
    for(let i = 0; i < max; i++){
        result.push(Math.floor(Math.random()*Math.floor(max)));
    }
    return result;
}

/*2*/
function compare(arr1,arr2){
    arr1sum = 0;
    arr2sum = 0;
    arr1.forEach(function(arr, index){
        if(typeof arr1[index] === 'number'){ 
            arr1sum += arr1[index];
        }});
    arr2.forEach(function(arr, index){
        if(typeof arr2[index] === 'number'){ 
            arr2sum += arr2[index];
        }});
    console.log(arr1, arr2);
    console.log(arr1sum, arr2sum);
    if(arr1sum < arr2sum) {return `The biggest array: ${arr2}`}
    else {return `The biggest array: ${arr1}`};
}
console.log(compare(random(10), random(10)));

/*3*/
function doMath(x, znak, y){
    switch(znak){
        case '+': return x + y;
        case '-': return x - y;
        case '*': return x * y;
        case '/': return x / y;
        case '%': return x % y;
        case '^': return x ^ y;
    }
}
console.log('Result: ' + doMath(2, '-', 3));

/*4*/
function remove(string, letters){
    for(let i = 0; i <= string.length; i++){
        letters.forEach(function(arr, index){
            if(string[i] === letters[index]){
                string = string.replace(letters[index], '') 
                i--
            };
        });
    }
    return string;
}
console.log(remove('Let`s suck some dicks', ['s', 'e']))

/*5*/
const input = [1,2,3,4,5,6];
function isEven(x) { return x % 2 === 0; }
function filter(array, isEven){
    let res = new Array;
    array.forEach(function(arr, i){
        if(isEven(array[i]) === true){res.push(array[i])};
    })
    return res;
}
console.log(filter(input, isEven));



