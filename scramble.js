const fs = require('fs');

let text = fs.readFileSync('./wordlist.txt').toString();
let words = text.split("\n");
text = fs.readFileSync('./scrambled.txt').toString();
let scrambled = text.split("\n");
let sortedWords = words.map(word => {
    return word.split('').sort().join('');
});
let unscrambled = scrambled.map(word=>{
    let sorted = word.split('').sort().join('');
    let index = sortedWords.findIndex(w => w == sorted);
    return words[index];
});

console.log(unscrambled.join(','));
