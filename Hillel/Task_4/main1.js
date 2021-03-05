let matrix = [
    [1,2,3,0,9],
    [13,5,9,11,9],
    [4,3,6,3,7],
    [7,9,12,6,7]
];
console.log('Two-dimensional array:', matrix);
let maxsum;
let minsum;
let result = new Array;
for(let i = 0; i < matrix.length; i++){
    result.push(sum(matrix[i]));
}
function sum(array){
    let arrSum;
    let sum = 0;
    array.forEach(function(arr, index){
        sum += array[index];
    });
    arrSum = sum;
    return arrSum;
};
let max;
function findMax(arr){
    for(let i = 0; i < result.length; i++){
        if(result[i] === Math.max.apply(Math, arr)){
            console.log(`The row with the highest sum of elements: ${matrix[i]}`);
            maxsum = matrix[i];
            matrix[i] = minsum;
        };
        if(result[i] === Math.min.apply(Math, arr)){
            console.log(`The row with the lowest sum of elements: ${matrix[i]}`);
            minsum = matrix[i];
            max = i;
        };
    };
};
findMax(result);
matrix[max] = maxsum
console.log('Switched highest and lowest rows:', matrix)

