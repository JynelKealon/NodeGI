const process = require('process');

const args = process.argv.slice(2);

const numbers = args.map(Number)

const sum = numbers.reduce((x, y)=> x + y, 0)

console.log(sum)