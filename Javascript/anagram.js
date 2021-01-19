function anagram(word1, word2){
    let x = 0;
    let result = '';
    if (word1.length != word2.length){
        return false;
    }
    for (let i = 0; i <= word1.length; i++){
        if (word1.toLowerCase()[x] === word2.toLowerCase()[i]){
            result += word1[x];
            i = 0;
            x++;
        }
        if (result === word1){
            return true;
        }
    };
    if (result != word1){
        return false;
    }
}

console.log(anagram('Finder','friend'));

