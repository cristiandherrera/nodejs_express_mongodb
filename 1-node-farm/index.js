const fs = require('fs')


// Blocking synchronous way
const text = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(text)

const textOut = `This is what we know about avocados: ${text}. \nCreated on ${Date.now()}`

fs.writeFileSync('./txt/output.txt', textOut)
console.log("File Written!");