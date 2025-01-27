const fs = require('fs')

if(!fs.existsSync('./new')){
    fs.mkdir('./new',(err)=>{
        if(err) throw err
        console.log('Directory created');
    });
}
else{
    console.log('file already exists')
}


//if the file has error we should use process from node
process.on('uncaughtException', err => {
    console.error(`There was an uncaught error: ${err}`);
    process.exit(1);
  });