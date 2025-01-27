const fs = require('fs');
const path = require('path');
const rs = fs.ReadStream(path.join(__dirname,'files','bigdata.txt'),'utf8');
const ws = fs.WriteStream(path.join(__dirname,'files','new_bigdata.txt'),);

/* rs.on('data',(datachunk)=>{
    ws.write(datachunk);
})
 */

rs.pipe(ws);