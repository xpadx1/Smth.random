function palindromeCheck(x){
    
    let result = '';
    let y = x.toLowerCase()
    for(let i = x.length; i > 0; i--){
        result += y[i-1]
    }
    if (result === y){
        console.log(true);
    }else{
        console.log(false);
    }
    console.log(result)
}

palindromeCheck('рЕпПеР')

//Сhecks if a word is palindrome
