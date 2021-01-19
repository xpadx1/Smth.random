const obj = {
    name: 'Arsenii',
    surname: 'Shchastlyvyi',
    age: 18
};

function reverse (value){
    let res = '';
    len = obj.name.length
    for(let i = 1; i <= len; i++){
        res += obj.name[len - i];
    }
    obj.name = res;
}

reverse(obj.name);
console.log(obj);

//Reverse my name
