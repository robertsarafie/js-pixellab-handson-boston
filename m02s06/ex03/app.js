const { readFileSync } = require('fs');

const data = readFileSync('file.txt', 'utf-8');

console.log(data);
