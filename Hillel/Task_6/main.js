/*1*/
function sum(...theArgs){
    return theArgs.reduce(function(prev, curr){
        return prev + curr;
    })
}
console.log(sum(1,2,3,4,5,7,10));

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
console.log(center([1,2,3,4,5,6,7,8,9,10]));

/*3*/