/*1 , 3*/
function random(max){
    let result = [];
    for(let i = 0; i < max; i++){
        const x = Math.floor(Math.random()*Math.floor(max));
        result.push(x);
    }
    return result;
}

let array = random(15);
document.write(`1) Random array: ${array}`);
let resarray = [];
for(let i = 0; i <= array.length; i++){
    if(array[i] % 2 === 0 ){
        resarray.push(array[i]);
    }
    else{
        resarray.push(0);
    };
};
array.sort(function(a,b){ 
    return a - b;
});
document.write(`<p>2) The smallest number from array: ${array[0]}</p>`);
document.write(`<p>3) The biggest one: ${array.reverse()[0]}</p>`);
document.write(`<p>4) Random array, but with replacement of odd numbers on zero: ${resarray}</p>`);

/*2*/
let arr1 = [];
for(let i = 0; i < 5; i++){
    arr1.push(Number(prompt('Enter a random number')));
    if(isNaN(arr1[i]) === true){
        alert('Please, enter a number, not a string ');
        arr1.splice(i,1);
        i--;
    }
    else if(arr1[i] < 0){
        alert('Please, enter a positive number ');
        arr1.splice(i,1);
        i--;
    }
} 
document.write(`<p>5) The array you've entered: ${arr1}</p>`);

/*4*/
function reverse(arr2){
    let res = [];
    for(let i = 1; i <= arr2.length; i++){
        res.push(arr2[arr2.length - i]);
    }
    return res;
}
document.write(`6) The analogue of reverse() method: ${reverse(arr1)}`);

