const fs = require('fs');


if (!fs.existsSync('./directory')) {
    fs.mkdir('./directory', (err) => {
        if (err) throw err
        console.log('Directory created successfully');
    })
}

if (fs.existsSync('./directory')) {
    fs.rmdir("./directory", (err) => {
        if (err) throw err
        console.log('Directory deleted successfully');
    })
}


// Comment rmdir to run this code

// fs.writeFile('./directory/file.txt', "This is file inside of directory folder", (err) => {
//     if (err) throw err
// })