function random(max){
    let result = [];
    for(let i = 0; i<max; i++){
        const x = Math.floor(Math.random()*Math.floor(max));
        result.push(x);
    }
    return result;
}

function search(arr, start, end){
    let res = [];
    for(let i = 0; i<=arr.length; i++){
        if (arr[i] > start && arr[i] < end){
            res.push(arr[i]);
        }
    }
    return res.sort()
}
const array = random(30);
console.log(search(array, 15, 30));