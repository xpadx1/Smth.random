let a = [1,2,3,4,5,6,7,8,9];
console.log(a)
const len = a.length
let res = new Array();
let arrays = [], size = 2;
while (a.length > 0) arrays.push(a.splice(0, size));
arrays.forEach(function(ar, index){
    arrays[index].reverse();
    for(let i = 0; i<size; i++)
        if(arrays[index].length === 2){
            res.push(arrays[index][i]);
        }
        else{
            res.push(arrays[index][0]);
        };
});
if(len % 2 != 0){
    res.pop();
}
console.log(res)



