const { readFileSync } = require('fs');

const part1 = readFileSync('./another.txt', 'utf-8');
const part2 = readFileSync('my-file.txt', 'utf-8');
const part3 = readFileSync('dir/this-other-file.txt', 'utf-8');

console.log(`${part1} ${part2} ${part3}!`);
