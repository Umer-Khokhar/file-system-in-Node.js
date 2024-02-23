const fs = require('fs');

const readStream = fs.createReadStream('./files/lorem.txt', 'utf8');
const writeStream = fs.createWriteStream('./files/newLorem.txt');

// readStream.on('data', (chunk) => {
//     writeStream.write(chunk);
// })

readStream.pipe(writeStream)