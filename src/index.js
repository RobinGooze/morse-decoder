var newVar = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"


const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
   let newStr = expr.split("**********");
   let letterStr = newStr.map((splitedLetter) => {
 
    let letter = splitedLetter.match(/.{0,10}/g);

    letter.pop();
    
    return letter;
   }
    );
//    for(let i = 0; i < newStr.length; i++) {
//     returnStr.push(MORSE_TABLE.map())
//    }

   return letterStr;
}

console.log(decode(newVar));
