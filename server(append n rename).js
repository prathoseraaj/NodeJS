// to update(append) a file
// we also can append gto create a new file

const fs = require('fs');
const path = require('path');

fs.appendFile(path.join(__dirname,'files','write.txt'), '\n \n pooi vella ya paru da', (err) => {
  if (err) throw err;
  console.log('updated');
  fs.rename(path.join(__dirname,'files','write.txt'), path.join(__dirname,'files','rename.txt'), (err) => {
    if (err) throw err;
    console.log('updated'); 
});
}); 

//if the file has error we should use process from node
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
  });