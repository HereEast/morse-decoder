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
    '**********': ' ',
};

function decode(expr) {
    let lettersArr = [];

    for(let i = 0; i < expr.length; i += 10) {
        let letter = expr.slice(i, i + 10);
        lettersArr.push(letter);
    }

    function removeZero(str) {
        let strArr = str.split('');
        let idx = strArr.findIndex(el => el === '1');
        strArr.splice(0, idx);
        return strArr.join('');
    }

    let noZeros = lettersArr.map(el => removeZero(el));

    let ten = /10/gi;
    let eleven = /11/gi;
    let dot = '.';
    let dash = '-';

    let replacedWithDots = noZeros.map(el => el.replace(ten, dot));
    let dotsDashes = replacedWithDots.map(el => el.replace(eleven, dash));
    let mapLetters = dotsDashes.map(el => MORSE_TABLE[el]);

    return mapLetters.join('');
}

module.exports = {
    decode
}