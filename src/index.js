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

const parseNum2Morse = (str) => {
    const table = {
        '10': '.',
        '11': '-',
        "00": "",
        "**": " "
    };

    const result = [...str].map((x, i, arr) => {
        if (i % 2 == 0) {
            const pairNum = x + arr[i + 1];
            const morzeSym = table[pairNum];
            return morzeSym;
        }
    })

    return result.join('');
}

function decode(expr) {
    const arrLetters = expr.split('');
    let countLetters = arrLetters.length / 10;
    
    const arrMorzeSyms = [];
    while (countLetters-- > 0) {
        let arrNums = arrLetters.splice(0, 10).join('');
        arrMorzeSyms.push(parseNum2Morse(arrNums));
    }


    const table = {
        ...MORSE_TABLE,
        '     ': ' '
    }

    const result = arrMorzeSyms.map(x => table[x]);

    return result.join('');
}

module.exports = {
    decode
}
