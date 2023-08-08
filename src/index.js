const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let newStr = expr.split("**********");
    let word = newStr.map(splitedWord => splitedWord.match(/.{1,10}/g));
    let letters = word.map(
        element => element.map(
            splitLetter => splitLetter.match(/.{1,2}/g)));
    let toMorse = [];

    // delete all 00

    letters.forEach(element => {
        element.map(secondElem => {
            for (let i = 0; i < secondElem.length; i++) {
                if (secondElem[i] === "00") {
                    secondElem.shift();
                    i--
                }
            }
        });
    });

    // turn number into morse and to normal string;

  for(let i = 0; i < letters.length; i++){
    
    let morseStr = [];
    let morse = [];
    
    for(let k = 0; k < letters[i].length; k++){
        for(let n = 0; n < letters[i][k].length; n++){
            if(letters[i][k][n] === "10") letters[i][k][n] = ".";
            else letters[i][k][n] = "-";
        }
        morse.push(letters[i][k].join(""));
    }
    
    morse.forEach(elem => {
        morseStr.push(MORSE_TABLE[elem]);
    })

    toMorse.push(morseStr.join(""));
  }
    return toMorse.join(" ");
}


module.exports = {
    decode
}
