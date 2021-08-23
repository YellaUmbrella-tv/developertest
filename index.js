const fs = require('fs');

let sourcedata = fs.readFileSync('./data/data.json');



let destdata = {};

fs.writeFileSync('./output/output.json', JSON.stringify(destdata));

console.log('wrote ./output/output.json');
