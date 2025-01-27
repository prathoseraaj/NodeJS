// to write a file

const fs = require('fs');
const path = require('path');

fs.writeFile(path.join(__dirname,'files','write.txt'), 'naa enna panurennu paakuriyada body soda', (err) => {
  if (err) throw err;
  console.log('write complete'); 
}); 
//if the file has error we should use process from node
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
  });