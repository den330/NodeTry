const os = require('os');
const { add } = require('./math');
const path = require('path');
const fsPromise = require('fs').promises;

console.log(os.homedir());
console.log(add(3,5));

const fileOps = async () => {
    try {
        const data = await fsPromise.readFile(path.join(__dirname, 'files', 'toRead.txt'), 'utf8');
        await fsPromise.writeFile(path.join(__dirname, 'files', 'toWrite.txt'), 'new write 2');

        await fsPromise.appendFile(path.join(__dirname, 'files', 'toWrite.txt'), 'add a new line');
        
        await fsPromise.rename(path.join(__dirname, 'files', 'toWrite.txt'), path.join(__dirname, 'files', 'toWriteCompleted.txt'));

        console.log('completed');
    } catch (err) {
        console.error(err);
    }
}

fileOps();



process.on('uncaughtException', (err) => {
    console.error(`uncaught err is ${err}`);
    process.exit(1);
});