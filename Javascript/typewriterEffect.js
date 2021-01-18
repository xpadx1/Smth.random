const text = ('Fisting is three hundred bucks');
const typeText = () => {
    let counter = 0;
    let result = '';
    const typeWrite = () => {
        setTimeout(function() {
            result += text[counter];
            counter++;
            console.log(result);
            if (counter < text.length){
                typeWrite();
            }
        }, 200); 
    }
    typeWrite();
    
};
typeText();





