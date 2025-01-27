import { readFile } from 'node:fs';
import path from 'node:path';

readFile(path.join(__dirname,'files','start.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  //console.log(data.toString()); //convert to string
  console.log(data); //as we use encoding 
  //console.log(data);
}); 

//if the file has error we should use process from node
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
