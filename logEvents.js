const {format} = require('date-fns')
const {v4:uuid} = require('uuid')

const fs = require('fs')
const fsPromise = require('fs').promises
const path = require('path')

const logevents = async(message) =>{
    const dateTime = `${format(new Date(), 'dd.MM.yy\tHH.mm.ss')}`
    const logItem = `${dateTime}\t${uuid()}\t${message}\n` 
    console.log(logItem)
    try{
        if(!fs.existsSync(path.join(__dirname,'logs'))){
            await fsPromise.mkdir(path.join(__dirname,'logs'))
        }
        await fsPromise.appendFile(path.join(__dirname,'logs','eventFile.txt'),logItem)
    }
    catch(err){
        console.error(err)
    }
}

module.exports = logevents 