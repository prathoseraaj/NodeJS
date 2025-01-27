const fs = require('fs')

fs.mkdir('./new',(err)=>{
    if(err) throw err
    console.log('Directory created');
});

//if the file has error we should use process from node
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
  });