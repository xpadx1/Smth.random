let str = 'microsoft Word';
let newString = str.replace ('m' , 'M');
console.log (newString , '\n' , '5th letter:' , newString[4])

let k = 0;
for (let i = 0; i < str.length; i++){
  if(str[i] == "o"){
    k++
  }
}
console.log(' O amount: ', k)
console.log(str.charCodeAt(4)) //returns Unicode of letter o