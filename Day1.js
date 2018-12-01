function readFile(fileName) {
    const fs = require("fs");
    const path = require("path");
    return fs.readFileSync(fileName, 'utf8');
}

function findFrequency(textBuffer) {
    const arr = textBuffer.split('\n').filter(line => {
        return line.length > 0;
    });

    let frequency = 0;
    arr.forEach(element => {
        frequency = frequency + parseInt(element);
    });

    return frequency;
}

const textFileBuffer = readFile("./input.txt");
const frequency = findFrequency(textFileBuffer);
console.log(frequency);
