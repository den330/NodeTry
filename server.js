const os = require('os');
const { add } = require('./math');
const path = require('path');
const fs = require('fs');

console.log(os.homedir());
console.log(add(3,5));

fs.readFile(path.join(__dirname, 'files', 'toRead.txt'), 'utf8', (err, data) => {
    if(err) throw err;
    console.log(data);
});

fs.writeFile(path.join(__dirname, 'files', 'toWrite.txt'), 'new write', (err) => {
    if(err) throw err;
    console.log("write complete");
});

fs.appendFile(path.join(__dirname, 'files', 'toWrite.txt'), 'add a new line', (err) => {
    if(err) throw err;
    console.log("append complete");
});


process.on('uncaughtException', (err) => {
    console.error(`uncaught err is ${err}`);
    process.exit(1);
});