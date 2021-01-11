function search (string, stringSearch,stringReplace){
    const toLow = stringSearch.toLowerCase()
    if(string.includes(toLow)){
        console.log(string.replace(toLow, stringReplace.toLowerCase()));
        
    }
}
const x = search('Hollywood', 'Wood', 'Land')