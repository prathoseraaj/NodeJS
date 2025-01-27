const fsPromise = require('fs').promises
const path = require('path')

const nodeops = async () => {
    try{
        const data = await fsPromise.readFile(path.join(__dirname,'files','start.txt'),'utf8');
        console.log(data);
        await fsPromise.writeFile(path.join(__dirname,'files','about.txt'),'Naa thandaaa leoooo....leoooo daasssss');
        console.log('writeFile completed');
        await fsPromise.appendFile(path.join(__dirname,'files','about.txt'),'\n\n ratata.....tata..ta..ta..ta');
        console.log('appendFile completed');
        await fsPromise.rename(path.join(__dirname,'files','about.txt'),path.join(__dirname,'files','leodas.txt'));
        console.log('renamed sucessfully');
    }
    catch(err){
        console.error(err);
    }
}

nodeops();