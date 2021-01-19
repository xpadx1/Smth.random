function shuffle(arr){
    let result = [arr[Math.floor(Math.random() * Math.floor(arr.length))]];
    for(let i = 1; i<arr.length; i++){
        let position = Math.floor(Math.random() * arr.length)
        if(arr[position] === result[i-1] || arr[position] === result[i-2]){
            i--;
        }else{
            result.push(arr[position])
         }
    }
    console.log('First method: ' + result)
}

let arr = [1, 2, 3];
shuffle(arr);

function shuffle2(array) {
    return array.sort(() => Math.random() - 0.5);
  }
let arr2 = [1, 2, 3];
shuffle2(arr2)
console.log('Second method: ' + arr2)

// Randomly shuffles an array ( 2 methods )