import { readFile } from 'node:fs';

readFile('./files/start.txt', 'utf8', (err, data) => {
  if (err) throw err;
  //console.log(data.toString()); //convert to string
  console.log(data); //as we use encoding 
  //console.log(data);
}); 