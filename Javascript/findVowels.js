function findVowels(word){
    let result = 0;
    const vowels = ['a', 'e', 'u', 'y', 'i', 'o'];
    for (let value of word)  {
        if (vowels.includes(value)){
            result++;
        }
    }
    return result;
}

let x = 'three';
console.log(findVowels(x))

//The main purpose of this code is to find an amount of vowels in the word

