console.log('hello');

const os = require('os');
const path = require('path');

console.log(os.type());
console.log(os.version());
console.log(os.homedir());

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));
console.log(path.basename(__filename));
console.log(path.extname(__filename));

console.log(path.parse(__filename)); //parse the every detail of the file 

const math = require('./math'); 
const {add,sub,mul,div} = require('./math'); 

// from 19 line
console.log(math.add(3,3));
console.log(math.sub(4,4));
console.log(math.mul(12,5));
console.log(math.div(12,6));

console.log('________________') // to seprate

// we can also destucture it and execute 
//form 20 line
console.log(add(3,3));
console.log(sub(4,4));
console.log(mul(12,5));
console.log(div(12,6));