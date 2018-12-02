function readFile(fileName) {
    const fs = require("fs");
    const path = require("path");
    return fs.readFileSync(fileName, 'utf8');
}

function parseFile(textBuffer)
{
    const elements = textBuffer.split('\n').filter(line => {
        return line.length > 0;
    });

    return elements;
}

function findFrequency(frequencies) {
    
    let frequency = 0;
    for(element of frequencies)
    {            
        frequency = frequency + parseInt(element);
    }
    return frequency;
}

function findFirstRepeatingFrequency(frequencies)
{
    let frequency = 0;
    let repeatFrequencyTest = new Set();
    let foundDuplicate = false;
    while(!foundDuplicate)
    {
        for(element of frequencies)
        {            
            frequency = frequency + parseInt(element);
            if (repeatFrequencyTest.has(frequency))
            {
                foundDuplicate = true;
                break;
            }
            else
            {
                repeatFrequencyTest.add(frequency);
            }
        }
    }

    return frequency;
}

const textFileBuffer = readFile("./input.txt");
const frequencies = parseFile(textFileBuffer);
const frequency = findFrequency(frequencies);
console.log("Frequency :" + frequency);

const duplicatedFrequency = findFirstRepeatingFrequency(frequencies);
console.log("Duplicate frequency :" + duplicatedFrequency);
